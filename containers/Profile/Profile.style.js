import styled from 'styled-components';
import { Col } from 'antd';

const defaultURL = '../../static/image/default-header.jpg';
const bgURL = '../../static/image/eOne_profile_bg.png';
const bgURL2 = '../../static/image/Bell-Media-Header.jpg';

export const PageWrapper = styled.div`
  .isoBoxWrapper {
    min-height: 490px;
  }

  .top10-table {
    .ant-table-body {
      .ant-table-row {
        cursor: pointer;
      }
    }
  }
`;

export const ProfileHeaderWrapper = styled('div')`
  display: block;
  width: 100%;
`;

export const ProfileInfo = styled('div')`
  display: block;
  width: 100%;
  height: 216px;
  background-size: cover;
  position: relative;
  .header-image {
    position: absolute;
    background: url(${defaultURL}) no-repeat;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .user {
    margin-left: 20px;
    .user-info {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .user-info-name {
        font-size: 24px;
        font-weight: bold;
      }
      .user-info-location {
        margin-left: 20px;
        font-size: 13px;
        font-weight: normal;
      }
    }
    .subscription {
      .subscriptionInfo {
        display: inline-block;
        padding: 0 15px;
        text-align: center;
        &:first-child {
          padding-left: 0px;
        }
        .subscriptionNumber {
          margin-bottom: 0px;
          font-size: 22px;
          font-weight: bold;
        }
        .subscriptionTitle {
          font-size: 13px;
          font-weight: normal;
        }
      }
    }
  }
`;

export const ProfileNav = styled('div')`
  padding: 25px 20px;
  background: #fff;

  .ant-row {
    padding: 0 30px;
    button {
      margin: 0 10px;
      &:first-child {
        margin-left: 0px;
      }
    }
  }
`;

export const Avatar = styled('div')`
  min-width: 96px;
  width: 96px;
  height: 96px;
  border-width: 0;
  overflow: hidden;
  border-radius: 50%;
  img,
  object {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FlexCol = styled(Col)`
  display: flex;
  padding-top: 50px;
  padding-left: 60px !important;
`;

export const CatalogWrapper = styled.ul`
  padding-top: 20px;
  .catalog-item {
    display: list-item;
    margin-left: 20px;
    font-size: 13px;
    font-weight: bold;
    .catalog-item-name {
      width: 230px;
    }
    p {
      display: inline-block;
    }
  }
  .catalog-item-header {
    font-size: 17px;
    font-weight: bold;
    .catalog-item-name {
      width: 250px;
    }
  }
  li {
    display: flex;
    .semi-colon {
      padding: 0 10px;
      text-align: center;
    }
    .catalog-item-wrapper {
      color: #cecde0;
    }
  }
`;
