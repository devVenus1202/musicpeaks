import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../hocs/securedPage';
import TopVideo from '../../containers/TopVideo';

class TopVideoPage extends React.Component {
  render() {
    const {
      url: { query },
      user,
    } = this.props;
    return <TopVideo user={user} query={query} />;
  }
}

TopVideoPage.propTypes = {
  user: PropTypes.string.isRequired,
  url: PropTypes.object.isRequired,
};
export default Page(TopVideoPage);
