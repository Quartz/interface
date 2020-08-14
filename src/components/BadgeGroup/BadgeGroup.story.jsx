import React from 'react';
import BadgeGroup from './BadgeGroup';
import docs from './BadgeGroup.docs.mdx';

export default {
	title: 'BadgeGroup',
	component: BadgeGroup,
	parameters: {
		docs: { page: docs },
	},
};

export const Taxonomy = () => (
	<div style={{ maxWidth: 400 }}>
		<BadgeGroup
			imageUrl="https://cms.qz.com/wp-content/uploads/2019/12/fintech_guide_cover.jpg?quality=75&strip=all&w=100&h=100&crop=1"
			kicker="From our Guide"
			tagline="Which unicorns will fade and which are here to stay."
			title="Beyond the fintech hype"
		/>
	</div>
);

export const TaxonomyWrappingTagline = () => (
	<div style={{ maxWidth: 400 }}>
		<BadgeGroup
			imageUrl="https://cms.qz.com/wp-content/uploads/2019/12/fintech_guide_cover.jpg?quality=75&strip=all&w=100&h=100&crop=1"
			kicker="From our Guide"
			tagline="Which unicorns will fade and which are here to stay. A guide to the biggest beasts in the fintech unicorn herd."
			title="Beyond the fintech hype"
		/>
	</div>
);
