import React, { Component } from 'react';
import { Layout } from 'antd';
import { AppConsumer } from '@components/appContext';
import TopbarNotification from './topbarNotification';
import TopbarMessage from './topbarMessage';
import TopbarSearch from './topbarSearch';
import TopbarUser from './topbarUser';
import TopbarWrapper from './topbar.style';
import config, { getCurrentTheme } from '../ThemeSwitcher/config';

const { Header } = Layout;

class Topbar extends Component {
  toggleCollapsed = () => {
    return {
      type: 'COLLPSE_CHANGE',
    };
  };

  render() {
    const collapsed = false;
    const locale = 'english';
    const customizedTheme = getCurrentTheme('topbarTheme', config.topbarTheme.defaultTheme || 'themedefault');
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 70,
    };

    return (
      <AppConsumer>
        {state => {
          return (
            <TopbarWrapper>
              <Header style={styling} className={state.collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'}>
                <div className="isoLeft">
                  <button
                    type="button"
                    className={state.collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'}
                    style={{ color: customizedTheme.textColor }}
                    onClick={() => state.switchCollapse()}
                  >
                    {state.collapsed ? (
                      <i className="demo-icon icon-open-column" />
                    ) : (
                      <i className="demo-icon icon-close-column" />
                    )}
                  </button>
                </div>

                <ul className="isoRight">
                  <li className="isoSearch">
                    <TopbarSearch locale={locale} />
                  </li>

                  <li onClick={() => this.setState({ selectedItem: 'notification' })} className="isoNotify">
                    <TopbarNotification locale={locale} />
                  </li>

                  <li onClick={() => this.setState({ selectedItem: 'message' })} className="isoMsg">
                    <TopbarMessage locale={locale} />
                  </li>

                  <li onClick={() => this.setState({ selectedItem: 'user' })} className="isoUser">
                    <TopbarUser locale={locale} />
                  </li>
                </ul>
              </Header>
            </TopbarWrapper>
          );
        }}
      </AppConsumer>
    );
  }
}

export default Topbar;
