import React from 'react';
import Example from './Example';
import docs from './Example.docs.mdx';

export default {
	title: 'Example',
	component: Example,
	parameters: {
		docs: { page: docs },
	},
};

export const Default = () => <Example />;
