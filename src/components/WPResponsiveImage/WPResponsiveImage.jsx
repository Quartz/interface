import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '..';
import { arrayFromRange, resizeWPImage } from '@quartz/js-utils';

function WPResponsiveImage( {
	alt,
	aspectRatio,
	fallbackWidth,
	src,
	widthRange,
} ) {
	const [ min, max ] = widthRange;
	// Create an array of src widths based on the provided range
	// Double the largest width to account for higher pixel density displays
	const srcWidths = arrayFromRange( min, max * 2, 100 );

	// Map source widths to image URLs
	const srcSet = srcWidths
		.map( width => `${resizeWPImage( src, width, width * aspectRatio )} ${width}w` )
		.join();

	return (
		<Image
			alt={alt}
			src={resizeWPImage( src, fallbackWidth, fallbackWidth * aspectRatio )}
			srcSet={srcSet}
			fallbackWidth={fallbackWidth}
			fallbackHeight={fallbackWidth * aspectRatio}
		/>
	);
}

WPResponsiveImage.propTypes = {
	/**
	 * Alternative text to describe the image for screen readers or in situations
	 * where the image cannot be loaded. This prop is required but under certain
	 * circumstances an empty string is preferred.
	 */
	alt: PropTypes.string.isRequired,

	/**
	 * Height over width. E.g. an `aspectRatio`` of 2 is twice as tall as
	 * it is wide. Used to calculate the height of the image based on its
	 * width.
	 */
	aspectRatio: PropTypes.number.isRequired,

	/**
	 * The rendered width of the image when CSS cannot be loaded or in very old
	 * browsers. Also used as the width of the src image.
	 */
	fallbackWidth: PropTypes.number.isRequired,

	/**
	 * URL of an image in the WordPress media library. Must support
	 * resizing using the width (`w``), height (`h``) and crop (`crop`)
	 * query parameters.
	 */
	src: PropTypes.string.isRequired,

	/**
	 * Array containing two values: the smallest and the largest widths
	 * at which the image is expected to be rendered, e.g. [ 100, 200 ].
	 */
	widthRange: PropTypes.arrayOf( PropTypes.number ).isRequired,
};

export default WPResponsiveImage;
