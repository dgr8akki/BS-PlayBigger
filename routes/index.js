const loki = require('lokijs');
const bodyParser = require('body-parser');
const Lfsa = require('lokijs/src/loki-fs-structured-adapter');
const moment = require('moment');

const adapter = new Lfsa();
let campaigns = null;

const db = new loki('bluestacks.db', {
  adapter,
  autoload: true,
  // eslint-disable-next-line no-use-before-define
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000,
});

function databaseInitialize() {
  campaigns = db.getCollection('campaigns');

  if (campaigns === null) {
    db.addCollection('campaigns', {
      unique: ['alias'],
    });
  }
}

const APIRouter = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/api/test', (req, res) => {
    res
      .status(200)
      .send({ message: 'API testing successful' });
  });

  app.delete('/api/remove/:alias', (request, response) => {
    const res = {};
    const { params } = request;
    const { alias } = params;
    const result = campaigns.find({ alias });
    campaigns.remove(result);
    db.saveDatabase();

    res.status = 200;
    res.message = `Data deleted with alias: ${alias}`;

    response
      .status(200)
      .send(res);
  });

  app.post('/api/update/:alias', (request, response) => {
    const res = {};
    const { params, body } = request;
    const { alias } = params;
    const results = campaigns.find({ alias });
    const result = results[0];
    const {
      region, createdOn, price, csv, report, imageUrl,
    } = body;

    result.region = region || result.region;
    result.createdOn = Number(createdOn || result.createdOn);
    result.price = Number(price || result.price);
    result.csv = csv || result.csv;
    result.report = report || result.report;
    result.imageUrl = imageUrl || result.imageUrl;

    campaigns.update(result);
    db.saveDatabase();

    res.status = 200;
    res.message = `Data updated with alias: ${alias}`;

    response
      .status(200)
      .send(res);
  });

  app.get('/api/list/campaign/:type', (req, res) => {
    const { params } = req;
    const { type } = params;
    let data = {};
    const todayDayStart = Number(moment().startOf('day').format('X'));
    const todayDayEnd = Number(moment().endOf('day').format('X'));

    if (!type || type.toLowerCase() === 'all') {
      data = campaigns.find();
    } else if (type.toLowerCase() === 'upcoming') {
      data = campaigns.find({
        createdOn: {
          $gt: todayDayEnd,
        },
      });
    } else if (type.toLowerCase() === 'live') {
      data = campaigns.find({
        createdOn: {
          $between: [
            todayDayStart,
            todayDayEnd,
          ],
        },
      });
    } else if (type.toLowerCase() === 'past') {
      data = campaigns.find({
        createdOn: {
          $lt: todayDayStart,
        },
      });
    }
    const response = {
      status: 200,
      data,
      todayDayStart,
      todayDayEnd,
    };
    res
      .status(200)
      .send(response);
  });

  app.post('/api/add', (request, response) => {
    const { body } = request;
    const {
      name, region, createdOn, price, csv, report, imageUrl,
    } = body;
    const data = {
      alias: name.toLowerCase().replace(' ', '-'),
      name,
      region,
      createdOn: Number(createdOn),
      price: Number(price),
      csv,
      report,
      imageUrl,
    };
    const res = {};

    try {
      campaigns.insert(data);
      db.saveDatabase();
      res.status = 200;
      res.message = `Data added with name: ${name}`;

      response
        .status(200)
        .send(res);
    } catch (e) {
      res.status = 400;
      res.message = e.toString();

      response
        .status(400)
        .send(res);
    }
  });
};

module.exports = APIRouter;
