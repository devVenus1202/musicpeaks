import * as React from 'react';
import { shallow } from 'enzyme';

import PageHeader from '../../utility/pageHeader';

describe('PageHeader Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PageHeader />);
  });

  it('renders PageHeader content', () => {
    expect(component.find('.isoComponentTitle')).toHaveLength(1);
  });
});
