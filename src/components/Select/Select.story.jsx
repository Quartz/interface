import React from 'react';
import Select from './Select';
import docs from './Select.docs.mdx';

export default {
	title: 'Select',
	component: Select,
	parameters: {
		docs: { page: docs },
	},
};

export const Default = () => <Select options={[]}></Select>;
