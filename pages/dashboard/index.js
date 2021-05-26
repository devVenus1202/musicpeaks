import React from 'react';
import Page from '../../hocs/securedPage';
import Profile from '../../containers/Profile';
import App from '../../containers/App';

export default Page(({ user }) => (
  <div>
    <Head>
      <title>DashBoard</title>
    </Head>
    <div>
      <Profile user={user} />
    </div>
  </div>
));
