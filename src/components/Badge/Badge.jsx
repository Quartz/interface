import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import styles from './Badge.scss';

/**
 * Resize an image from our media library (powered by Photon).
 * TODO: Export this from a utils library.
 *
 * @param  {string} url
 * @param  {int}    width
 * @param  {int}    height
 * @param  {bool}   crop
 * @param  {int}    quality
 * @return {string}
 */
const resizeImage = ( url, width, height, crop = false, quality = 75 ) => {
	const { origin, pathname } = new URL( url );

	let resizedUrl = `${origin}${pathname}?quality=${quality}&strip=all`;

	if ( width ) {
		resizedUrl += `&w=${width}`;
	}

	if ( height ) {
		resizedUrl += `&h=${height}`;
	}

	if ( crop ) {
		resizedUrl += '&crop=1';
	}

	return resizedUrl;
};

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

	// Create an srcSet for 1x, 2x and 3x resolution.
	const sizes = `${px}w`;
	const srcSet = [ 1, 2, 3 ].map( resolution => `${resizeImage( imageUrl, px * resolution, px * resolution, true )} ${resolution}x` ).join( ', ' );
	const src = resizeImage( imageUrl, px, px, true );

	return (
		<figure className={`${styles.container} ${styles[ size ]}`}>
			<Image
				alt={alt}
				fallbackHeight={px}
				fallbackWidth={px}
				sizes={sizes}
				src={src}
				srcSet={srcSet}
			/>
		</figure>
	);
};

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
