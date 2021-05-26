import React, { Component } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import { VideoClipCardWrapper, VideoClipRowItemWrapper } from './videoClipCard.style';
import { json2Url, json2Path } from '../../helpers/utility';

import defaultClipImg from '../../static/image/sample_clip.png';

class VideoClipCard extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };

  getUrl() {
    const { filter } = this.props;
    const gotoUrl = `/dashboard/topvideo?${json2Url(filter)}`;
    const asUrl = `/dashboard/topvideo/${json2Path(filter)}`;
    return { gotoUrl, asUrl };
  }

  onClickCard = () => {
    const { filter } = this.props;
    console.log('filter-=====', filter);
    Router.push({
      pathname: '/dashboard/topvideo',
      query: filter,
    });
  };

  renderToCard = () => {
    const { url, title, info, artist } = this.props;
    let thumb = url;
    if (!url) {
      thumb = defaultClipImg;
    }
    return (
      <VideoClipCardWrapper>
        <div className="card-body" onClick={this.onClickCard}>
          <div className="card-body-overlay" />
          <div className="thumb-container">
            <div className="thumb">
              <a href="#">
                <img src={thumb} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div onClick={this.onClickCard} className="card-description">
          <Row type="flex" justify="space-between" align="middle">
            <Col xs={24} md={12} lg={14} xl={16}>
              <div className="card-title">{title}</div>
            </Col>
            <Col
              xs={{ span: 12, push: 12 }}
              md={{ span: 12, push: 0 }}
              lg={{ span: 10, push: 0 }}
              xl={{ span: 8, push: 0 }}
            >
              <div className="card-view-info">{info}</div>
            </Col>

            <Col xs={{ span: 12, pull: 12 }} md={{ span: 24, pull: 0 }}>
              <div className="card-info">{artist}</div>
            </Col>
          </Row>
        </div>
      </VideoClipCardWrapper>
    );
  };

  renderToRowItem = () => {
    const { url, title, info, artist } = this.props;
    let thumb = url;
    if (!url) {
      thumb = defaultClipImg;
    }
    return (
      <VideoClipRowItemWrapper>
        <Row type="flex" justify="space-between" align="middle">
          <Col xs={6}>
            <div className="card-body" onClick={this.onClickCard}>
              <div className="card-body-overlay" />
              <div className="thumb-container">
                <div className="thumb">
                  <a href="#">
                    <img src={thumb} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={18}>
            <div onClick={this.onClickCard} className="card-description">
              <div className="card-title">{title}</div>
              <Row>
                <Col xs={12} className="card-info">
                  {artist}
                </Col>
                <Col xs={12} className="card-view-info">
                  {info}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </VideoClipRowItemWrapper>
    );
  };

  render() {
    const { viewMode } = this.props;
    if (viewMode === 'listView') return this.renderToRowItem();
    return this.renderToCard();
  }
}

VideoClipCard.propTypes = {
  viewMode: PropTypes.string.isRequired,
  filter: PropTypes.object.isRequired,
};

export default VideoClipCard;
