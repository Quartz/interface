import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import MockAppDecorator from './addons/MockAppDecorator/MockAppDecorator'
import qzTheme from './themes/qz';

addDecorator( Story => <MockAppDecorator><Story /></MockAppDecorator> );

addParameters( {
	options: {
		theme: qzTheme,
	},
} );
