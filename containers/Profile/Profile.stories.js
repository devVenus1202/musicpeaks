import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs/react';
import cookie from 'cookie';
import { ApolloProvider } from 'react-apollo';
import initApollo from '@lib/initApollo';
import ProfileHeader from './ProfileHeader';
import { GoogleChart } from './googleChart';
import {
  DonutChart as DonutChartConfig,
  BarChart as BarChartConfig,
} from './googleChart/config';

function parseCookies(req, options = {}) {
  return cookie.parse(
    req ? req.headers.cookie || '' : document.cookie,
    options,
  );
}

const apolloClient = initApollo(
  {},
  {
    getToken: req => parseCookies(req).token,
  },
);

storiesOf('Profile', module).add('ProfileHeader', () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ProfileHeader />
    </ApolloProvider>
  );
});

storiesOf('Charts', module).add('BarChart', () => {
  return (
    <GoogleChart {...BarChartConfig} />
  );
});

storiesOf('Charts', module).add('DonutChart', () => {
  return (
    <GoogleChart {...DonutChartConfig} />
  );
});
