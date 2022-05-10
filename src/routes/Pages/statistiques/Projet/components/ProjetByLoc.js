import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import CmtCard from '../../../../../@coremat/CmtCard';
import CmtCardContent from '../../../../../@coremat/CmtCard/CmtCardContent';
import CmtCardHeader from '../../../../../@coremat/CmtCard/CmtCardHeader';
import CmtList from '../../../../../@coremat/CmtList';

import GridContainer from '../../../../../@jumbo/components/GridContainer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ListPays from './listPays';
import ChartProjetLoc from './chartProjetLoc';
import { getProjetByLocalisaltion } from 'redux/actions/StatProjet';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    height: '100%',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
}));

const ProjetByLoc = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { projetByLoc } = useSelector(({ statProjet }) => statProjet);
  useEffect(() => {
    dispatch(getProjetByLocalisaltion());
  }, [dispatch]);


  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader title="Statistique des projet par localisation"  />
      <CmtCardContent>
        <GridContainer>
          <Grid item xs={12} md={12}>
            <Box className={classes.textUppercase} fontSize={10} mb={2}>
              Pays
            </Box>

            <CmtList
              data={projetByLoc}
              renderRow={(item, index) => (
                <ListPays key={index} country={item}  flagCode={item.drapeau} />
              )}
            />
          </Grid>
     {/*      <Grid item xs={12} md={8}>
            <ChartProjetLoc data={country.data} color={country.badgeColor} chartGradientColor={country.chartGradientColor} />
          </Grid> */}
        </GridContainer>
      </CmtCardContent>
    </CmtCard>
  );
};

export default ProjetByLoc;
