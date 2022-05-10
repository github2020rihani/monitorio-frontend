import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { getProjetByEtat } from 'redux/actions/StatProjet';

const ChartProjetByEtat = () => {
  const dispatch = useDispatch();
  const { projetByEtat } = useSelector(({ statProjet }) => statProjet);
  useEffect(() => {
    dispatch(getProjetByEtat());
  }, [dispatch]);

  return (
  <ResponsiveContainer width="100%" height={400}>
    <RadarChart outerRadius={150} data={projetByEtat}>
      <Radar name="Mike" dataKey="nbrProjet" stroke="#6200EE" fill="#6200EE" fillOpacity={0.6} />
      <PolarGrid />
      <PolarAngleAxis dataKey="EtatProj" />
      <PolarRadiusAxis />
    </RadarChart>
  </ResponsiveContainer>
  )
}


export default ChartProjetByEtat;
