import React from 'react';
import Head from 'next/head';
import Page from '../../hocs/securedPage';
import Video from '../../containers/Video';

class VideoPage extends React.Component {
  render() {
    const {
      url: {
        query: { nid, pid },
      },
      user,
    } = this.props;
    return <Video nid={nid} pid={pid} user={user} />;
  }
}

export default Page(VideoPage);
