import * as React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App Component', () => {
  it('renders a', () => {
    const app = shallow(<App />);
    expect(app.find('title')).toHaveLength(1);
  });
});
