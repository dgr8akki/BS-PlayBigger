import React from 'react';
import styles from './BSHeader.module.scss';

const BSHeader = ({ title }) => (
  <h1 className={styles.heading}>
    {
      title
    }
  </h1>
);

export default BSHeader;
