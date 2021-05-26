import React, { Component } from 'react';
import { Row, Button } from 'antd';
import { Query } from 'react-apollo';
import { get as _get } from 'lodash';
import PropTypes from 'prop-types';

import { ProfileHeaderWrapper, ProfileInfo, ProfileNav, Avatar, FlexCol } from './Profile.style';
import defaultAvatar from '../../static/image/default-avatar.jpg';
import { QueryGetProfileStatsNew } from '../../graphql/user';

import basicStyle from '../../config/basicStyle';
import defaultHeaderImage from '../../static/image/default-header.jpg';

class ProfileHeader extends Component {
  renderProfile = (user, data) => {
    const { rowStyle, colStyle, gutter } = basicStyle;
    const videos = _get(data, 'videos', '');
    const channels = _get(data, 'channels', '');
    const artists = _get(data, 'artists', '');
    const views = _get(data, 'views', '');

    return (
      <ProfileHeaderWrapper>
        <ProfileInfo>
          <img
            alt=""
            src={user.headerImage}
            className="header-image"
            // onError={e => {
            //   e.target.onerror = null;
            //   e.target.src = defaultHeaderImage;
            // }}
          />
          <span className="userActivity online" />
          <Row style={rowStyle} gutter={gutter} justify="start">
            <FlexCol md={14} style={colStyle}>
              <Avatar className="isoImgWrapper">
                <img
                  alt=""
                  src={user.avatar}
                  // onError={e => {
                  //   e.target.onerror = null;
                  //   e.target.src = defaultAvatar;
                  // }}
                />
                <span className="userActivity online" />
              </Avatar>
              <div className="user">
                <div className="user-info">
                  <span className="user-info-name">{user.name}</span>
                  <span className="user-info-location">Toronto, ON</span>
                </div>
                <div className="subscription">
                  <div className="subscriptionInfo">
                    <p className="subscriptionNumber">{videos}</p>
                    <p className="subscriptionTitle">Videos</p>
                  </div>
                  <div className="subscriptionInfo">
                    <p className="subscriptionNumber">{channels}</p>
                    <p className="subscriptionTitle">Channels</p>
                  </div>
                  <div className="subscriptionInfo">
                    <p className="subscriptionNumber">{artists}</p>
                    <p className="subscriptionTitle">Artists</p>
                  </div>
                  <div className="subscriptionInfo">
                    <p className="subscriptionNumber">{views}</p>
                    <p className="subscriptionTitle">Views</p>
                  </div>
                </div>
              </div>
            </FlexCol>
          </Row>
        </ProfileInfo>
        <ProfileNav>
          <Row style={rowStyle} gutter={gutter} justify="start">
            <Button type="primary">Dashboard</Button>
            <Button>Setting</Button>
            <Button>Messages</Button>
          </Row>
        </ProfileNav>
      </ProfileHeaderWrapper>
    );
  };

  render() {
    const { user } = this.props;

    return (
      <Query query={QueryGetProfileStatsNew}>
        {({ loading, error, data }) => {
          if (loading || error) {
            return this.renderProfile(user);
          }
          const {
            getUserBaseStatisticsNew: {
              artists_count: artistsCount,
              clips_count: clipsCount,
              total_views_count_formatted: totalViewsCount,
              uploaders_count: uploadersCount,
            },
          } = data;

          const profileFields = {
            videos: clipsCount,
            channels: uploadersCount,
            artists: artistsCount,
            views: totalViewsCount,
          };

          return this.renderProfile(user, profileFields);
        }}
      </Query>
    );
  }
}

ProfileHeader.propTypes = {
  user: PropTypes.string.isRequired,
};
export default ProfileHeader;
