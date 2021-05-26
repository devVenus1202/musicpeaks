import * as React from 'react';
import { mount, shallow } from 'enzyme';

import PostSection from '../../TopVideo/PostSection';

describe('TopVideo PostSection Component', () => {
  let component;
  const props = {
    data: {
      clip_title: 'title',
      still_image_url: '...',
      viewCount: '1',
    },
  };

  beforeEach(() => {
    component = shallow(<PostSection {...props} />);
  });

  it('renders PostSection video thumbnail', () => {
    expect(component.find('img')).toHaveLength(1);
  });

  it('renders PostSection video content', () => {
    expect(component.find('div.video-post-content')).toHaveLength(1);
  });

  it('renders PostSection video title', () => {
    expect(component.find('.video-post-title')).toHaveLength(1);
  });
});
