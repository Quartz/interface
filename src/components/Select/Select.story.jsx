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

export const Default = () => (
	<Select
		label="Obsessions"
		options={[
			{ label: 'What are you obsessed with?', value: '' },
			{ label: 'Future of Finance', value: 'ff' },
		]}
		subtext="Obsessions are our alternative to traditional journalistic beats."
	>
	</Select>
);

export const Invalid = () => (
	<Select
		label="Obsessions"
		invalid={true}
		options={[
			{ label: 'What are you obsessed with?', value: '' },
			{ label: 'Future of Finance', value: 'ff' },
		]}
		subtext="Something's wrong."
	>
	</Select>
);
