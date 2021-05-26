import styled from 'styled-components';
import { Row as AntdRow, Tabs as AntdTab } from 'antd';

export const SidePaneWrapper = styled.div`
  .isoSidePane {
    background-color: rgb(221, 230, 233);
    .playlist-icon {
      position: fixed;
      margin-left: ${props => (props.collapsed === true ? '80px;' : '300px')};
      margin-top: 10px;
      z-index: 1000;
      font-size: 24px;
    }
    .isoSubMenu {
      width: 100%;
      .isoList {
        margin-top: 20px;
        width: 100%;
        height: 40px;
        margin: 0px 0px 0px 0px;
        display: flex;
        justify-content: flex-start;
        flex-shrink: 0;
        padding: 0;
        border-bottom: 1px solid rgb(241, 243, 246);
        background-color: #dde6e9;

        text-align: ${props => (props['data-rtl'] === 'rtl' ? 'right' : 'left')};
        position: relative;
      }
    }
  }
`;
export const Tabs = styled(AntdTab)`
  .ant-tabs-bar {
    position: fixed;
    height: 60px;
    z-index: 100;
    width: ${props => (props.collapsed === true ? '100px;' : '350px')};
    background: #b7cdd1;
    color: #a2a5a6;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: bottom;
    -webkit-box-align: bottom;
    -ms-flex-align: bottom;
    align-items: bottom !important;
    -webkit-box-pack: start;
    -webkit-justify-content: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding-left: 10px;
    .ant-tabs-nav-container {
      margin-top: 20px;
      .ant-tabs-tab {
        min-width: ${props => (props.collapsed === true ? '40px;' : '80px')};
        text-align: center;
        background: #b7cdd1 !important;
        border: none !important;
        &:hover {
          color: #737879 !important;
        }
      }
      .ant-tabs-tab-active {
        background: rgb(221, 230, 233) !important;
        color: #737879 !important;
      }
    }
  }
`;
