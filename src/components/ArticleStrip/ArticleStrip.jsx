import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleStrip.scss';
import { ResponsiveImage, TextGroup } from '..';
import { stylizedTimestamp } from '@quartz/js-utils';

const responsiveImagePropsMapping = {
	small: {
		fallbackWidth: 80,
		fallbackHeight: 80,
		sizes: '80px',
		widthRange: [ 80, 80 ],
	},
	large: {
		fallbackWidth: 220,
		fallbackHeight: 220,
		sizes: `
			(min-width: 1200px) 220px,
			(min-width: 768px) 175px,
			80px
		`,
		widthRange: [ 80, 220 ],
	},
};

const textGroupSizeMapping = {
	small: 'small',
	large: 'extra-large',
};

function ArticleStrip ( {
	dateGmt,
	edition,
	kicker,
	size,
	thumbnailUrl,
	title,
} ) {
	return (
		<div className={`${styles.container} ${styles[ size ]}`}>
			<div className={`${styles.thumbnailContainer} ${styles[ size ]}`}>
				<ResponsiveImage
					alt=""
					src={thumbnailUrl}
					{...responsiveImagePropsMapping[ size ]}
				/>
			</div>
			<div>
				<TextGroup
					isArticle={true}
					kicker={kicker}
					size={textGroupSizeMapping[ size ]}
					title={title}
					tagline={`${stylizedTimestamp( dateGmt )} • ${edition}`}
				/>
			</div>
		</div>
	);
}

ArticleStrip.propTypes = {
	/**
	 * A string-based representation of the article publish datetime at
	 * the Greenwich Mean Time (GMT-00:00:00). E.g.,
	 * `'2012-09-04T17:02:10'`.
	*/
	dateGmt: PropTypes.string.isRequired,

	/**
	 * The Quartz edition to which the article belongs.
	 */
	edition: PropTypes.oneOf( [
		'Quartz',
		'Quartz Africa',
		'Quartz India',
		'Quartz at Work',
	] ).isRequired,

	/**
	 * A short phrase that accompanies the hed. See [Kicker](/?path=/docs/kicker--default-story).
	 */
	kicker: PropTypes.string,

	/**
	 * The size of the component. Adjusts the thumbnail dimensions and
	 * [TextGroup](/?path=/docs/textgroup--default-story) size used.
	 */
	size: PropTypes.oneOf( [ 'small', 'large' ] ),

	/**
	 * URL of the thumbnail image from our WordPress media library.
	 */
	thumbnailUrl: PropTypes.string.isRequired,

	/**
	 * The article headline. See [Hed](/?path=/docs/hed--default-story)
	 */
	title: PropTypes.string.isRequired,
};

ArticleStrip.defaultProps = {
	edition: 'Quartz',
	size: 'small',
};

export default ArticleStrip;
