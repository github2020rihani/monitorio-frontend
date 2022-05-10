import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import makeStyles from '@material-ui/core/styles/makeStyles';
import GridContainer from '../../../../@jumbo/components/GridContainer';
import { CodeViewerCard } from '../../../../@jumbo/components/Common';
import CounterCard from '../../../../@jumbo/components/Common/CounterCard';
import CmtImage from '../../../../@coremat/CmtImage';
import { metrics } from '../../../../@fake-db';
import PageContainer from '../../..../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import MarketingCampaign from '../../../../routes/Widgets/Classic/MarketingCampaign';
import SynchronizedLineChart from './demo/SynchronizedLineChart';
import { getStatCountUser } from 'redux/actions/statUser';


const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderRadius: '50%',
    height: 66,
    minWidth: 66,
    width: 66,
  },
  section: {
    '&:not(:last-child)': {
      marginBottom: theme.typography.pxToRem(32),
    },
  },
  sectionHeading: {
    marginBottom: theme.typography.pxToRem(16),
  },
}));

const breadcrumbs = [
  { label: 'Statistique' },
  { label: 'Utilisateurs', isActive: true },
];

const demos = [

  {
    label: 'Synchronized Line Chart',
    link: 'synchronized-line-chart',
    component: <SynchronizedLineChart />,
    filename: './SynchronizedLineChart.txt',
  },

];

const Modern = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { statUserCount } = useSelector(({ statUser }) => statUser);
  useEffect(() => {
    dispatch(getStatCountUser());
  }, [dispatch]);
  return (
    <PageContainer heading="Statistique" breadcrumbs={breadcrumbs}>
      <GridContainer>
        

         {statUserCount.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={6}>
            <CounterCard
              icon={
                <Box className={classes.iconWrapper} style={{ borderColor: item.color + '88' }}>
                  <CmtImage src={item.imageIcon} alt="..." />
                </Box>
              }
              number={item.title}
              numberProps={{
                color: 'text.primary',
                fontSize: { xs: 20, xl: 22 },
                fontWeight: 'bold',
              }}
              label={item.subTitle}
              labelProps={{
                color: 'text.secondary',
                fontSize: 12,
                fontWeight: 'normal',
              }}
            />
          </Grid>
        ))}

<Grid item xs={12} md={12} xl={12}>
          <MarketingCampaign />
        </Grid>
        <Grid item xs={12} md={12} xl={12}>

        {demos.map((menu, index) => (
        <Box key={index} id={menu.link} className={classes.section}>
          <CodeViewerCard  language="jsx">
            {menu.component}
          </CodeViewerCard>
        </Box>
      ))}
              </Grid>
 

      </GridContainer>
    </PageContainer>
  );
};

export default Modern;
