import React, { Component } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { withApollo, Query } from 'react-apollo';
import { Icon, Col, Pagination } from 'antd';
import { get as _get, cloneDeep as _cloneDeep } from 'lodash';

import { VideoListWrapper, Row, Spin, Alert } from './VideoList.style';
import VideoClipCard from '../../components/utility/videoClipCard';
import { AppConsumer } from '../../components/appContext';
import Dropdown, { DropdownMenu, MenuItem } from '../../components/uielements/dropdown';
import Button from '../../components/uielements/button';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageTitle from '../../components/utility/pageTitle';
import basicStyle from '../../config/basicStyle';
import { QueryGetVideoPageNew } from '../../graphql/clip';

import { clearCookie } from '../../helpers/auth';

const limit = 12;
class VideoList extends Component {
  onChangePage = page => {
    const { query } = Router;
    query.page = page;
    Router.push({ pathname: `${Router.route}`, query });
  };

  getFilterVariables() {
    const { query } = this.props;
    const { page = 1 } = query;
    const variables = _cloneDeep(query);
    variables.start = (page - 1) * limit;
    variables.limit = limit;
    return variables;
  }

  renderThumbnails = (videoList, viewMode) => {
    return videoList.map((video, ind) => {
      const url = _get(video, 'still_image_url', null);
      const title = _get(video, 'clip_title', '');
      const artistTitle = _get(video, 'artist_title', '');
      const info = _get(video, 'view_count_formatted', '');

      const filter = this.getFilterVariables();
      filter.start += ind;

      const videoTile = (
        <VideoClipCard
          url={url}
          title={title}
          info={info}
          artist={artistTitle}
          index={filter.start}
          filter={filter}
          viewMode={viewMode}
        />
      );

      return viewMode === 'gridView' ? (
        <Col xs={12} sm={8} md={6} key={ind}>
          {videoTile}
        </Col>
      ) : (
        <Col xs={24} key={ind}>
          {videoTile}
        </Col>
      );
    });
  };

  render() {
    const { query } = this.props;
    const { page = 1 } = query;
    const { rowStyle } = basicStyle;
    const variables = this.getFilterVariables();

    return (
      <VideoListWrapper>
        <LayoutWrapper className="VideoList">
          <AppConsumer>
            {state => {
              return (
                <Query query={QueryGetVideoPageNew} variables={variables} fetchPolicy="no-cache">
                  {({ loading, error, data }) => {
                    if (error || loading) {
                      if (error) {
                        clearCookie();
                        Router.push('/signin');
                        return (
                          <Spin tip="Loading..." size="large">
                            <Alert
                              message="Authentication is Failed."
                              description="You need to sign in again."
                              type="info"
                            />
                          </Spin>
                        );
                      }
                      if (loading) {
                        return <Spin tip="Loading..." size="large" />;
                      }
                    }
                    const videoData = _get(data, 'getVideoClipsNew', []);
                    const videoCount = _get(data, 'getVideoClipsCountNew', videoData.length);
                    const menuClicked = (
                      <DropdownMenu onClick={this.handleMenuClickToLink}>
                        <MenuItem key="1">Default</MenuItem>
                        <MenuItem key="2">Hightest Views</MenuItem>
                        <MenuItem key="3">Lowest Views</MenuItem>
                      </DropdownMenu>
                    );
                    return (
                      <div className="videoClips">
                        <PageTitle>{`${videoCount} results found`}</PageTitle>
                        <div className="isoViewChanger">
                          <Dropdown overlay={menuClicked}>
                            <Button
                              style={{
                                margin: '0 20px 0 8px',
                              }}
                              className="orderChanger"
                            >
                              Default <Icon type="down" />
                            </Button>
                          </Dropdown>
                          <button
                            type="button"
                            className={
                              state.viewMode === 'gridView' ? 'changer isoGridView active' : 'changer isoGridView'
                            }
                            onClick={() => state.setViewMode('gridView')}
                          >
                            <i className="ion-grid" />
                          </button>
                          <button
                            type="button"
                            className={
                              state.viewMode === 'gridView' ? 'changer isoListView' : 'changer isoListView active'
                            }
                            onClick={() => state.setViewMode('listView')}
                          >
                            <i className="ion-navicon-round" />
                          </button>
                        </div>
                        <Row style={rowStyle} gutter={30}>
                          {this.renderThumbnails(videoData, state.viewMode)}
                        </Row>

                        <Pagination
                          total={Number(videoCount)}
                          pageSize={limit}
                          current={page === null ? 0 : Number(page)}
                          showTotal={total => `Total clip count: ${total}`}
                          onChange={this.onChangePage}
                        />
                      </div>
                    );
                  }}
                </Query>
              );
            }}
          </AppConsumer>
        </LayoutWrapper>
      </VideoListWrapper>
    );
  }
}
VideoList.propTypes = {
  query: PropTypes.object.isRequired,
};

export default withApollo(VideoList);
