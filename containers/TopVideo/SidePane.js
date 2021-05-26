import React, { Component } from 'react';
import { Layout } from 'antd';
import { AppConsumer } from '@components/appContext';
import SubMenuSidebar from '../../components/subMenuComponent.style';
import Scrollbars from '../../components/utility/customScrollBar';

import { SidePaneWrapper, Tabs } from './sidepane.style';
import Playlist from './PlayList';

import items from '../Artist/fakeData';

const { Sider } = Layout;
const { TabPane } = Tabs;

class SidePane extends Component {
  menuItem(item, key, collapsed) {
    const activeClass = `${this.props.currentItem}` === `${item.id}` ? 'active' : '';
    return (
      <div className={`isoList ${activeClass}`} key={`${item.id}`}>
        <div className="isoSubMenuText" onClick={() => this.onSelectItem(item)}>
          <span>{item.title}</span>
        </div>
      </div>
    );
  }

  onSelectItem = item => {};

  render() {
    const { loading } = this.props;
    return (
      <AppConsumer>
        {state => {
          return (
            <SidePaneWrapper collapsed={state.secondCollapsed}>
              <Sider width={state.secondCollapsed ? 100 : 350} className="isoSidePane">
                <div className="playlist-icon" onClick={() => state.switchSecondColumn()}>
                  {state.secondCollapsed ? (
                    <i className="demo-icon icon-open-column" />
                  ) : (
                    <i className="demo-icon icon-close-column" />
                  )}
                </div>
                <div className="card-container">
                  <Tabs type="card">
                    <TabPane tab="List" key="1">
                      <SubMenuSidebar
                        width={state.secondCollapsed ? 100 : 350}
                        className="isoSubMenuWrapper"
                        collapsed={state.secondCollapsed}
                        isLoading={loading}
                      >
                        {/* <InputSearch placeholder="Search Notes" className="isoSearchNotes" value={search} onChange={this.onChange} /> */}
                        <div className="isoSubMenu">
                          <div className="menu-header">
                            <div className="collapse-icon" onClick={() => state.switchSecondColumn()}>
                              {state.secondCollapsed ? (
                                <i className="demo-icon icon-open-column" />
                              ) : (
                                <i className="demo-icon icon-close-column" />
                              )}
                            </div>
                          </div>

                          <Scrollbars style={{ minHeight: '100%' }}>
                            {items && items.length > 0 ? (
                              items.map((item, key) => this.menuItem(item, key, state.secondCollapsed))
                            ) : (
                              <span className="isoNotlistNotice" />
                            )}
                          </Scrollbars>
                        </div>
                      </SubMenuSidebar>
                    </TabPane>
                    <TabPane tab="Filter" key="2" />
                    <TabPane tab="Sequence" key="3">
                      <Playlist {...this.props} />
                    </TabPane>
                  </Tabs>
                </div>
              </Sider>
            </SidePaneWrapper>
          );
        }}
      </AppConsumer>
    );
  }
}

export default SidePane;
