import React, { Component } from 'react';
import Router from 'next/router';
import { AppConsumer } from '@components/appContext';
import { removeCookie } from '../../helpers/session';
import Popover from '../../components/uielements/popover';
import TopbarDropdownWrapper from './topbarDropdown.style';
import { logout } from '../../helpers/auth';
import userpic from '../../static/image/user1.png';
import defaultAvatar from '../../static/image/default-avatar.jpg';
import avatarImg from '../../static/image/avatar.jpg';
import avatarImg2 from '../../static/image/avatar2.jpg';

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false,
    };
  }

  logout = () => {
    logout();
    Router.push('/');
  };

  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
        <a className="isoDropdownLink">Settings</a>
        <a className="isoDropdownLink">Feedback</a>
        <a className="isoDropdownLink">Help</a>
        <a className="isoDropdownLink" onClick={this.logout}>
          Logout
        </a>
      </TopbarDropdownWrapper>
    );

    return (
      <AppConsumer>
        {state => {
          return (
            <Popover
              content={content}
              trigger="click"
              visible={this.state.visible}
              onVisibleChange={this.handleVisibleChange}
              arrowPointAtCenter
              placement="bottomLeft"
            >
              <div className="isoImgWrapper">
                <img
                  alt=""
                  src={state.userInfo.avatar}
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = defaultAvatar;
                  }}
                />
                <span className="userActivity online" />
              </div>
            </Popover>
          );
        }}
      </AppConsumer>
    );
  }
}
export default TopbarUser;
