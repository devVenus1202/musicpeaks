import * as React from 'react';
import { mount } from 'enzyme';

import Card from '../../utility/card';

describe('Card Component', () => {
  let component;
  const props = {
    title: 'title',
  };

  beforeEach(() => {
    component = mount(<Card {...props} />);
  });

  it('renders card content', () => {
    expect(component.find('.isoBoxContent')).toHaveLength(1);
  });
});
