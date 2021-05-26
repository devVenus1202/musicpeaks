import styled from 'styled-components';
import { Tabs as AntdTab, Card as CardTab, Slider as AntSlider } from 'antd';

export const TabbedSidebarWrapper = styled.div`
  ul > li {
    background: transparent !important;
  }
  ul {
    overflow: auto;
  }
  .list-tab-pane {
    .filterPane {
      border-bottom: 1px solid #b7cdd1;
    }
    section {
      max-height: calc(100% - 81px) !important;
    }
  }
  .filterPane {
    width: 100%;
    padding: 20px;
    background-color: rgb(221, 230, 233);
    .mainSearch {
      height: 40px;
    }
    input {
      background-color: #f1f3f6;
    }
  }
  .isoSidePane {
    background-color: rgb(221, 230, 233);
    .playlist-icon {
      position: fixed;
      margin-left: ${props => (props.collapsed === true ? '8px;' : '300px')};
      margin-top: 12px;
      z-index: 1000;
      font-size: 24px;
      cursor: pointer;
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
export const Card = styled(CardTab)`
  border: 1px solid #cad3d6;
  margin: 20px 0px;
  width: 100%;
  background: transparent;

  .ant-card-body {
    padding: 15px !important;
    .range-header {
      display: flex;
      justify: start;
      span {
        margin: 0 0 0 auto;
      }
    }
  }
`;
export const Slider = styled(AntSlider)`
  margin: 14px 0px 10px !important;
  .ant-slider-track {
    background-color: #4391b6 !important;
    z-index: 1;
  }
  .ant-slider-handle {
    border-color: #4391b6;
    z-index: 2;
  }
  .ant-slider-step {
    background-color: #e7e8eb;
    &:hover {
      background-color: #e7e8eb !important;
    }
  }
`;
export const Tabs = styled(AntdTab)`
  position: fixed;
  width: ${props => (props.collapsed === true ? '40px;' : '350px')};
  .list-tab-pane {
    background: linear-gradient(0deg, rgba(241, 243, 246, 1) 1px, #dde6e9 0%, #dde6e9 100%);
    background-color: transparent;
    background-size: 350px 40px;
  }
  .sequence-tab-pane {
    background: linear-gradient(0deg, rgba(241, 243, 246, 1) 1px, #dde6e9 0%, #dde6e9 100%);
    background-color: transparent;
    background-size: 350px 60px;
  }
  .filter-tab-pane {
    background: #dde6e9;
  }
  .ant-tabs-content {
    height: calc(100vh - 130px);
    .ant-tabs-tabpane {
      height: 100%;
      .loading-pane {
        background-color: transparent;
        height: 100%;
        background-image: linear-gradient(
            0deg,
            rgba(241, 243, 246, 1) 1px,
            #dde6e9 0%,
            #dde6e9 40%,
            transparent 41%,
            transparent 60%,
            #dde6e9 61%,
            #dde6e9 100%
          ),
          linear-gradient(90deg, #dde6e9 20px, rgba(105, 106, 107, 1) 20px, #dde6e9 300px, #dde6e9 300px, #dde6e9 100%),
          linear-gradient(
            0deg,
            rgba(241, 243, 246, 1) 1px,
            #dde6e9 0%,
            #dde6e9 40%,
            transparent 41%,
            transparent 60%,
            #dde6e9 61%,
            #dde6e9 100%
          );

        background-size: 350px 40px;
      }
    }
  }
  .ant-tabs-bar {
    height: 60px;
    z-index: 100;

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
    margin: 0px;
    .ant-tabs-nav-container {
      margin-top: 10px;
      height: 50px !important;
      .ant-tabs-tab {
        display: ${props => (props.collapsed === true ? 'none' : 'inline-block')};
        min-width: 80px;
        text-align: center;
        background: #b7cdd1 !important;
        border: none !important;
        height: 49px;
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
