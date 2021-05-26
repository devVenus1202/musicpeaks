import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../hocs/securedPage';
import VideoList from '../../containers/VideoList';

class VideoListPage extends React.Component {
  render() {
    const {
      url: { query = { page: 1 } },
      user,
    } = this.props;
    return <VideoList user={user} query={query} />;
  }
}

VideoListPage.propTypes = {
  url: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
export default Page(VideoListPage);
