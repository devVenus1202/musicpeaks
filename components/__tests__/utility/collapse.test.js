import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Collapse from '../../utility/collapse';

describe('Collapse Component', () => {
  let component;

  beforeEach(() => {
    component = mount(<Collapse />);
  });

  it('renders Collapse wrapper', () => {
    expect(component.find('.ant-collapse')).toHaveLength(1);
  });
});
