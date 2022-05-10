import React from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ArticlesGraph from './ArticlesGraph';
import ArticleIcon from '@material-ui/icons/Accessible';

import StatisticsCardWithBg from '../../../../../@jumbo/components/Common/StatisticsCardWithBg';

const NewsArticles = () => {
  const nbrProjetEncour =localStorage.getItem('nbrProjetEncour');

  return (
    <StatisticsCardWithBg
    backgroundColor="#00C4B4"
    title={nbrProjetEncour}
    subTitle="Nombre de projet en cours"
 >
    </StatisticsCardWithBg>
  );
};

export default NewsArticles;
