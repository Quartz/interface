import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '..';
import { arrayFromRange, resizeWPImage } from '@quartz/js-utils';

function ResponsiveImage( {
	alt,
	amp,
	fallbackHeight,
	fallbackWidth,
	sizes,
	src,
	widthRange,
} ) {
	const [ minWidth, maxWidth ] = widthRange;
	// Create an array of src widths based on the provided range
	// Double the largest width to account for higher pixel density displays
	const srcWidths = arrayFromRange( minWidth, maxWidth * 2, 100 );

	// Calculate the aspect ratio so we can set the correct height for
	// each source based on its width.
	const aspectRatio = fallbackHeight / fallbackWidth;

	// Map source widths to image URLs
	const srcSet = srcWidths
		.map( width => `${resizeWPImage( src, width, aspectRatio * width, true )} ${width}w` )
		.join();

	// If no `sizes` prop was specified, assume the image has a fixed width
	const sizesDefault = `${fallbackWidth}px`;

	return (
		<Image
			alt={alt}
			amp={amp}
			sizes={sizes || sizesDefault}
			src={resizeWPImage( src, fallbackWidth, fallbackHeight )}
			srcSet={srcSet}
			fallbackWidth={fallbackWidth}
			fallbackHeight={fallbackHeight}
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
	 * Whether to render the AMP version of the image. See
	 * https://amp.dev/documentation/components/amp-img/
	 */
	amp: PropTypes.bool.isRequired,

	/**
	 * The rendered height of the image when CSS cannot be loaded or in very old
	 * browsers. With `fallbackWidth`, it sets the aspect ratio for the image.
	 * Therefore, it's critical to provide an accurate value. A good practice is
	 * to set this at the largest size at which this image can be rendered.
	 */
	fallbackHeight: PropTypes.number.isRequired,

	/**
	 * The rendered width of the image when CSS cannot be loaded or in very old
	 * browsers. See `fallbackHeight`.
	 */
	fallbackWidth: PropTypes.number.isRequired,

	/**
	 * Desribes the width of the image slot to the browser. This can be
	 * as simple as a pixel-based value (for an image slot that will have
	 * a fixed width), or as complicated as a comma-separated list of
	 * media conditions mapped to image slot widths.
	 *
	 * By default, `sizes` will be derived from the `fallbackWidth`,
	 * which tells the browser the image slot will always have a fixed
	 * width.
	 *
	 * Forwarded to the HTML image element verbatim.
	 */
	sizes: PropTypes.string,

	/**
	 * URL of an image in the WordPress media library. Must support
	 * resizing using the width (`w`), height (`h`) and crop (`crop`)
	 * query parameters.
	 */
	src: PropTypes.string.isRequired,

	/**
	 * Array containing two values: the smallest and the largest widths
	 * at which the image is expected to be rendered, e.g. `[ 100, 200 ]`.
	 *
	 * For fixed-dimension images, pass the same value for the minimum
	 * and maximum values, e.g. `[ 100, 100 ]`.
	 */
	widthRange: PropTypes.arrayOf( PropTypes.number ).isRequired,
};

ResponsiveImage.defaultProps = {
	amp: false,
};

export default ResponsiveImage;
