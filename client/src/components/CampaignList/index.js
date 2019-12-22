import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import styles from './CampaignList.module.scss';
import DateRenderer from '../DateRenderer';
import CampaignCard from '../CampaignCard';
import ActionList from '../ActionList';
import PricingModal from '../PricingModal';

class CampaignList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
  }

  getColumns() {
    return [
      {
        title: 'Date',
        dataIndex: 'createdOn',
        key: 'date',
        width: 100,
        render: (text) => <DateRenderer unixTimestamp={text} />,
      },
      {
        title: 'Campaign',
        dataIndex: 'name',
        key: 'name',
        width: 160,
        render: (text, row) => <CampaignCard name={text} icon={row.imageUrl} region={row.region} />,
      },
      {
        title: 'View',
        dataIndex: 'price',
        key: 'price',
        width: 100,
        render: (text, row) => <PricingModal data={row} />,
      },
      {
        title: 'Actions',
        key: 'action',
        width: 100,
        render: (text, row) => (
          <ActionList
            csvUrl={row.csv}
            reportUrl={row.report}
            data={row}
          />
        ),
      },
    ];
  }

  render() {
    const { loading, data } = this.props;
    return (
      <Table
        pagination={false}
        columns={this.getColumns()}
        dataSource={data}
        rowClassName={styles.row}
        loading={loading}
      />
    );
  }
}
export default CampaignList;
