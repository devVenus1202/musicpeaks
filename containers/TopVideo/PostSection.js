import React, { Component } from 'react';
import Router from 'next/router';
import { Row, Col } from 'antd';
import { get as _get, set as _set } from 'lodash';
import { PostSectionWrapper } from './video.style';
import postImg from '../../static/image/post.jpg';
import { json2Url, json2Path } from '../../helpers/utility';
import PlayerIcon from '../../static/image/icon-play.png';

class PostSection extends Component {
  redirectToVideoPage = () => {
    const { query } = this.props;
    Router.push(`/dashboard/topvideo?${json2Url(query)}`, `/dashboard/topvideo/${json2Path(query)}`);
  };

  render() {
    const { data } = this.props;
    const title = _get(data, 'clip_title', '');
    const url = _get(data, 'still_image_url', '');
    const viewCount = _get(data, 'view_count_formatted', '');

    return (
      <PostSectionWrapper onClick={this.redirectToVideoPage}>
        <a className="video-post-image">
          <img src={url} alt="" />
        </a>
        <div className="video-post-content">
          <a href="#" className="video-post-title">
            {title}
          </a>
          <div className="video-post-status">
            <a href="#">{viewCount}</a>
          </div>
        </div>
      </PostSectionWrapper>
    );
  }
}

export default PostSection;
