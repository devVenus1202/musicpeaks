import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, boolean } from '@storybook/addon-knobs/react';
import Card from './card';
import Box from './box';
import HelperText from './helper-text';
import Loader from './loader';
import PageHeader from './pageHeader';
import Logo from './logo';
import PWALoader from './pwaloader';
import VideoClipCard from './videoClipCard';
import ColumnItem from './columnItem';
import Refinementlist from './refinementlist';

storiesOf('Utility', module).add('Card', () => {
  const title = text('title', 'card title', 'title');

  return <Card title={title}>content</Card>;
});

storiesOf('Utility', module).add('Box', () => {
  const title = text('title', 'box title', 'title');

  return <Box title={title}> box content</Box>;
});

storiesOf('Utility', module).add('HelperText', () => {
  const helperText = text('text', 'helper text', 'text');

  return <HelperText text={helperText} />;
});

storiesOf('Utility', module).add('Loader', () => {
  return <Loader />;
});

storiesOf('Utility', module).add('PwaLoader', () => {
  return <PWALoader />;
});

storiesOf('Utility', module).add('Logo', () => {
  return <Logo type />;
});

storiesOf('Utility', module).add('PageHeader', () => {
  return <PageHeader>page header text</PageHeader>;
});

storiesOf('Utility', module).add('VideoClipCard', () => {
  const viewMode = text('viewMode', 'list', 'grid');
  const title = text('title', 'title', 'title');
  const info = text('info', '11,233', '11,233');
  const artist = text('artist', 'artist', 'artist');

  return (
    <div style={{ maxWidth: '500px' }}>
      <VideoClipCard viewMode={viewMode} title={title} info={info} artist={artist} />
    </div>
  );
});

storiesOf('Utility', module).add('ColumnItem', () => {
  const title = text('title', 'TitleTitleTitle', 'title');
  const icon = text('icon', 'demo-icon ', '');
  const image = text('image', 'sample_clip.png', 'image');
  const onlyIcon = boolean('onlyIcon', false);
  const onlyImage = boolean('onlyImage', false);
  const playItem = boolean('playItem', true);
  const active = boolean('active', false);
  return (
    <div style={{ maxWidth: '500px' }}>
      <ColumnItem
        title={title}
        icon={icon}
        image={image}
        onlyIcon={onlyIcon}
        onlyImage={onlyImage}
        playItem={playItem}
        active={active}
      />
    </div>
  );
});

storiesOf('Utility', module).add('RefinementList', () => {
  return (
    <div style={{ background: '#33333' }}>
      <Refinementlist />
    </div>
  );
});
