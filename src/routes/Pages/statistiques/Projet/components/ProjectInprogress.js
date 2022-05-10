import React, { useEffect, useState } from 'react';
import CounterCard from '../../../../../@jumbo/components/Common/CounterCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProjetInprogress } from 'redux/actions/StatProjet';

const ProjectInprogress = () => {
  const dispatch = useDispatch();
  const { projetsInProgress } = useSelector(({ statProjet }) => statProjet);
  useEffect(() => {
    dispatch(getProjetInprogress());
  }, [dispatch]);
  return (
    <CounterCard
      icon={'/images/dashboard/projectIcon.svg'}
      number={projetsInProgress}
      label="Projects en cours"
      labelProps={{
        fontSize: 16,
      }}
      backgroundColor={['#d4db2b ']}
      gradientDirection="180deg"
    />
  );
};

export default ProjectInprogress;
