import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import MockAppDecorator from './addons/MockAppDecorator/MockAppDecorator'
// We are using a forked version of the smart knobs addon until a bug has been resolved (>6.0.2)
import { withSmartKnobs } from './addons/withSmartKnobs';

addDecorator( withSmartKnobs() );
addDecorator( withKnobs );
addDecorator( withA11y );
addDecorator( Story => <MockAppDecorator><Story /></MockAppDecorator> );

addParameters({
  options: {
  	name: 'Quartz Interface',
    selectedPanel: 'storybookjs/knobs/panel',
  },
});
