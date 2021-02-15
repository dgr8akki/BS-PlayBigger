import React, { Component } from 'react';
import Tabs from 'antd/lib/tabs';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CampaignList from '../CampaignList';
import campaignsActions from '../../actions';

const { TabPane } = Tabs;

class CustomTabs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData('upcoming');
  }

  render() {
    const { getData, campaigns } = this.props;
    const { live_list, past_list, up_list, loading } = campaigns;
    return (
      <Tabs
        defaultActiveKey="upcoming"
        onChange={getData}
        animated={false}
        tabBarGutter={24}
        tabBarStyle={{
          fontWeight: 500
        }}
      >
        <TabPane tab="Upcoming Campaigns" key="upcoming">
          <CampaignList data={up_list} loading={loading} />
        </TabPane>
        <TabPane tab="Live Campaigns" key="live">
          <CampaignList data={live_list} loading={loading} />
        </TabPane>
        <TabPane tab="Past Campaigns" key="past">
          <CampaignList data={past_list} loading={loading} />
        </TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = ({ campaigns }) => ({ campaigns });

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...campaignsActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CustomTabs);
