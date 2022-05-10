import React, { useEffect } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@material-ui/core';
import { getStatRegistreUser } from 'redux/actions/statUser.js';


const SynchronizedLineChart = () => {
  const dispatch = useDispatch();
  const { statUserRegiter } = useSelector(({ statUser }) => statUser);
  useEffect(() => {
    dispatch(getStatRegistreUser());
  }, [dispatch]);

    return (
      <Box>

    <Box mb={10}>
      <Box component="h4" mb={4}>
       Statistique de inscription par une semaine
      </Box>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={statUserRegiter} syncId="anyId" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis dataKey="DateCreat" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip labelStyle={{ color: 'black' }} itemStyle={{ color: 'black' }} cursor={false} />
          <Line type="monotone" dataKey="inscriptions" stroke="#6200EE" fill="#6200EE" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  </Box>
  );
}


  



export default SynchronizedLineChart;
