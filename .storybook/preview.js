import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import MockAppDecorator from './addons/MockAppDecorator/MockAppDecorator'
import qzTheme from './themes/qz';

addDecorator( withA11y );
addDecorator( Story => <MockAppDecorator><Story /></MockAppDecorator> );

addParameters({
	options: {
		selectedPanel: 'storybookjs/knobs/panel',
		theme: qzTheme,
	},
});
