import React from 'react';
import PropTypes from 'prop-types';
import styles from './Image.scss';

function ImageAmp ( {
	alt,
	className,
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
			className={className}
			height="1"
			layout="responsive"
			sizes={sizes}
			src={src}
			srcSet={srcSet}
			title={title}
			width={width / height}
		/>
	);
}

ImageAmp.propTypes = {
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	height: PropTypes.number.isRequired,
	sizes: PropTypes.string,
	src: PropTypes.string.isRequired,
	srcSet: PropTypes.string,
	title: PropTypes.string,
	width: PropTypes.number.isRequired,
};

function Image ( {
	alt,
	amp,
	className,
	fallbackHeight: height,
	fallbackWidth: width,
	loading,
	sizes,
	src,
	srcSet,
	title,
} ) {
	const classes = `${styles.image} ${className}`;

	if ( amp ) {
		return (
			<ImageAmp
				alt={alt}
				className={classes}
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
			className={classes}
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
	 * Whether to render the AMP version of the image. See
	 * https://amp.dev/documentation/components/amp-img/
	 */
	amp: PropTypes.bool.isRequired,

	/**
		* Passed verbatim to element as class attribute.
		*/
	className: PropTypes.string,

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
	 * The response `img` srcSet attribute.
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

export default Image;
