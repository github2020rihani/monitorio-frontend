import React from 'react';
import StatisticsModernCard from '../../../../../@jumbo/components/Common/StatisticsModernCard';
import StarsIcon from '@material-ui/icons/Stars';
import AuthorsChart from './AuthorsChart';
import Box from '@material-ui/core/Box';
import StatisticsCardWithBg from '../../../../../@jumbo/components/Common/StatisticsCardWithBg';

const NewAuthors = () => {
  const nbrProjetfinish =localStorage.getItem('nbrProjetfinish');
  return (
    <StatisticsCardWithBg
      backgroundColor="#E00930"
      title={nbrProjetfinish}
      subTitle="Nombre de projets fermer">
    
    </StatisticsCardWithBg>
  );
};

export default NewAuthors;
