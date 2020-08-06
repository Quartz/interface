import React from 'react';
import CalloutCard from './CalloutCard';
import docs from './CalloutCard.docs.mdx';

export default {
	title: 'CalloutCard',
	component: CalloutCard,
	parameters: {
		docs: { page: docs },
	},
};

const styles = {
	width: 400,
	margin: '0 auto',
};

export const Default = () => (
	<div style={styles}>
		<CalloutCard>
			<p>A <strong>callout card</strong> encapsulates components that add context or additional functionality to a page.</p>
		</CalloutCard>
	</div>
);
