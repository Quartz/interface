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

const options = [
	{ label: 'What are you obsessed with?', value: '' },
	{ label: 'Future of Finance', value: 'ff' },
	{ label: 'Beyond Silicon Valley', value: 'bsv' },
	{ label: 'How we spend', value: 'hws' },
	{ label: 'Because China', value: 'bc' },
	{ label: 'Fixing capitalism', value: 'fcs' },
	{ label: 'The climate economy', value: 'tce' },
];

export const Default = () => (
	<Select
		label="Obsessions"
		options={options}
		subtext="Obsessions are our alternative to traditional journalistic beats."
	>
	</Select>
);

export const Invalid = () => (
	<Select
		label="Obsessions"
		invalid={true}
		options={options}
		subtext="Something's wrong."
	>
	</Select>
);
