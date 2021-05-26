import React from 'react';
import Collapses from '../../uielements/collapse';
import CollapseWrapper from './collapse.style';

export const Panel = Collapses.Panel;

export default props => (
  <CollapseWrapper>
    <Collapses {...props}>{props.children}</Collapses>
  </CollapseWrapper>
);
