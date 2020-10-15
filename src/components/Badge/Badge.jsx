import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import styles from './Badge.scss';

const sizeToPx = {
	'extra-large': 82,
	large: 64,
	medium: 50,
	small: 40,
};

function Badge ( {
	alt,
	imageUrl,
	size,
} ) {
	// Convert size prop to image dimension. All badges are (rounded) squares.
	const px = sizeToPx[ size ];

	return (
		<div className={`${styles.container} ${styles[ size ]}`}>
			<ResponsiveImage
				alt={alt}
				aspectRatio={1}
				fallbackWidth={px}
				src={imageUrl}
			/>
		</div>
	);
}

Badge.propTypes = {
	/**
	 * Alternative text to describe the image for screen readers or in situations
	 * where the image cannot be loaded. This prop is required but under certain
	 * circumstances an empty string is preferred.
	 */
	alt: PropTypes.string.isRequired,

	/**
	 * The image URL. Any existing query parameters are stripped and it will be
	 * resized and cropped automatically.
	 */
	imageUrl: PropTypes.string.isRequired,

	/**
	 * The size of the badge.
	 */
	size: PropTypes.oneOf( [
		'small',
		'medium',
		'large',
		'extra-large',
	] ).isRequired,
};

Badge.defaultProps = {
	size: 'medium',
};

export default Badge;
