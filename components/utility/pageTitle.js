import React from 'react';
import { ComponentTitleWrapper } from './pageTitle.style';

export default props => {
  return (
    <ComponentTitleWrapper
      style={props.style ? props.style : {}}
      className="isoComponentTitle"
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  );
};
