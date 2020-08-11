import React from 'react';
import Kicker from './Kicker';
import docs from './Kicker.docs.mdx';

export default {
	title: 'Kicker',
	component: Kicker,
	parameters: {
		docs: { page: docs },
	},
};

export const Default = () => (
	<Kicker>Neither Here Nor There</Kicker>
);
