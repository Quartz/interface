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
	width: 600,
	margin: '0 auto',
};

export const Default = () => (
	<div style={styles}>
		<CalloutCard>
			<h2>Become a member of Quartz</h2>
			<p>Go beyond the headlines to master your understanding of <a href="https://qz.com/on/beyond-silicon-valley/" target="_blank">the forces reshaping the world.</a></p>
		</CalloutCard>
	</div>
);

const inputStyles = {
	width: '100%',
	'margin-top': '15px',
	border: '1px solid #ccc',
	borderRadius: '5px',
	padding: '5px',
};

// @TODO: Use our custom input component in this example once it is migrated
export const Form = () => (
	<div style={styles}>
		<CalloutCard>
			<h3>Need to Know: Coronavirus</h3>
			<p>Want a calm, rational, even curious approach to coronavirus? <a href="https://qz.com/emails/coronavirus/" target="_blank">We’ve got an email for that.</a> Sign up here:</p>
			<label>Email address:
				<input style={inputStyles} label="email" name="email" placeholder="email@email.com" />
			</label>
		</CalloutCard>
	</div>
);
