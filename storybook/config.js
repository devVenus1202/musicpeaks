import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react/dist/client/preview';
import { withKnobs } from '@storybook/addon-knobs';
import './mockRouter';

addDecorator(withKnobs);

const reqContainers = require.context('../containers', true, /\.stories\.js$/);
const reqComponents = require.context('../components', true, /\.stories\.js$/);

function loadStories() {
  reqContainers.keys().forEach(filename => reqContainers(filename));
  reqComponents.keys().forEach(filename => reqComponents(filename));
}

configure(loadStories, module);
