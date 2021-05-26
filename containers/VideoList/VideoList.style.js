import styled from 'styled-components';
import { Row as AntdRow, Spin as AntdSpin, Alert as AntdAlert } from 'antd';

export const VideoListWrapper = styled.section`
  width: 100%;
  .videoClips {
    
    width: 100%;
    .isoBoxWrapper {
      min-height: 350px;
      margin: 0 17px 30px;
      padding: 0;
    }
    .ant-row{
      margin-top:70px;
    }
    .isoViewChanger{
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      position: absolute;
      top: 82px;
      z-index: 1000;
      right: 65px;
      background: rgb(241,243,246);
      
      .orderChanger {
        margin-left: auto;
        margin-right: 20px;
        border: 1px solid #e9e9e9;
      }
      .changer.active {
        background-color: #3369e7;
        border-color: #3369e7;
        i {
          color: #ffffff;
        }
      }
      .changer {
        font-size: 16px;
        color: #2d3446;
        text-align: center;
        width: 35px;
        height: 35px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-color: #ffffff;
        outline: 0;
        padding: 0;
        border: 1px solid #e9e9e9;
        margin-left: -1px;
        cursor: pointer;
        -webkit-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
        -moz-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
        -ms-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
        -o-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
        -webkit-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
        transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
        i {
          font-size: 18px;
          color: #2d3446;
          width: 100%;
          line-height: 33px;
          -webkit-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
          -moz-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
          -ms-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
          -o-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
          -webkit-transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
          transition: all 0.3s cubic-bezier(0.215,0.61,0.355,1);
        }
      }
    }
    


    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const Row = styled(AntdRow)`
  margin-bottom: 15px;
`;
export const Spin = styled(AntdSpin)`
  margin-top: 30vh;
  width: 100%;
  color: #696a6b;
  i {
    background: #696a6b;
  }
`;
export const Alert = styled(AntdAlert)`
  margin: auto;
  border: none;
  text-align: center;
`;
