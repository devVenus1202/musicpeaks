import React, { Component } from 'react';
import { Tag } from 'antd';
import {
  CommentWrapper,
  CommentHeader,
  CommentBody,
  Avatar,
} from './Comment.style';
import avatarImg from '../../static/image/avatar2.jpg';

class Comment extends Component {
  render() {
    return (
      <CommentWrapper>
        <CommentHeader>
          <Avatar src={avatarImg} alt="" />
          <div className="header-content">
            <div className="header-content-name">
              <span>John Doe</span>
              <Tag color="#23b7e5">Editor</Tag>
            </div>
            <div className="header-content-status">
              <span>24 minutes ago</span>
            </div>
          </div>
        </CommentHeader>
        <CommentBody>{this.props.children}</CommentBody>
      </CommentWrapper>
    );
  }
}

export default Comment;
