import React, { Component } from 'react';
import MenuIcon from 'material-ui-icons/Menu';
import { AppConsumer } from '@components/appContext';
import Toolbar from '../../components/uielements/toolbar';
import Icon from '../../components/uielements/icon';
import { AppHolder, IconButtons, TopbarComponents } from './style';
import SecondarySidebar from '../SecondarySidebar';
import TopbarNotification from './topbarNotification';
import TopbarUser from './topbarUser';
import config, { getCurrentTheme } from '../ThemeSwitcher/config';

class Topbar extends Component {
  render() {
    const customizedTheme = getCurrentTheme('topbarTheme', config.topbarTheme.defaultTheme || 'themedefault');
    const { toggleCollapsed, switchActivation } = this.props;

    const propsTopbar = { locale: 'english' };
    return (
      <AppConsumer>
        {state => {
          return (
            <AppHolder
              className={state.collapsed ? 'collapsed' : ''}
              style={{ background: customizedTheme.backgroundColor }}
            >
              <Toolbar
                style={{
                  paddingLeft: '30px',
                  minHeight: '64px',
                  background: customizedTheme.topbarTheme,
                }}
              >
                <IconButtons
                  id="topbarCollapsed"
                  aria-label="open drawer"
                  onClick={toggleCollapsed}
                  className="isoRight"
                >
                  <MenuIcon />
                </IconButtons>

                <TopbarComponents>
                  <ul className="topbarItems">
                    <li className="topbarNotification">
                      <div>
                        <Icon onClick={() => switchActivation('notification')}>notifications_active</Icon>
                        <SecondarySidebar InnerComponent={TopbarNotification} currentActiveKey="notification" />
                      </div>
                    </li>

                    <li className="topbarUser">
                      <TopbarUser {...propsTopbar} />
                    </li>
                  </ul>
                </TopbarComponents>
              </Toolbar>
            </AppHolder>
          );
        }}
      </AppConsumer>
    );
  }
}

export default Topbar;
