import React from 'react';
import InlineWrapper from './InlineWrapper';
import docs from './InlineWrapper.docs.mdx';

export default {
	title: 'InlineWrapper',
	component: InlineWrapper,
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
		<InlineWrapper>
			<p>An <strong>inline wrapper</strong> encapsulates components that add context or additional functionality to a page.</p>
		</InlineWrapper>
	</div>
);
