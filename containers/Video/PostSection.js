import React, { Component } from 'react';
import Router from 'next/router';
import { get as _get, set as _set } from 'lodash';
import { PostSectionWrapper } from './video.style';
import postImg from '../../static/image/post.jpg';

class PostSection extends Component {
  redirectToVideoPage = () => {
    const { index } = this.props;
    Router.push(`/dashboard/topvideo?index=${index}`, `/dashboard/topvideo/${index}`);
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
