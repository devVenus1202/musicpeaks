import React, { Component } from 'react';
import Router from 'next/router';
import { Row, Col } from 'antd';
import { get as _get, set as _set } from 'lodash';
import { PlaylistItemWrapper } from './video.style';
import postImg from '../../static/image/post.jpg';
import { json2Url, json2Path } from '../../helpers/utility';
import PlayerIcon from '../../static/image/icon-play.png';

class PlaylistItem extends Component {
  redirectToVideoPage = () => {
    const { query } = this.props;
    Router.push(`/dashboard/topvideo?${json2Url(query)}`, `/dashboard/topvideo/${json2Path(query)}`);
  };

  render() {
    const { data, onlyIcon } = this.props;
    const title = _get(data, 'clip_title', '');
    const url = _get(data, 'still_image_url', '');
    const viewCount = _get(data, 'view_count_formatted', '');

    return (
      <PlaylistItemWrapper onClick={this.redirectToVideoPage} onlyIcon={onlyIcon}>
        <Row type="flex" justify="space-between" align="middle">
          {onlyIcon ? (
            ''
          ) : (
            <>
              <Col span={2}>
                <img src={PlayerIcon} alt="11" />
              </Col>
              <Col span={16}>
                <div className="video-post-content">
                  <a href="#" className="video-post-title">
                    {title}
                  </a>
                  {/* <div className="video-post-status">
                <a href="#">{viewCount}</a>
              </div> */}
                </div>
              </Col>
            </>
          )}

          <Col span={onlyIcon ? 24 : 6}>
            <a className="video-post-image">
              <img src={url} alt="" />
            </a>
          </Col>
        </Row>
      </PlaylistItemWrapper>
    );
  }
}

export default PlaylistItem;
