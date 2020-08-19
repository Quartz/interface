import React from 'react';
import Hed from './Hed';
import docs from './Hed.docs.mdx';

export default {
	title: 'Hed',
	component: Hed,
	parameters: {
		docs: { page: docs },
	},
};

export const Small = () => (
	<Hed size="small">All the “wellness” products Americans love to buy are sold on both Infowars and Goop</Hed>
);

export const Medium = () => (
	<Hed size="medium">All the “wellness” products Americans love to buy are sold on both Infowars and Goop</Hed>
);

export const Large = () => (
	<Hed size="large">All the “wellness” products Americans love to buy are sold on both Infowars and Goop</Hed>
);
