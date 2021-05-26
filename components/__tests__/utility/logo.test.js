import * as React from 'react';
import { shallow } from 'enzyme';

import Logo from '../../utility/logo';

describe('Logo Component', () => {
  let component;
  const props = {
    type: false,
  };

  beforeEach(() => {
    component = shallow(<Logo {...props} />);
  });

  it('renders Logo wrapper', () => {
    expect(component.find('.isoLogoWrapper')).toHaveLength(1);
  });

  it('renders Logo component', () => {
    expect(component.find('img')).toHaveLength(1);
  });
});
