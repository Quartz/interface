import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withThemes } from 'storybook-addon-themes/react';
import { color } from '@quartz/styles/dictionaries/colors.json';
import MockAppDecorator from './addons/MockAppDecorator/MockAppDecorator';
import StoryTheme from './addons/StoryTheme/StoryTheme';
import theme from './themes/qz';

addDecorator( withThemes );
addDecorator( Story => <MockAppDecorator><Story /></MockAppDecorator> );

addParameters( {
	options: {
		theme, // This theme controls Storybook itself.
	},
	// These themes are applied to Stories (inside the iframe).
	themes: {
		Decorator: StoryTheme,
		list: [
			{ name: 'Light', color: color[ 'off-white' ].value, default: true },
			{ name: 'Dark', color: color[ 'dark-blue' ].value },
			{ name: 'At Work Light', color: color[ 'light-teal' ].value },
			{ name: 'At Work Dark', color: color[ 'dark-teal' ].value },
		],
	},
} );
