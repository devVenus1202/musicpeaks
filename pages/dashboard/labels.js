import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../hocs/securedPage';
import LabelList from '../../containers/Labels';

class LabelListPage extends React.Component {
  render() {
    const {
      url: { query },
      user,
    } = this.props;
    return <LabelList user={user} query={query} />;
  }
}

LabelListPage.propTypes = {
  url: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default Page(LabelListPage);
