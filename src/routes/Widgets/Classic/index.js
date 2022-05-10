import React from 'react';
import { Box, Grid } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../@jumbo/components/GridContainer';
import NewRequests from '../../Dashboards/Intranet/NewRequests';
import RecentActivities from '../../Dashboards/Intranet/RecentActivities';
import CurrentProjectsSummary from './CurrentProjectsSummary';
import MarketingCampaign from './MarketingCampaign';

import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

const useStyles = makeStyles(() => ({
  dailyFeedRoot: {
    '& .scrollbar-container': {
      height: 332,
    },
  },
  userPhotosRoot: {
    '& .scrollbar-container': {
      height: '272px !important',
    },
  },
  latestNotiRoot: {
    '& .scrollbar-container': {
      height: 353,
    },
  },
  weeklySalesRoot: {
    '& .scrollbar-container': {
      height: 240,
    },
  },
}));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Widgets', link: '/widgets' },
  { label: 'Classic', isActive: true },
];

const Modern = () => {
  const classes = useStyles();
  return (
    <PageContainer heading="Classic Widgets" breadcrumbs={breadcrumbs}>
      <GridContainer>
        <Grid item xs={12} md={6} xl={3}>
          <UserProfileDetail />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <NewRequests />
        </Grid>
        <Grid item xs={12} sm={12} lg={6} xl={5}>
          <RecentActivities />
        </Grid>
        <Grid item xs={12} lg={6} xl={4}>
          <CurrentProjectsSummary />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <MarketingCampaign />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <TaskListExpandable />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Box className={classes.weeklySalesRoot}>
            <WeeklySales />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <Calculator />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <CurrentPlan />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <UserStatstics />
        </Grid>

        <Grid item xs={12} md={7} xl={4}>
          <GridContainer>
            <Grid item xs={12} sm={6}>
              <IdeasWidget />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Documents />
            </Grid>

            <Grid item xs={12} md={12}>
              <CitiesBgCard />
            </Grid>
          </GridContainer>
        </Grid>

        <Grid item xs={12} md={5} xl={4}>
          <GridContainer>
            <Grid item xs={12} sm={6} md={12}>
              <UserOrders />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <UserSummery />
            </Grid>
          </GridContainer>
        </Grid>

        <Grid item xs={12} md={6} xl={3}>
          <CalendarEvents />
        </Grid>
        <Grid item xs={12} md={6} xl={5}>
          <Box className={classes.dailyFeedRoot}>
            <DailyFeed />
          </Box>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Box className={classes.latestNotiRoot}>
            <LatestNotifications />
          </Box>
        </Grid>
        <Grid item xs={12} xl={8}>
          <PopularProducts />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <OurOffice />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <WeatherDetail />
        </Grid>
        <Grid item xs={12} md={6} xl={5}>
          <LatestPosts />
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <GridContainer>
            <Grid item xs={12} sm={6} md={12}>
              <WordOfTheDay />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <ProductImage />
            </Grid>
          </GridContainer>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Box className={classes.userPhotosRoot}>
            <UserPhotos />
          </Box>
        </Grid>
        <Grid item xs={12} xl={8}>
          <SiteVisitor />
        </Grid>
        <Grid item xs={12} xl={4}>
          <ProjectWorkedHours />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <CafeBasilico />
        </Grid>
        <Grid item xs={12} sm={6} xl={4}>
          <UserDetail />
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default Modern;
