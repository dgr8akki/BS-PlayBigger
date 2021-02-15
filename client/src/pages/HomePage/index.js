import React  from 'react';
import SiteLayout from '../../components/SiteLayout';
import BSHeader from '../../components/BSHeader';
import CustomTabs from '../../components/CustomTabs';

const HomePage = () => (
    <div>
      <SiteLayout>
        <BSHeader title="Manage Campaigns" />
        <CustomTabs />
      </SiteLayout>
    </div>
  );

export default HomePage;
