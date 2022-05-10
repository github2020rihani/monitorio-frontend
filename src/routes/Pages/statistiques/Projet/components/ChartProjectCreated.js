import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { getProjetCreated } from 'redux/actions/StatProjet';

const ChartProjectCreated = () => {
  const dispatch = useDispatch();
  const { projetCreated } = useSelector(({ statProjet }) => statProjet);
  useEffect(() => {
    dispatch(getProjetCreated());
  }, [dispatch]);
  const nbrProj = projetCreated.nbrProjet = 'Nombre de projet' ;
return (

  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={projetCreated} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <XAxis dataKey="DateCreat" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />
      <Legend />
      <defs>
        <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#6200EE" stopOpacity={1} />
          <stop offset="95%" stopColor="#B819D2" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Bar dataKey={nbrProj} fill="url(#color1)" />
    </BarChart>
  </ResponsiveContainer>
)

}




export default ChartProjectCreated;
