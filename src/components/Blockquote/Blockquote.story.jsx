import React from 'react';
import Blockquote from './Blockquote';
import docs from './Blockquote.docs.mdx';

export default {
	title: 'Blockquote',
	component: Blockquote,
	parameters: {
		docs: { page: docs },
	},
};

export const Children = () => (
	<Blockquote>
		<p><strong>In my work, I have to expose all sides of an argument—it’s nice to have a curated experience that solves for that.</strong></p>
		<p>— Gastao D., Senior Director, Strategy & Field Operations Excellence</p>
	</Blockquote>
);

export const InnerHtml = () => <Blockquote innerHtml="<p>The subscription to Quartz was probably my best investment of 2019. Your journalism is one of a kind, local on a global scale, actual and never boring.</p>" />;
