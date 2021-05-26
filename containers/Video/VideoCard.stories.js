import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs/react';
import VideoCard from './VideoCard';


storiesOf('Video', module)
  .add('VideoCard', () => {
    const url = text('srcURL', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'srcURL');
    const hour = number('hour', 0);
    const min = number('min', 0);
    const sec = number('sec', 30);

    const inTime = {
      hour,
      min,
      sec,
    };

    return <VideoCard url={url} inTime={inTime} />;
  });
