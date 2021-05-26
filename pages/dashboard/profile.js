import React from 'react';
import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Profile from '../../containers/Profile';

export default Page(({ user, userInfo }) => (
  <div>
    <Head>
      <title>Profile</title>
    </Head>
    <div>
      <Profile user={user} userInfo={userInfo} />
    </div>
  </div>
));
