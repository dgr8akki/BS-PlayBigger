import React from 'react';
import axios from '../../axios';
import styles from './SiteLayout.module.scss';
import SiteHeader from '../SiteHeader';

const SiteLayout = ({ children }) => (
  <div>
    <SiteHeader />
    <div className={styles.container}>
      {
        children
      }
    </div>
  </div>
);

export default SiteLayout;
