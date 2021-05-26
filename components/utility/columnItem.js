import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { ColumnItemWrapper } from './columnItem.style';

class ColumnItem extends Component {
  render() {
    const { title, icon, image, onlyIcon, onlyImage, playItem, active } = this.props;
    return (
      <ColumnItemWrapper onlyIcon={onlyIcon} playItem={playItem} active={active}>
        <Row type="flex" justify="space-between" align="middle">
          {onlyIcon || onlyImage ? (
            <>
              {onlyIcon ? (
                <i className={icon} onClick={() => this.props.onClick} />
              ) : (
                <a className="video-post-image">
                  <img src={image} alt="" />
                </a>
              )}
            </>
          ) : (
            <>
              {icon ? (
                <Col span={2}>
                  <i className={icon} />
                </Col>
              ) : (
                ''
              )}
              <Col span={!icon && !image ? 24 : 16}>
                <div className="video-post-content">
                  <a onClick={() => this.props.onClick()} className="video-post-title">
                    {title}
                  </a>
                </div>
              </Col>
              {image ? (
                <Col span={6}>
                  <a className="video-post-image">
                    <img src={image} alt="" />
                  </a>
                </Col>
              ) : (
                ''
              )}
            </>
          )}
        </Row>
      </ColumnItemWrapper>
    );
  }
}

export default ColumnItem;
