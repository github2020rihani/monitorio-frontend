import React, { useEffect, useState } from 'react';
import CounterCard from '../../../../../@jumbo/components/Common/CounterCard';

import { useDispatch, useSelector } from 'react-redux';
import { getProjetFinish } from 'redux/actions/StatProjet';

const ProjectFinish = () => {
  const dispatch = useDispatch();
  const { projetFinish } = useSelector(({ statProjet }) => statProjet);
  useEffect(() => {
    dispatch(getProjetFinish());
  }, [dispatch]);
  return (
    <CounterCard
      icon={'/images/dashboard/projectIcon.svg'}
      number={projetFinish}
      label="Projects fermer"
      labelProps={{
        fontSize: 16,
      }}
      backgroundColor='green'
      gradientDirection="180deg"
    />
  );
};

export default ProjectFinish;
