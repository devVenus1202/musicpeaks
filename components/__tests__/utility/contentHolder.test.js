import * as React from 'react';
import { shallow } from 'enzyme';

import ContentHolder from '../../utility/contentHolder';

describe('ContentHolder Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ContentHolder />);
  });

  it('renders ContentHolder content', () => {
    expect(component.find('.isoExampleWrapper')).toHaveLength(1);
  });
});
