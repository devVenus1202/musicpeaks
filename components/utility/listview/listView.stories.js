import React from 'react';
import { storiesOf } from '@storybook/react';
import ListView from '.';

storiesOf('Utility', module).add('ListView', () => {
  const data = {
    keyname1: 'value - 1',
    keyname2: 'value - 2',
    keyname3: 'value - 3',
    keyname4: 'value - 4',
  };

  const fields = [
    {
      title: 'Key Name1',
      value: 'keyname1',
      type: 'String',
    },
    {
      title: 'Key Name2',
      value: 'keyname2',
      type: 'String',
    },
    {
      title: 'Key Name3',
      value: 'keyname3',
      type: 'String',
    },
    {
      title: 'Key Name4',
      value: 'keyname4',
      type: 'String',
    },
  ];

  return <ListView data={data} fields={fields} />;
});
