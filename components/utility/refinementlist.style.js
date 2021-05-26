import styled from 'styled-components';
import { Badge as AntdBadge } from 'antd';

export const RefinementListWrapper = styled.div`
  max-width: 800px;
  margin: 20px 0;
  ul {
    margin-top: 20px;
    padding: 0;
    li {
      list-style: none;
      border: none;
      margin-top: -1px;
      line-height: 1.5;
      padding: 5px 0px;
      background: white;
      display: flex;
      align-items: center;
      .ant-checkbox-wrapper {
        text-overflow: ellipse;
        .ant-checkbox {
          background: transparent;
          border-color: #bfcad4;
        }
      }
    }
  }
`;

export const Badge = styled(AntdBadge)`
  margin: 0 0 0 auto !important;
  padding-right: 0px !important;
  sup {
    color: #4074d0;
    background-color: #c9d7e2;
    box-shadow: none;
  }
`;
