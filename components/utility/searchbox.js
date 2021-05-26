import React, { Component } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;
export const SearchBox = styled(Search)`
  font-size: 15px;
  .ant-input-suffix {
    width: 16px;
    ${props => (props.leftButton ? 'left' : 'right')}: 12px !important;
  }
  input {
    padding-right: ${props => (props.leftButton ? '12px' : '30px')} !important;
    padding-left: ${props => (props.leftButton ? '30px' : '12px')} !important;
  }
`;
export default class extends Component {
  render() {
    return <SearchBox {...this.props} />;
  }
}
