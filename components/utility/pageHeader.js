import React from 'react';
import { ComponentHeaderWrapper } from './pageHeader.style';

export default props => {
  return (
    <ComponentHeaderWrapper
      style={props.style ? props.style : {}}
      className="isoComponentTitle"
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  );
};
