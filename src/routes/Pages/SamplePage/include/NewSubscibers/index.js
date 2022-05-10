import React from 'react';
import StatisticsModernCard from '../../../../../@jumbo/components/Common/StatisticsModernCard';
import GroupIcon from '@material-ui/icons/Group';
import SubscribersGraph from './SubscribersGraph';
import StatisticsCardWithBg from '../../../../../@jumbo/components/Common/StatisticsCardWithBg';

const NewSubscribers = () => {
  const nbrUsers =localStorage.getItem('nbrUsers');

  return (
    <StatisticsCardWithBg
      backgroundColor="#6200EE"
      title={nbrUsers}
      subTitle="Nombre des utilisateurs"
      >
    </StatisticsCardWithBg>
  );
};

export default NewSubscribers;
