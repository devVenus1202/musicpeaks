import * as React from 'react';
import { shallow, mount } from 'enzyme';

import SubMenu from '../../utility/submenu';
import SampleData from '../../../containers/Labels/fakeData';

describe('SubMenu Component', () => {
  let component;

  const props = {
    items: SampleData,
  };
  beforeEach(() => {
    component = mount(<SubMenu {...props} />);
  });

  it('renders Collapse wrapper', () => {
    expect(component.find('.isoSubMenu')).toHaveLength(1);
  });
  it('renders Collapse wrapper', () => {
    expect(component.find('.isoList')).toHaveLength(5);
  });
  it('renders Collapse wrapper', () => {
    expect(component.find('.isoSubMenuText')).toHaveLength(5);
  });
});
