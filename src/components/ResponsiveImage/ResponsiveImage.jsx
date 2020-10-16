import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '..';
import { arrayFromRange, resizeWPImage } from '@quartz/js-utils';

function ResponsiveImage( {
	alt,
	aspectRatio,
	sizes,
	src,
	widthRange,
} ) {
	const [ minWidth, maxWidth ] = widthRange;
	// Create an array of src widths based on the provided range
	// Double the largest width to account for higher pixel density displays
	const srcWidths = arrayFromRange( minWidth, maxWidth * 2, 100 );

	// Map source widths to image URLs
	const srcSet = srcWidths
		.map( width => `${resizeWPImage( src, width, aspectRatio ? Math.round( width * aspectRatio ) : null, typeof aspectRatio !== 'undefined' )} ${width}w` )
		.join();

	// Make a sensible default for sizes if none was provided. Here we
	// saying that as long as the viewport is smaller than the maximum
	// image size, the size of the image slot will be 100% of the
	// viewport. Above that, the image slot will have a fixed pixel value.
	const sizesDefault = `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`;

	return (
		<Image
			alt={alt}
			sizes={sizes || sizesDefault}
			src={resizeWPImage( src, maxWidth, maxWidth * aspectRatio )}
			srcSet={srcSet}
			fallbackWidth={maxWidth}
			fallbackHeight={maxWidth * aspectRatio}
		/>
	);
}

ResponsiveImage.propTypes = {
	/**
	 * Alternative text to describe the image for screen readers or in situations
	 * where the image cannot be loaded. This prop is required but under certain
	 * circumstances an empty string is preferred.
	 */
	alt: PropTypes.string.isRequired,

	/**
	 * Height over width. E.g. an `aspectRatio` of 2 is twice as tall as
	 * it is wide. If provided, used to calculate the height of the
	 * cropped based on its width. If undefined, the image will not be
	 * cropped.
	 */
	aspectRatio: PropTypes.number,

	/**
	 * Desribes the width of the image slot to the browser. This can be
	 * as simple as a pixel-based value (for an image slot that will have
	 * a fixed width), or as complicated as a comma-separated list of
	 * media conditions mapped to image slot widths.
	 *
	 * By default, this prop will be derived from the maximum image size:
	 * `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`. This tells the
	 * browser that the image slot will be 100% of the viewport until the
	 * viewport is larger than the maximum image size, at which point the
	 * image slot will remain at a fixed value.
	 *
	 * Forwarded to the HTML image element verbatim.
	 */
	sizes: PropTypes.string,

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

export default ResponsiveImage;
