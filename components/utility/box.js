import React from 'react';
import BoxTitleWrapper from './boxTitle';
import { BoxWrapper } from './box.style';

export default props => (
  <BoxWrapper className="isoBoxWrapper">
    <BoxTitleWrapper title={props.title} subtitle={props.subtitle} />
    <div className="isoBoxContent">{props.children}</div>
  </BoxWrapper>
);
