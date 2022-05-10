import React from 'react';
import StatisticsCardWithBg from '../../../../../@jumbo/components/Common/StatisticsCardWithBg';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrafficGraph from './TrafficGraph';

const AvgDailyTraffic = () => {
  const nbrProjets =localStorage.getItem('nbrProjets');

  return (
    <StatisticsCardWithBg
      backgroundColor="#0795F4"
      title={nbrProjets}
      subTitle="Nombre de projets">
    </StatisticsCardWithBg>
  );
};

export default AvgDailyTraffic;
