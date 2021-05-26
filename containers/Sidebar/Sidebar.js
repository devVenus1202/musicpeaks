import React, { Component } from 'react';
import Link from 'next/link';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import { AppConsumer } from '@components/appContext';
import Menu from '../../components/uielements/menu';
// import getDevSidebar from '../../customApp/sidebar';
import SidebarWrapper from './sidebar.style';

import Logo from '../../components/utility/logo';
import config, { getCurrentTheme } from '../ThemeSwitcher/config';

const { Sider } = Layout;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onOpenChange = this.onOpenChange.bind(this);
  }

  handleClick(e) {}

  onOpenChange(newOpenKeys) {}

  render() {
    const customizedTheme = getCurrentTheme('sidebarTheme', config.sidebarTheme.defaultTheme || 'themedefault');
    const collapsed = false;
    const mode = collapsed === true ? 'vertical' : 'inline';
    const styling = {
      backgroundColor: customizedTheme.backgroundColor,
    };
    const submenuStyle = {
      backgroundColor: 'rgba(0,0,0,0.3)',
      color: customizedTheme.textColor,
    };
    const submenuColor = {
      color: customizedTheme.textColor,
    };

    return (
      <SidebarWrapper>
        <AppConsumer>
          {state => {
            const isEoneUser = state.user === '95';
            return (
              <Sider
                trigger={null}
                collapsible
                collapsed={state.collapsed}
                width={240}
                className="isomorphicSidebar"
                style={styling}
              >
                <Logo collapsed={state.collapsed} />
                <Scrollbars className="sidebar-scroll" style={{ height: 'calc(100vh - 70px)' }} autoHide>
                  <Menu
                    onClick={this.handleClick}
                    theme="dark"
                    mode={mode}
                    selectedKeys={[state.menu.current]}
                    onOpenChange={this.onOpenChange}
                    className="isoDashboardMenu"
                  >
                    <Menu.Item key="/dashboard/profile">
                      <Link href="/dashboard/profile">
                        <a className="isoMenuHolder" style={submenuColor}>
                          <i className="ion-icon ion-person" />
                          <span className="nav-text">Profile</span>
                        </a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="/dashboard/videolist">
                      <Link href="/dashboard/videolist">
                        <a className="isoMenuHolder" style={submenuColor}>
                          <i className="ion-icon ion-social-youtube" />
                          <span className="nav-text">All Videos</span>
                        </a>
                      </Link>
                    </Menu.Item>
                    {isEoneUser ? (
                      <Menu.Item key="/dashboard/artists" style={{ direction: 'none' }}>
                        <Link href="/dashboard/artists">
                          <a className="isoMenuHolder" style={submenuColor}>
                            <i className="demo-icon icon-artist" />
                            <span className="nav-text">Artists</span>
                          </a>
                        </Link>
                      </Menu.Item>
                    ) : null}

                    {isEoneUser ? (
                      <Menu.Item key="/dashboard/labels" style={{ direction: 'none' }}>
                        <Link href="/dashboard/labels">
                          <a className="isoMenuHolder" style={submenuColor}>
                            <i className="demo-icon icon-label" />
                            <span className="nav-text">Labels</span>
                          </a>
                        </Link>
                      </Menu.Item>
                    ) : null}
                    {isEoneUser ? (
                      <Menu.Item key="/dashboard/uploaders" style={{ direction: 'none' }}>
                        <Link href="/dashboard/uploaders">
                          <a className="isoMenuHolder" style={submenuColor}>
                            <i className="fa fa-cloud-upload" />
                            <span className="nav-text">Uploaders</span>
                          </a>
                        </Link>
                      </Menu.Item>
                    ) : null}
                  </Menu>
                </Scrollbars>
              </Sider>
            );
          }}
        </AppConsumer>
      </SidebarWrapper>
    );
  }
}

export default Sidebar;
