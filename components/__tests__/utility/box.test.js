import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Box from '../../utility/box';

describe('box Component', () => {
  let component;
  const props = {
    title: 'title',
  };

  beforeEach(() => {
    component = mount(<Box {...props} />);
  });

  it('renders box content', () => {
    expect(component.find('.isoBoxContent')).toHaveLength(1);
  });
});
