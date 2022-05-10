import React, { useEffect, useState } from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import { useDispatch, useSelector } from 'react-redux';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { alpha, makeStyles } from '@material-ui/core/styles';
import CmtList from '../../../../@coremat/CmtList';
import CampaignCell from './CampaignCell';
import { marketingData } from '../../../../@fake-db/dashboards/widgets';
import { getStatProfileUser } from 'redux/actions/statUser';


const useStyles = makeStyles(theme => ({
  cardRoot: {
    position: 'relative',
    '& .Cmt-card-content': {
      padding: 0,
      paddingBottom: 24,
    },
  },
  scrollbarRoot: {
    height: 305,
  },
  badgeRoot: {
    fontSize: 14,
    letterSpacing: 0.25,
    backgroundColor: alpha(theme.palette.warning.main, 0.15),
    color: theme.palette.warning.main,
    padding: '2px 10px',
    borderRadius: 30,
  },
}));



const MarketingCampaign = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { statUserProfile} = useSelector(({ statUser }) => statUser);
  useEffect(() => {
    dispatch(getStatProfileUser());
  }, [dispatch]);


  return (
    <CmtCard className={classes.cardRoot}>
      <CmtCardHeader
        title="Statistique des utilisateurs par profile"
        subTitle=""        >
      </CmtCardHeader>
      <CmtCardContent>
        <PerfectScrollbar className={classes.scrollbarRoot}>
          <CmtList data={statUserProfile} renderRow={(data, index) => <CampaignCell key={index} data={data} />} />
        </PerfectScrollbar>
      </CmtCardContent>
    </CmtCard>
  );
};

export default MarketingCampaign;
