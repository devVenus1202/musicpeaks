import * as React from 'react';
import { mount, shallow } from 'enzyme';

import ProfileHeader from '../../Profile/ProfileHeader';

describe('Profile Header Component', () => {
  let component;
  const props = {
    user: '99',
  };

  beforeEach(() => {
    component = shallow(<ProfileHeader {...props} />);
  });

  it('renders Profile Header Layout', () => {
    expect(component.find('Row')).toHaveLength(2);
  });

  it('renders Profile Header Buttons', () => {
    expect(component.find('Button')).toHaveLength(3);
  });

  it('renders Profile Header User info', () => {
    expect(component.find('div.user')).toHaveLength(1);
    expect(component.find('div.user-info')).toHaveLength(1);
    expect(component.find('div.subscription')).toHaveLength(1);
  });
});
