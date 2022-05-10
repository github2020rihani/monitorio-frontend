import React from 'react';
import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import IntlMessages from '../../../@jumbo/utils/IntlMessages';
import Grid from '@material-ui/core/Grid';
import NewAuthors from './include/NewAuthors';
import NewsArticles from './include/NewsArticles';
import NewSubscribers from './include/NewSubscibers';
import AvgDailyTraffic from './include/AvgDailyTraffic';
import SiteTraffic from './include/SiteTraffic';



const breadcrumbs = [
  { label: <IntlMessages id={'sidebar.main'} />, link: '/' },
  { label: <IntlMessages id={'pages.samplePage'} />, isActive: true },
];

const SamplePage = () => {


  return (
    <PageContainer heading={<IntlMessages id="pages.samplePage" />} breadcrumbs={breadcrumbs}>
      <GridContainer>
      <Grid item xs={12} sm={6} xl={3}>
          <NewSubscribers />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <NewsArticles />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <NewAuthors />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <AvgDailyTraffic />
        </Grid>
        <Grid item xs={12}>
          <SiteTraffic />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default SamplePage;
