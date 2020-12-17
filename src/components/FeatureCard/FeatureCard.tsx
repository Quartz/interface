import React from 'react';
import { ResponsiveImage, TextGroup } from '..';
import styles from './FeatureCard.scss';

const responsiveImagePropsMapping = {
	small: {
		fallbackWidth: 220,
		fallbackHeight: 122,
		sizes: '220px',
		widthRange: [ 220, 220 ],
	},
	large: {
		fallbackWidth: 220,
		fallbackHeight: 122,
		sizes: `
			(min-width: 1200px) 666px,
			(min-width: 768px) 346px,
			220px,
		`,
		widthRange: [ 220, 666 ],
	},
};

export default function FeatureCard( props: {
	altText: string,
	description?: string,
	kicker?: string,
	src: string,
	title: string,
	showPlayIcon?: boolean,
	size: 'small' | 'large',
} ) {
	return (
		<div className={styles.container}>
			<div className={`${styles.imageContainer} ${styles.size}`}>
				<ResponsiveImage
					alt={props.altText}
					src={props.src}
					{...responsiveImagePropsMapping[props.size]}
				/>
			</div>
			<TextGroup
				isArticle
				kicker={props.kicker}
				tagline={props.description}
				title={props.title}
				size={props.size}
			/>
		</div>
	);
}
