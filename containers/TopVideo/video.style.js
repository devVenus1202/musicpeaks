import styled from 'styled-components';
import { Row as AntdRow } from 'antd';

export const VideoPageWrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 300px;
  background: none;
  width: 100%;
  .videoPage {
    width: inherit;
    .videoPageContent {
      width: 100%;
      margin-top: 70px;
    }
  }

  .isoBoxWrapper {
    min-height: 350px;
    margin: 0 0px 30px;
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

  .video-information {
    margin-top: 20px;
    padding-left: 32px !important;
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

  .ant-collapse-content-box {
    padding: 0px;
  }

  .isoListView {
    padding: 0px;
    .isoListViewInfos {
      padding: 0 16px;
    }
  }
`;

export const Row = styled(AntdRow)`
  margin-bottom: 15px;

  .video-player {
    min-height: 300px;
  }

  .video-thumbs-container {
    position: relative;
    padding-top: 39.5%; /* 8:5 Aspect Ratio */
    h5 {
      position: absolute;
      top: 0px;
    }
    .video-thumbs {
      overflow-x: hidden;
      overflow-y: auto;
      position: absolute;
      top: 40px;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
`;

export const PostSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  .video-post-image {
    min-width: 80px;
    width: 80px;
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

export const PlaylistItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  height: 60px;
  width: 100%;
  background-color: rgb(221, 230, 233);
  text-align: left;
  position: relative;
  margin: 0px;
  padding: 0px;
  border-bottom: 1px solid rgb(241, 243, 246);
  padding: ${props => (props.onlyIcon === true ? '10px 10px 10px 10px;' : '10px 20px 10px 20px;')};

  img {
    width: 20px;
  }
  .video-post-image {
    min-width: 80px;
    width: 80px;
    height: 60px;
    padding: 2px;
    border: 1px solid #dee5e7;
    margin-right: 15px;

    img {
      width: ${props => (props.onlyIcon === true ? '75px' : '100%')};
      height: 44px;
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
export const PlaylistWrapper = styled.div`
  .isoSubMenuSidebar {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background-color: transparent;
    background-image: linear-gradient(
      0deg,
      rgb(241, 243, 246) 1px,
      rgb(221, 230, 233) 0%,
      rgb(221, 230, 233) 1px,
      rgb(221, 230, 233) 100%
    );
    height: 100%;
    background-size: 250px 60px;
    overflow: hidden;
    height: 100vh;

    .playlist-header {
      height: 60px;
      padding: 10px 10px 10px 20px;
      position: fixed;
      width: ${props => (props.collapsed === true ? '100px;' : '350px')};
      z-index: 1000;
      transition: all 0.2s;
      .playlist-icon {
        position: absolute;
        right: ${props => (props.collapsed === true ? '63px;' : '6px')};
        top: 12px;
        font-size: 24px;
        cursor: pointer;
        font-weight: 400;
        transition: all 0.2s;
      }
    }
    .video-thumbs {
      margin-top: 60px;
    }
  }
`;
export const PlayerWrapper = styled.div`
  margin-left: 17px;
`;
