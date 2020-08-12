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

const styles = {
	width: 600,
	margin: '0 auto',
};

export const Default = () => (
	<div style={styles}>
		<Blockquote>
			<p>The subscription to Quartz was probably my best investment of 2019. Your journalism is one of a kind, local on a global scale, actual and never boring.</p>
		</Blockquote>
	</div>
);

const testimonialStyles = {
	'font-family': "'Helvetica Neue', Helvetica, sans-serif",
	'font-size': '20px',
	width: 600,
	margin: '0 auto',
};

export const Testimonial = () => (
	<div style={testimonialStyles}>
		<Blockquote>
			<p><strong>The subscription to Quartz was probably my best investment of 2019. Your journalism is one of a kind, local on a global scale, actual and never boring.</strong></p>
		</Blockquote>
		<p>— Davide M., Director of Product Development</p>
	</div>
);
