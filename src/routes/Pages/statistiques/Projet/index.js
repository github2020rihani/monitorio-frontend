import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getProjetInprogress } from 'redux/actions/StatProjet';
import { Grid } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { CodeViewerCard } from '../../../../@jumbo/components/Common';

import GridContainer from '../../../../@jumbo/components/GridContainer';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';
import ProjectInprogress from './components/ProjectInprogress';
import ProjectFinish from './components/ProjectFinish';
import ProjetByLoc from './components/ProjetByLoc';
import ChartProjectCreated from './components/ChartProjectCreated';
import ChartProjetByEtat from './components/ChartProjetByEtat';
import ChartProjetBySeteur from './components/ChartProjetBySeteur';


const useStyles = makeStyles(theme => ({
    orderLg2: {
      [theme.breakpoints.up('lg')]: {
        order: 2,
      },
    },
    orderLg1: {
      [theme.breakpoints.up('lg')]: {
        order: 1,
      },
    },

  }));

const breadcrumbs = [
  { label: 'Statistique' },
  { label: 'Projets', isActive: true },
];
const demos = [
  {
    label: 'Statistiques de projets crée par une semaine',
    link: 'tiny-bar-chart',
    component: <ChartProjectCreated />,
    filename: './TinyBarChart.txt',
  }
]
const demos2 = [
  {
    label: 'Statistiques de projets crée par etat',
    link: 'tiny-bar-chart',
    component: <ChartProjetByEtat />,
    filename: './TinyBarChart.txt',
  }
]
const demos3 = [
  {
    label: 'Statistiques de projets crée par secteur',
    link: 'custom-active-shape-pie-chart',
    component: <ChartProjetBySeteur />,
    filename: './TwoLevelPieChart.txt',
  },
];
const StatProjet = () => {
  const classes = useStyles();


  return (
    <PageContainer heading="Statistique" breadcrumbs={breadcrumbs} >
      <GridContainer >

        <Grid item xs={12} xl={8} className={classes.orderLg1}>
          <GridContainer>
            <Grid item xs={12} sm={6} md={6}>
              <ProjectInprogress />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <ProjectFinish />
            </Grid>
            <Grid item xs={12} xl={8}>
              <ProjetByLoc/>
            </Grid>

            <Grid item xs={12} xl={8}>
            {demos.map((menu, index) => (
        <Box key={index} id={menu.link} className={classes.section}>
          <Typography component="h3" variant="inherit" className={classes.sectionHeading}>
            {menu.label}
          </Typography>
          <CodeViewerCard>
            {menu.component}
          </CodeViewerCard>
        </Box>
      ))}
            </Grid>
            
            <Grid item xs={12} xl={8}>
            {demos2.map((menu, index) => (
        <Box key={index} id={menu.link} className={classes.section}>
          <Typography component="h3" variant="inherit" className={classes.sectionHeading}>
            {menu.label}
          </Typography>
          <CodeViewerCard >
            {menu.component}
          </CodeViewerCard>
        </Box>
      ))}
            </Grid>

            <Grid item xs={12} xl={8}>
            {demos3.map((menu, index) => (
        <Box key={index} id={menu.link} className={classes.section}>
          <Typography component="h3" variant="inherit" className={classes.sectionHeading}>
            {menu.label}
          </Typography>
          <CodeViewerCard>
            {menu.component}
          </CodeViewerCard>
        </Box>
      ))}
      </Grid>
    
          </GridContainer>
        </Grid>
      </GridContainer>
    </PageContainer>
  );
};

export default StatProjet;
