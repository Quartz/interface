import React from 'react';
import { ResponsiveImage, TextGroup } from '..';
import styles from './FeatureCard.scss';

function ArticleImage( props: {
	/**
	 * Determines expected size and maximum width of the image.
	 */
	size: 'small' | 'large',
	/**
	 * URL of an image in the WordPress media library. Must support
	 * resizing using the width (`w`), height (`h`) and crop (`crop`)
	 * query parameters.
	 */
	thumbnailUrl: string,
} ) {
	return (
		<ResponsiveImage
			alt=""
			src={props.thumbnailUrl}
			fallbackWidth={220}
			fallbackHeight={122}
			sizes={'small' === props.size ? '220px' : `
				(min-width: 1200px) 666px,
				(min-width: 768px) 346px,
				220px,
			`}
			widthRange={[ 220, 'small' === props.size ? 220 : 666 ]}
		/>
	);
}

function ArticlePortrait( props: {
	/**
	 * Determines expected size and maximum width of the image.
	 */
	size: 'small' | 'large',
	/**
	 * URL of an image in the WordPress media library. Must support
	 * resizing using the width (`w`), height (`h`) and crop (`crop`)
	 * query parameters.
	 */
	thumbnailUrl: string,
} ) {
	return (
		<ResponsiveImage
			alt=""
			src={props.thumbnailUrl}
			fallbackWidth={285}
			fallbackHeight={400}
			sizes={'small' === props.size ? '285px' : `
				(min-width: 1200px) 382px,
				285px,
			`}
			widthRange={[ 285, 'small' === props.size ? 285 : 382 ]}
		/>
	);
}

export default function FeatureCard( props: {
	/**
	 * Optional smaller text below the component title. As an example, if the component title
	 * is "The rise of employee activists," a relevant description might be "Employee
	 * activists are transforming the workplace—and making companies better in the process."
	 */
	description?: string,
	/**
	 * Whether the card is for article content; passed through to TextGroup to
	 * determine color and formatting. Defaults to `true`.
	 */
	isArticle?: boolean,
	/**
	 * Determines the orientation of the image, e.g. whether it is sized for images that are taller
	 * than they are wide.
	 */
	isPortrait?: boolean,
	/**
	 * A short phrase that accompanies the Hed. See [Kicker](/?path=/docs/kicker--default-story).
	 */
	kicker?: string,
	/**
	 * URL of an image in the WordPress media library. Must support
	 * resizing using the width (`w`), height (`h`) and crop (`crop`)
	 * query parameters.
	 */
	thumbnailUrl: string,
	/**
	 * Shows a typical "play" icon overlaid onto the component image. Use when the card represents
	 * video content.
	 */
	showPlayIcon?: boolean,
	/**
	 * Determines the size of the title text and the expected size & maximum image width of the
	 * image component.
	 */
	size: 'small' | 'medium' | 'large',
	/**
	 * Primary text, used in TextGroup as Hed. See [Hed](/?path=/docs/hed--default-story).
	 */
	title: string,
} ) {
	const {
		isArticle = true,
	} = props;
	const imageSize = 'medium' === props.size ? 'large' : props.size; // default to large resolution for medium text
	const imageMaxWidth = props.isPortrait ? `${imageSize}Portrait` : imageSize;
	return (
		<div>
			<div className={`${styles.imageContainer} ${styles[ imageMaxWidth ]}`}>
				{
					props.isPortrait && <ArticlePortrait thumbnailUrl={props.thumbnailUrl} size={imageSize} />
				}
				{
					!props.isPortrait && <ArticleImage thumbnailUrl={props.thumbnailUrl} size={imageSize} />
				}
				{
					props.showPlayIcon && (
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" className={styles.playIcon}>
							<path d="M78.936 41.951L5.918 79.073a4 4 0 01-5.813-3.565V4.829a4 4 0 015.813-3.565l73.018 37.122a2 2 0 010 3.565z" fill="#fff" fillRule="evenodd"/>
						</svg>
					)
				}
			</div>
			<TextGroup
				isArticle={isArticle}
				kicker={props.kicker}
				tagline={props.description}
				title={props.title}
				size={props.size}
			/>
		</div>
	);
}
