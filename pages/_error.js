import React from 'react';
import FourZeroFour from './404';
import FiveHundred from './500';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    if (this.props.statusCode) {
      if (this.props.statusCode === 500) {
        return <FiveHundred />;
      }
      return <FourZeroFour />;
    }
    return <FourZeroFour />;
  }
}

export default Error;
