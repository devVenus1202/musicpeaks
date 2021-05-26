import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { withApollo, Query } from 'react-apollo';
import { Col } from 'antd';
import {
  get as _get,
  range as _range,
  head as _first,
  drop as _drop,
  replace as _replace,
  cloneDeep as _cloneDeep,
} from 'lodash';

import Collapse, { Panel } from '../../components/utility/collapse';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import ListView from '../../components/utility/listview';
import PageTitle from '../../components/utility/pageTitle';
import basicStyle from '../../config/basicStyle';
import { QueryGetVideoListNew, QueryGetClipInformation } from '../../graphql/clip';

import TabbedSidebar from '../TabbedSidebar';

import VideoCard from './VideoCard';
import PostSection from './PostSection';
import { VideoPageWrapper, Row } from './video.style';
import listitems from '../Artist/fakeData';

import {
  onlineClipFields,
  productionData,
  productionFields,
  masterFields,
  publishCommonFields,
  writerFields,
  publisherFields,
  suffixCopy,
  territoryData,
  territoryFields,
} from './fields';

class VideoPage extends Component {
  state = {
    clipURL: '',
  };

  isBellMediaUser = () => {
    const { user } = this.props;
    return user === '99';
  };

  changePublic = clip => {
    this.setState({
      clipURL: clip.url,
    });
  };

  renderThumbnails = topVideos => {
    const { query } = this.props;

    if (!topVideos) {
      return '';
    }

    return (
      <>
        {_range(0, 9).map(key => {
          if (query.start !== key) {
            if (topVideos[key]) {
              return <PostSection data={topVideos[key]} query={query} />;
            }
          }
          return '';
        })}
      </>
    );
  };

  onChangeSequence = item => {
    const { query } = Router;
    query.start = item.index;
    Router.push({ pathname: `${Router.route}`, query });
  };

  render() {
    const { query: filter } = this.props;
    const { rowStyle } = basicStyle;

    const variables = _cloneDeep(filter);
    return (
      <VideoPageWrapper>
        <Query query={QueryGetVideoListNew} variables={variables}>
          {({ loading, error, data }) => {
            if (loading || error) {
              return '';
            }

            const topVideos = _get(data, 'getVideoClipsNew', []);
            const clipData = _first(topVideos);

            const title = _replace(_get(clipData, 'title', ''), /\|/g, '<span class="pipe">|</span>');
            const clipURL = _get(clipData, 'url', null);
            const imageURL = _get(clipData, 'still_image_url');
            const inTime = {
              hour: _get(clipData, 'in_hours', 0),
              min: _get(clipData, 'in_mins', 0),
              sec: _get(clipData, 'in_secs', 0),
            };

            const clipInfoQuery = QueryGetClipInformation;
            const clipInfoVariables = {
              nid: _get(clipData, 'public_clip_target_id', 0),
              parent_clip_id: _get(clipData, 'parent_clip_target_id', 0),
            };
            const menuItems = [];
            topVideos.forEach((item, key) => {
              menuItems.push({
                id: item.public_clip_target_id,
                index: key + Number(variables.start),
                title: item.title,
                image: item.still_image_url,
              });
            });

            return (
              <>
                <TabbedSidebar
                  {...this.props}
                  listItems={listitems}
                  sequenceItems={_drop(menuItems)}
                  onSelectSequence={item => this.onChangeSequence(item)}
                />
                <LayoutWrapper className="videoPage">
                  <PageTitle style={{ color: '#586177' }}>{title}</PageTitle>
                  <div className="videoPageContent">
                    <Row style={rowStyle} gutter={32}>
                      <Col />
                      <Col className="video-player" xs={24}>
                        <VideoCard
                          url={this.state.clipURL ? this.state.clipURL : clipURL}
                          inTime={inTime}
                          imageURL={imageURL}
                        />
                      </Col>
                      {/* {!this.isBellMediaUser() ? (
                        <Col sm={6} xs={24} className="video-thumbs-container">
                          <h5 className="recent-post-title">In This Episode Sequence</h5>
                          <div className="video-thumbs">{this.renderThumbnails(_drop(topVideos))}</div>
                        </Col>
                      ) : (
                        ''
                      )} */}
                      <Col className="video-information" xs={24}>
                        <Query query={clipInfoQuery} variables={clipInfoVariables}>
                          {({ loading, error, data }) => {
                            if (loading || error) {
                              return '';
                            }
                            let publicClips = _get(data, 'nodeQuery.entities', []);
                            let currentClip = {};
                            if (publicClips.length > 0 && _get(publicClips[0], 'entityId', '') !== '') {
                              currentClip = publicClips.find(clip => clip.entityId === _get(clipData, 'nid', 0));
                            } else {
                              publicClips = [];
                            }

                            const masterInfoData = _get(
                              data,
                              'nodeById.parentClip.entity.canonicalRecording.entity',
                              {},
                            );
                            const publishCommonData = _get(
                              data,
                              'nodeById.parentClip.entity.canonicalRecording.entity.iswcRef.entity',
                              {},
                            );
                            const writers = publishCommonData.writers || {};
                            const publishers = publishCommonData.publishers || {};

                            return (
                              <Collapse accordion>
                                <Panel header="Online Clip Information" key="1">
                                  <ListView
                                    data={publicClips}
                                    fields={onlineClipFields}
                                    current={currentClip}
                                    suffix={suffixCopy}
                                    onChange={clip => this.changePublic(clip)}
                                  />
                                </Panel>
                                <Panel header="Film / Video Production Info" key="2">
                                  <ListView data={productionData} fields={productionFields} />
                                </Panel>
                                <Panel header="Master Recording Info" key="3">
                                  <ListView data={masterInfoData} fields={masterFields} />
                                </Panel>
                                <Panel header="Territory Info" key="4">
                                  <ListView data={territoryData || {}} fields={territoryFields} showMap={true} />
                                </Panel>
                                <Panel header="Publishing Info" key="5">
                                  <ListView data={publishCommonData || {}} fields={publishCommonFields} />
                                  <ListView data={writers || {}} fields={writerFields} />
                                  <ListView data={publishers || {}} fields={publisherFields} />
                                </Panel>
                              </Collapse>
                            );
                          }}
                        </Query>
                      </Col>
                    </Row>
                  </div>
                </LayoutWrapper>
              </>
            );
          }}
        </Query>
      </VideoPageWrapper>
    );
  }
}

VideoPage.propTypes = {
  query: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired,
};
export default withApollo(VideoPage);
