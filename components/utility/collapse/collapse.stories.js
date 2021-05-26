import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs/react';
import Collapse, { Panel } from '.';

storiesOf('Utility', module).add('Collapse', () => {

  return (
    <Collapse accordion>
      <Panel header="Online Clip Information" key="1">
        <p>content</p>
      </Panel>
      <Panel header="Film / Video Production Info" key="2">
        content
      </Panel>
      <Panel header="Master Recording Info" key="3">
        content
      </Panel>
      <Panel header="Publishing Info" key="4">
        content
      </Panel>
    </Collapse>
  );
});
