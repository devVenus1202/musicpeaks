import React, { Component } from 'react';
import { withApollo, Query } from 'react-apollo';
import { Col } from 'antd';
import { get as _get, set as _set, range as _range, head as _first, drop as _drop } from 'lodash';

import Collapse, { Panel } from '@components/utility/collapse';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import ListView from '../../components/utility/listview';
import PageHeader from '../../components/utility/pageHeader';
import basicStyle from '../../config/basicStyle';

import VideoCard from './VideoCard';
import PostSection from './PostSection';
import { QueryGetJoniMitchellClips, QueryGetTop10 } from '../../graphql/user';
import { QueryGetVideoPage, QueryGetVideoList, QueryGetClipInformation, QueryPublicClips } from '../../graphql/clip';
import { VideoPageWrapper, Row } from './video.style';

import {
  onlineClipData,
  onlineClipFields,
  productionData,
  productionFields,
  masterData,
  masterFields,
  publishData,
  publishFields,
  publishCommonFields,
  writerFields,
  publisherFields,
} from './fields';

class VideoPage extends Component {
  isBellMediaUser = () => {
    return this.props.user === '99';
  };

  renderThumbnails = videos => {
    const { index } = this.props;

    if (!videos) {
      return '';
    }

    return (
      <>
        {_range(0, 9).map(key => {
          if (index !== key) {
            if (videos[key]) return <PostSection data={videos[key]} index={Number(key) + Number(index) + 1} />;
          }
        })}
      </>
    );
  };

  render() {
    const { nid, pid } = this.props;
    const { rowStyle, colStyle, gutter } = basicStyle;

    const clipInfoQuery = QueryGetClipInformation;
    const clipInfoVariables = { nid, parent_clip_id: pid };

    return (
      <Query query={clipInfoQuery} variables={clipInfoVariables}>
        {({ loading, error, data }) => {
          if (loading || error) {
            return '';
          }

          const videos = _get(data, 'getVideos', []);

          const clipData = _first(data, 'nodeById', {});
          const publicClips = _get(data, 'nodeQuery.entities', []);
          const masterInfoData = _get(data, 'nodeById.parentClip.entity.canonicalRecording.entity', {});
          const publishCommonData = _get(
            data,
            'nodeById.parentClip.entity.canonicalRecording.entity.iswcRef.entity',
            {},
          );
          const writers = publishCommonData.writers || {};
          const publishers = publishCommonData.publishers || {};

          const title = _get(clipData, 'title', '');
          const clipURL = _get(clipData, 'url', null);
          const stillImageURL = _get(clipData, 'still_image_url', null);
          const inTime = {
            hour: _get(clipData, 'in_hours', 0),
            min: _get(clipData, 'in_mins', 0),
            sec: _get(clipData, 'in_secs', 0),
          };

          return (
            <VideoPageWrapper>
              <LayoutWrapper className="videoPage">
                <PageHeader>{title}</PageHeader>

                <Row style={rowStyle} gutter={32}>
                  <Col className="video-player" sm={18} xs={24}>
                    <VideoCard url={clipURL} inTime={inTime} imageURL={stillImageURL} />
                  </Col>
                  <Col sm={6} xs={24} className="video-thumbs-container">
                    <h5 className="recent-post-title">In This Episode Sequence</h5>
                    <div className="video-thumbs">{this.renderThumbnails(_drop(videos))}</div>
                  </Col>
                </Row>
                <Row style={rowStyle} gutter={32}>
                  <Col className="video-information" sm={18} xs={24}>
                    <Query query={clipInfoQuery} variables={clipInfoVariables}>
                      {({ loading, error, data }) => {
                        if (loading || error) {
                          return '';
                        }
                        const publicClips = _get(data, 'nodeQuery.entities', []);
                        const masterInfoData = _get(data, 'nodeById.parentClip.entity.canonicalRecording.entity', {});
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
                              <ListView data={publicClips} fields={onlineClipFields} />
                            </Panel>
                            <Panel header="Film / Video Production Info" key="2">
                              <ListView data={productionData} fields={productionFields} />
                            </Panel>
                            <Panel header="Master Recording Info" key="3">
                              <ListView data={masterInfoData} fields={masterFields} />
                            </Panel>
                            <Panel header="Publishing Info" key="4">
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
              </LayoutWrapper>
            </VideoPageWrapper>
          );
        }}
      </Query>
    );
  }
}

export default withApollo(VideoPage);
