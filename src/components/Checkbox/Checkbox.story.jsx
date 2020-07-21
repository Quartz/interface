import React from 'react';
import Checkbox from './Checkbox';
import docs from './Checkbox.docs.mdx';

export default {
	title: 'Checkbox',
	component: Checkbox,
	parameters: {
		docs: { page: docs },
	},
};

export const Default = () => <Checkbox>Check me out!</Checkbox>;
export const Large = () => <Checkbox size="large">Check me out!</Checkbox>;
export const Invalid = () => <Checkbox invalid={true}>You must check this box to continue</Checkbox>;
export const Disabled = () => <Checkbox disabled={true}>Can't check this</Checkbox>;
