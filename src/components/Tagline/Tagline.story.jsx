import React from 'react';
import Tagline from './Tagline';
import docs from './Tagline.docs.mdx';

export default {
	title: 'Tagline',
	component: Tagline,
	parameters: {
		docs: { page: docs },
	},
};

export const Default = () => (
	<Tagline>The next big battles in tech.</Tagline>
);

export const Dateline = () => (
	<Tagline>3 days ago • Quartz Africa</Tagline>
);
