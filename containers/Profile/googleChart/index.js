import React, { Component } from 'react';
import Async from '../../../helpers/asyncComponent';
import ChartWrapper from './chart.style';

const GoogleChart = props => (
  <ChartWrapper>
    <Async
      load={import(/* webpackChunkName: "googleChart" */ 'react-google-charts')}
      componentProps={props}
      componentArguement={'googleChart'}
    />
  </ChartWrapper>
);

export { GoogleChart };
