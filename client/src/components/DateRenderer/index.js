import React from 'react';
import styles from './DateRenderer.module.scss';
import { unixToDate, daysLeft } from '../../utils';

const DateRenderer = ({ unixTimestamp }) => (
  <>
    <div className={styles.date}>
      {
        unixToDate(unixTimestamp, 'MMM YYYY, DD')
      }
    </div>
    <div className={styles.time}>
      {
        daysLeft(unixTimestamp)
      }
    </div>
  </>
);

export default DateRenderer;
