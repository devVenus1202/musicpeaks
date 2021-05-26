import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { Debounce } from 'react-throttle';
import { Layout, LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import themes from '../../config/themes';
import { siteConfig } from '../../config/index';
import AppLocale from '../../languageProvider';
import AppHolder from './commonStyle';
import { getCurrentLanguage } from '../LanguageSwitcher/config';
import config, { getCurrentTheme } from '../ThemeSwitcher/config';
import Scrollbars from '@components/utility/customScrollBar';
const Sidebar = dynamic(() => import('../Sidebar/Sidebar'));
const Topbar = dynamic(() => import('../Topbar/Topbar'));

const { Content, Footer } = Layout;

class Header extends Component {
  render() {
    const selectedTheme = getCurrentTheme('changeThemes', config.changeThemes.defaultTheme || 'themedefault').themeName;

    const currentAppLocale = AppLocale.en;

    return (
      <LocaleProvider locale={currentAppLocale.antd}>
        <IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages}>
          <ThemeProvider theme={themes[selectedTheme]}>
            <AppHolder>
              <Layout style={{ height: '100vh' }}>
                <Topbar />
                <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
                  <Sidebar />
                  <Layout
                    className="isoContentMainLayout"
                    style={{
                      height: '100vh',
                    }}
                  >
                    <Content
                      className="isomorphicContent"
                      style={{
                        padding: '70px 0 0',
                        flexShrink: '0',
                        background: '#f1f3f6',
                        width: '100%',
                      }}
                    >
                      {this.props.children}
                    </Content>
                    <Footer
                      style={{
                        background: '#ffffff',
                        textAlign: 'center',
                        borderTop: '1px solid #ededed',
                      }}
                    >
                      {siteConfig.footerText}
                    </Footer>
                  </Layout>
                </Layout>
              </Layout>
            </AppHolder>
          </ThemeProvider>
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

export default Header;
