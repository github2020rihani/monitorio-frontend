import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersVisior } from 'redux/actions/statUser';

const SiteTrafficGraph = () => {
  const dispatch = useDispatch();
  const { statUserVisitor } = useSelector(({ statUser }) => statUser);
  useEffect(() => {
    dispatch(getUsersVisior());
  }, [dispatch]);


  const data = canvas => {
    const ctx = canvas.getContext('2d');
    const _stroke = ctx.stroke;

    ctx.stroke = function() {
      ctx.save();
      ctx.shadowColor = '#4C4C4C';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      _stroke.apply(this, arguments);
      ctx.restore();
    };

    return {
      labels: statUserVisitor.map(u => u.DateDernCon),
      datasets: [
        {
          label: 'utilisateurs',
          data: statUserVisitor.map(u => u.utilisateurs),
          borderColor: '#8DCD03',
          borderWidth: 2,
          pointBackgroundColor: '#8DCD03',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#8DCD03',
          pointHoverBorderColor: '#fff',
          pointRadius: 6,
          pointHoverRadius: 8,
          fill: false,
        },
    
      ],
    };
  };

  const options = {
    legend: {
      display: true,
    },
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            suggestedMax: 10,
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Line data={data} height={100} options={options} />;
};

export default SiteTrafficGraph;
