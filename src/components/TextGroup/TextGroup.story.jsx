import React from 'react';
import TextGroup from './TextGroup';
import docs from './TextGroup.docs.mdx';

export default {
	title: 'TextGroup',
	component: TextGroup,
	parameters: {
		docs: { page: docs },
	},
};

export const Small = () => (
	<div style={{ maxWidth: 400 }}>
		<TextGroup
			size="small"
			tagline="The concise, conversational rundown you need to start your day."
			title="Quartz Daily Brief"
		/>
	</div>
);

export const Medium = () => (
	<div style={{ maxWidth: 400 }}>
		<TextGroup
			size="medium"
			tagline="The concise, conversational rundown you need to start your day."
			title="Quartz Daily Brief"
		/>
	</div>
);

export const Large = () => (
	<div style={{ maxWidth: 600 }}>
		<TextGroup
			size="large"
			tagline="The concise, conversational rundown you need to start your day."
			title="Quartz Daily Brief"
		/>
	</div>
);

export const Taxonomy = () => (
	<div style={{ maxWidth: 400 }}>
		<TextGroup
			kicker="From our Guide"
			tagline="Which unicorns will fade and which are here to stay."
			title="Beyond the fintech hype"
		/>
	</div>
);

export const Article = () => (
	<div style={{ maxWidth: 600 }}>
		<TextGroup
			isArticle={true}
			kicker="Lightning Goals"
			size="large"
			tagline="Oct. 12, 2018 • Quartz"
			title="Usain Bolt is slowly but surely becoming a soccer player"
		/>
	</div>
);

export const NoKicker = () => (
	<div style={{ maxWidth: 400 }}>
		<TextGroup
			tagline="Coronavirus has changed the world. Here’s how experts think it will affect our lives in five years."
			title="The New Normal"
		/>
	</div>
);
