import React from 'react';
import RadioButton from './RadioButton';
import docs from './RadioButton.docs.mdx';

export default {
	title: 'RadioButton',
	component: RadioButton,
	parameters: {
		docs: { page: docs },
	},
};

export const Default = () => <RadioButton>Check me out!</RadioButton>;
