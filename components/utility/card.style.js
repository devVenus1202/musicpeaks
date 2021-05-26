import styled from 'styled-components';

export const CardWrapper = styled.ul`
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
