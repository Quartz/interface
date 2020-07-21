import React from 'react';
import Spinner from './Spinner';
import docs from './Spinner.docs.mdx';

export default {
	title: 'Spinner',
	component: Spinner,
	parameters: {
		docs: { page: docs },
	},
};

export const Default = () => <Spinner />;
