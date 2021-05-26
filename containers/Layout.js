import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../config/themes';

class Header extends Component {
  render() {
    const selectedTheme = 'themedefault';

    return (
      <ThemeProvider theme={themes[selectedTheme]}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

export default Header;