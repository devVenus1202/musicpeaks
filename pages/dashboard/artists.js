import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../hocs/securedPage';
import ArtistList from '../../containers/Artist';

class ArtistListPage extends React.Component {
  render() {
    const {
      url: { query },
      user,
    } = this.props;
    return <ArtistList user={user} query={query} />;
  }
}

ArtistListPage.propTypes = {
  url: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Page(ArtistListPage);
