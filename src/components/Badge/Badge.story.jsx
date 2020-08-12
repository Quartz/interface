import React from 'react';
import Badge from './Badge';
import docs from './Badge.docs.mdx';

export default {
	title: 'Badge',
	component: Badge,
	parameters: {
		docs: { page: docs },
	},
};

export const Small = () => (
	<Badge
		alt="Mindful Money"
		imageUrl="https://cms.qz.com/wp-content/uploads/2020/03/MM_promo.png?w=2000"
		size="small"
	/>
);

export const Medium = () => (
	<Badge
		alt="Mindful Money"
		imageUrl="https://cms.qz.com/wp-content/uploads/2020/03/MM_promo.png?w=2000"
		size="medium"
	/>
);

export const Large = () => (
	<Badge
		alt="Mindful Money"
		imageUrl="https://cms.qz.com/wp-content/uploads/2020/03/MM_promo.png?w=2000"
		size="large"
	/>
);

export const ExtraLarge = () => (
	<Badge
		alt="Mindful Money"
		imageUrl="https://cms.qz.com/wp-content/uploads/2020/03/MM_promo.png?w=2000"
		size="extra-large"
	/>
);
