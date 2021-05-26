import styled from 'styled-components';

export const ColumnItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  height: ${props => (props.playItem === true ? '60px;' : '40px;')};
  width: 100%;
  background-color: ${props => (props.active === true ? 'rgb(80, 145, 177)' : 'rgb(221, 230, 233)')};
  text-align: left;
  position: relative;
  margin: 0px;
  padding: 0px;
  border-bottom: 1px solid ${props => (props.active === true ? 'rgb(80, 145, 177)' : 'rgb(241, 243, 246)')};
  border-top: ${props => (props.active === true ? '1px solid rgb(80, 145, 177)' : '')};
  padding: ${props => (props.onlyIcon === true ? '10px 10px 10px 10px;' : '10px 20px 10px 20px;')};

  .ant-row-flex {
    width: 100%;
    img {
      width: 20px;
    }
    .video-post-image {
      min-width: 80px;
      border: 2px solid #edfbff;
      float: right;
      border-radius: 2px;
      img {
        width: 75px;
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
        color: ${props => (props.active === true ? 'rgb(248, 252, 254)' : 'rgb(105, 106, 107)')};
      }
      .video-post-status {
        display: block;
        margin-top: 5px;
        font-size: 12px;
      }
    }
  }
`;
