import styled from 'styled-components';
import { palette } from 'styled-theme';
import WithDirection from '@config/withDirection';

const WDListViewWrapper = styled.div`
  width: 100%;
  height: calc(100% - 145px);
  padding: 0 35px;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  align-items: center !important;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 767px) {
    padding: 0 20px;
  }

  @media only screen and (min-width: 767px) and (max-width: 990px) {
    flex-direction: column;
  }

  .isoListViewWrapper {
    width: ${props => (props.showMap ? '60%' : '100%')};
    display: flex;
    flex-direction: column;

    .ant-divider {
      margin: 0;
    }

    .isoListViewInfos {
      width: 100%;
      display: flex;
      flex-shrink: 0;
      align-items: baseline;
      flex-direction: row;
      margin: 8px 0;

      @media only screen and (max-width: 430px) {
        flex-direction: column;
        margin-bottom: 20px;
      }

      .isoPaginationLabel {
        font-weight: 900 !important;
      }

      .isoInfoLabel {
        font-size: 14px;
        font-weight: 450;
        color: ${palette('text', 5)} !important;
        line-height: 1.5;
        margin: 0;
        margin-right: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '15px')};
        margin-left: ${props => (props['data-rtl'] === 'rtl' ? '15px' : 'inherit')};
        text-align: ${props => (props['data-rtl'] === 'rtl' ? 'right' : 'left')};
        min-width: 130px;
        position: relative;

        @media only screen and (max-width: 430px) {
          margin-bottom: 5px;
          margin-right: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '0')};
          margin-left: ${props => (props['data-rtl'] === 'rtl' ? '0' : 'inherit')};
          padding-right: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '10px')};
          padding-left: ${props => (props['data-rtl'] === 'rtl' ? '10px' : 'inherit')};
          min-width: 0;
        }

        &::after {
          content: ':';
          position: absolute;
          right: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '0')};
          left: ${props => (props['data-rtl'] === 'rtl' ? '0' : 'inherit')};
          color: ${palette('border', 5)};
        }
      }
      .highlight {
        color: #4491af !important;
      }
      .isoInfoDetails {
        font-size: 14px;
        font-weight: 400;
        color: ${palette('text', 2)};
        line-height: 1.5;
        margin: 0;
        text-align: ${props => (props['data-rtl'] === 'rtl' ? 'right' : 'left')};
        a {
          &:hover {
            text-decoration: underline;
          }
        }
        .hover {
          cursor: pointer;
          &:hover {
            color: #4491af !important;
          }
        }
      }
    }
  }
`;

const ListViewWrapper = WithDirection(WDListViewWrapper);

export { ListViewWrapper };
