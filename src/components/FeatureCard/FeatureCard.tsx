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
	portrait: {
		fallbackWidth: 285,
		fallbackHeight: 400,
		sizes: `
			(min-width: 1200px) 382px,
			285px,
		`,
		widthRange: [ 285, 382 ],
	},
};

export default function FeatureCard( props: {
	/**
	 * Alternative text to describe the image for screen readers or in situations
	 * where the image cannot be loaded. This prop is required but under certain
	 * circumstances an empty string is preferred.
	 */
	alt: string,
	/**
	 * Optional maller text below the component title. As an example, if the component title
	 * is "The rise of employee activists," a relevant description might be "Employee
	 * activists are transforming the workplace—and making companies better in the process."
	 */
	description?: string,
	/**
	 * The expected size & dimensions of the image to be rendered. The 'small' size will optimize
	 * the image for smaller contexts, such as content lists at mobile sizes. 'Large' and
	 * 'portrait' sizes will optimize for contexts such as Guide cards and content lists at desktop
	 * sizes. See [ResponsiveImage](/?path=/docs/responsiveimage--default-story).
	 */
	imageSize: 'small' | 'large' | 'portrait',
	/**
	 * A short phrase that accompanies the Hed. See [Kicker](/?path=/docs/kicker--default-story).
	 */
	kicker?: string,
	/**
	 * URL of an image in the WordPress media library. Must support
	 * resizing using the width (`w`), height (`h`) and crop (`crop`)
	 * query parameters.
	 */
	src: string,
	/**
	 * The size of the title text.
	 */
	textSize: 'small' | 'medium' | 'large',
	/**
	 * The article headline, used in TextGroup as Hed. See [Hed](/?path=/docs/hed--default-story).
	 */
	title: string,
	/**
	 * Shows a typical "play" icon overlaid onto the component image. Use when the card represents
	 * video content.
	 */
	showPlayIcon?: boolean,
} ) {
	return (
		<div>
			<div className={`${styles.imageContainer} ${styles[ props.imageSize ]}`}>
				<ResponsiveImage
					alt={props.alt}
					src={props.src}
					{...responsiveImagePropsMapping[props.imageSize]}
				/>
				{
					props.showPlayIcon && (
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" className={styles.playIcon}>
							<path d="M78.936 41.951L5.918 79.073a4 4 0 01-5.813-3.565V4.829a4 4 0 015.813-3.565l73.018 37.122a2 2 0 010 3.565z" fill="var(--color,#fff)" fill-rule="evenodd"/>
						</svg>
					)
				}
			</div>
			<TextGroup
				isArticle={props.imageSize !== 'portrait'}
				kicker={props.kicker}
				tagline={props.description}
				title={props.title}
				size={props.textSize}
			/>
		</div>
	);
}