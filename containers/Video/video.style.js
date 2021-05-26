import styled from 'styled-components';
import { Row as AntdRow } from 'antd';

export const VideoPageWrapper = styled.div`
  .isoBoxWrapper {
    min-height: 350px;
    margin: 0 17px 30px;
    padding: 0;

    .isoBoxContent {
      padding: 0;
    }
    .box-content {
      padding: 0px 20px;

      .video-title {
        font-size: 30px;
        margin-bottom: 10px;
      }

      p {
        font-size: 14px;
      }

      .video-card-footer {
        i {
          svg {
            path {
              fill: #98a6ad;
            }
          }
        }
        a {
          margin-left: 4px;
          margin-right: 12px;
        }      
      }
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  .recent-post-title {
    font-weight: 700;
    font-size: 14px;
    margin: 10px 0;
  }

  .comment-title {
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 18px;
  }
`;

export const Row = styled(AntdRow)`
  margin-bottom: 15px;
`;

export const PostSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  .video-post-image {
    width: 50px;
    height: 50px;
    padding: 2px;
    border: 1px solid #dee5e7;
    margin-right: 15px;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .video-post-content {
    .video-post-title {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
    }
    .video-post-status {
      display: block;
      margin-top: 5px;
      font-size: 12px;
    }
  }
`;
