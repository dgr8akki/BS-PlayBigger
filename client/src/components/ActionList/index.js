import React from 'react';
import styles from './ActionItem.module.scss';
import ActionItem from '../ActionItem';
import csvIcon from '../../assets/img/csv-icon.png';
import reportIcon from '../../assets/img/report.png';
import CampaignScheduler from '../CampaignScheduler';

const redirectToUrl = (url) => window.location.href = url;

const ActionList = ({ csvUrl, reportUrl, data }) => (
  <div className={styles.actionListWrapper}>
    <ActionItem
      title="CSV"
      icon={csvIcon}
      onClick={(e) => redirectToUrl(csvUrl)}
      width={19}
      height={24}
    />
    <ActionItem
      title="Report"
      icon={reportIcon}
      onClick={(e) => redirectToUrl(reportUrl)}
      width={24}
      height={24}
      className={styles.actionItems}
    />
    <CampaignScheduler data={data} />
  </div>
);

export default ActionList;
