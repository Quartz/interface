import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.scss';

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
}

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
	sizes: PropTypes.string.isRequired,

	/**
	 * The fallback `img` src attribute.
	 */
	src: PropTypes.string.isRequired,

	/**
	 * The response `img` srcSet attribute.
	 */
	srcSet: PropTypes.string.isRequired,

	/**
	 * The `img` title attribute.
	 */
	title: PropTypes.string,
};

Image.defaultProps = {
	amp: false,
	loading: 'lazy',
};

export default Image;
