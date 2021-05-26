import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition, borderRadius } from '../../config/style-util';
import WithDirection from '../../config/withDirection';

const SubMenuComponentWrapper = styled.div`
  padding: 0px;
  display: flex;
  height: 100%;
  min-height: 300px;
  background: none;

  @media only screen and (max-width: 767px) {
    padding: 0px;
    height: auto;
    flex-direction: column;

    &.ant-layout.ant-layout-has-sider {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 767px) and (max-width: 990px) {
    padding: 0px;
  }

  .isoSubMenuSidebar {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    ${'' /* height: 100%; */} background: transparent;
    // border-right: ${props => (props['data-rtl'] === 'rtl' ? 0 : 1)}px solid ${palette('border', 0)};
    // border-left: ${props => (props['data-rtl'] === 'rtl' ? 1 : 0)}px solid ${palette('border', 0)};

    @media only screen and (min-width: 767px) and (max-width: 990px) {
      
    }
    @media only screen and (max-width: 767px) {
      width: auto !important;
      max-width: 100% !important;
      min-width: 0 !important;
      margin-bottom: 30px;
      flex: 0 !important;
      overflow: hidden;
      overflow-y: auto;
    }
  }

  .isoNotepadWrapper {
    background: #ffffff;

    .isoHeader {
      height: auto;
      line-height: inherit;
      padding: 20px 30px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: row;
      background-color: #ffffff;
      border-bottom: 2px solid ${palette('border', 0)};

      @media only screen and (max-width: 480px) {
        padding: 20px;
      }

      @media only screen and (max-width: 400px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      .isoColorChooseWrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        margin-right: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : 'auto')};
        margin-left: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : 'inherit')};

        span {
          font-size: 13px;
          color: ${palette('grayscale', 0)};
        }

        .isoColorChooser {
          width: 20px;
          height: 20px;
          cursor: pointer;
          border: 0;
          margin: ${props => (props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0')};
          padding: 0;
          ${borderRadius('3px')};
        }
      }

      .isoAddNoteBtn {
        background-color: ${palette('primary', 0)};
        border: 0;
        padding: 5px 15px;
        margin-left: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : 'auto')};
        margin-right: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : 'inherit')};
        ${borderRadius('3px')};
        ${transition()};

        @media only screen and (max-width: 400px) {
          margin: ${props => (props['data-rtl'] === 'rtl' ? '15px 0 0 0' : '15px 0 0 0')};
        }

        span {
          font-size: 12px;
          font-weight: 400;
          padding: 0;
          text-transform: uppercase;
          color: #ffffff;
        }

        &:hover {
          background-color: ${palette('primary', 1)};
        }
      }
    }

    .isoNoteEditingArea {
      display: flex;
      height: 100%;

      @media (max-width: 800px) {
        height: 300px;
      }

      .isoNoteTextbox {
        font-size: 14px;
        color: ${palette('text', 2)};
        line-height: 24px;
        width: 100%;
        height: calc(100% - 30px);
        border: 0;
        outline: 0;
        padding: 20px 30px;
        resize: none;

        @media only screen and (max-width: 480px) {
          padding: 20px;
        }
      }
    }

    @media (max-width: 767px) {
      .isoSubMenuSidebar.ant-layout-sider {
        width: auto !important;
        margin-bottom: 30px;
        flex: 0 0 450px !important;
      }
    }
  }
`;

export default WithDirection(SubMenuComponentWrapper);
