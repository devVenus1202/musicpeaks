import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../hocs/securedPage';
import UploaderList from '../../containers/Uploaders';

class UploaderListPage extends React.Component {
  render() {
    const {
      url: { query },
      user,
    } = this.props;
    return <UploaderList user={user} query={query} />;
  }
}

UploaderListPage.propTypes = {
  url: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Page(UploaderListPage);
