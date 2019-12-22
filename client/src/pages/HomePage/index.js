import React, { Component } from 'react';
import axios from '../../axios';
import styles from './HomePage.module.scss';
import SiteLayout from '../../components/SiteLayout';
import BSHeader from '../../components/BSHeader';
import CustomTabs from '../../components/CustomTabs';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SiteLayout>
          <BSHeader title="Manage Campaigns" />
          <CustomTabs />
        </SiteLayout>
      </div>
    );
  }
}

export default HomePage;
