import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.scss';
import { resizeImage as resizeWPImage, arrayFromRange } from '@quartz/js-utils';

function ImageAmp ( {
	alt,
	height,
	sizes,
	src,
	srcSet,
	title,
	width,
} ) {
	return (
		<amp-img
			alt={alt}
			height="1"
			layout="responsive"
			sizes={sizes}
			src={src}
			srcSet={srcSet}
			title={title}
			width={width / height}
		/>
	);
};

ImageAmp.propTypes = {
	alt: PropTypes.string.isRequired,
	height: PropTypes.number.isRequired,
	sizes: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	srcSet: PropTypes.string.isRequired,
	title: PropTypes.string,
	width: PropTypes.number.isRequired,
};

function Image ( {
	alt,
	amp,
	fallbackHeight: height,
	fallbackWidth: width,
	loading,
	sizes,
	src,
	srcSet,
	title,
} ) {
	if ( amp ) {
		return (
			<ImageAmp
				alt={alt}
				height={1}
				sizes={sizes}
				src={src}
				srcSet={srcSet}
				title={title}
				width={width / height}
			/>
		);
	}

	return (
		<img
			alt={alt}
			className={styles.image}
			decoding="async"
			height={height}
			loading={loading}
			sizes={sizes}
			src={src}
			srcSet={srcSet}
			title={title}
			width={width}
		/>
	);
};

Image.propTypes = {
	/**
	 * Alternative text to describe the image for screen readers or in situations
	 * where the image cannot be loaded. This prop is required but under certain
	 * circumstances an empty string is preferred.
	 */
	alt: PropTypes.string.isRequired,

	/**
	 * Whether to render the AMP version of the image.
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
	 * How and when the image should be loaded. See
	 * [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) for
	 * details on allowed values and their behavior.
	 */
	loading: PropTypes.oneOf( [ 'auto', 'eager', 'lazy' ] ).isRequired,

	/**
	 * The responsize `img` sizes attribute.
	 */
	sizes: PropTypes.string,

	/**
	 * The fallback `img` src attribute.
	 */
	src: PropTypes.string.isRequired,

	/**
	 * The responsive `img` srcset attribute.
	 */
	srcSet: PropTypes.string,

	/**
	 * The `img` title attribute.
	 */
	title: PropTypes.string,
};

Image.defaultProps = {
	amp: false,
	loading: 'lazy',
};

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
	 * Height over width. E.g. an aspectRatio of 2 is twice as tall as it
	 * is wide. Used to calculate the height of the image based on its
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

export {
	Image as default,
	WPResponsiveImage,
};
