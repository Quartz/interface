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

export const Base = () => <Checkbox>Check me out!</Checkbox>;
