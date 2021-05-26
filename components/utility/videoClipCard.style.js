import styled from 'styled-components';

export const VideoClipCardWrapper = styled.div`
  .card-body {
    position: relative;
    padding: 5px;
    border: 1px solid #dee5e7;

    &:hover {
      .card-body-overlay {
        cursor: pointer;
        display: block;
      }
    }
    &-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: none;
      background-color: rgba(255, 255, 255, 0.5);
      color: #58666e;
      z-index: 100;

      &-icon {
        position: absolute;
        width: 100%;
        top: 50%;
        margin-top: -15px;
        text-align: center;
        svg {
          cursor: pointer;
          background-color: transparent;
          path {
            fill: #fff;
          }
        }
      }
    }

    .thumb-container {
      background-color: black;
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */

      .thumb {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        text-align: center;
        font-size: 20px;
        color: white;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }

  .card-description {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 8px;

    .card-title {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
    .card-info {
      display: block;
      overflow: hidden;

      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: #98a6ad;
    }
    .card-view-info {
      display: block;
      white-space: nowrap;
      font-size: 12px;
      color: #98a6ad;
      text-align: right;
    }
  }
`;

export const VideoClipRowItemWrapper = styled.div`
  width: 100%;
  padding: 20px 10px;
  .card-body {
    position: relative;
    padding: 5px;
    border: 1px solid #dee5e7;

    &:hover {
      .card-body-overlay {
        cursor: pointer;
        display: block;
      }
    }
    &-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: none;
      background-color: rgba(255, 255, 255, 0.5);
      color: #58666e;
      z-index: 100;

      &-icon {
        position: absolute;
        width: 100%;
        top: 50%;
        margin-top: -15px;
        text-align: center;
        svg {
          cursor: pointer;
          background-color: transparent;
          path {
            fill: #fff;
          }
        }
      }
    }

    .thumb-container {
      background-color: black;
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */

      .thumb {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        text-align: center;
        font-size: 20px;
        color: white;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }

  .card-description {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;

    .card-title {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
    .card-info {
      display: block;
      overflow: hidden;

      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: #98a6ad;
    }
    .card-view-info {
      display: block;
      white-space: nowrap;
      font-size: 12px;
      color: #98a6ad;
      text-align: right;
    }
  }
`;
