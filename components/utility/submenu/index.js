import React, { Component } from 'react';
import SubMenuSidebar from './subMenu.style';
import Scrollbars from '../customScrollBar';
import { AppConsumer } from '@components/appContext';
import { Layout } from 'antd';
const { Sider } = Layout;

export default class extends Component {
  constructor(props) {
    super(props);
    const { currentItem } = props;
    this.menuItem = this.menuItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      search: '',
      currentItem: currentItem || '0',
    };
  }

  onChange(event) {
    this.setState({ search: event.target.value });
  }

  onSelectItem(item) {
    const { selectItem } = this.props;
    this.setState({ currentItem: item.index });
    selectItem(item);
  }

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

  render() {
    const { search } = this.state;
    const { items, loading } = this.props;
    return (
      <AppConsumer>
        {state => {
          const isEoneUser = state.user === '95';
          return (
            <Sider width={state.secondCollapsed ? 50 : 350} className="isoSubMenuSidebar">
              <SubMenuSidebar className="isoSubMenuWrapper" collapsed={state.secondCollapsed} isLoading={loading}>
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
            </Sider>
          );
        }}
      </AppConsumer>
    );
  }
}
