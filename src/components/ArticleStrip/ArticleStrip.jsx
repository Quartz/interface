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
	'extra-large': {
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

function SponsoredBy( { sponsor } ) {
	return <span className={styles.sponsoredBy}>Sponsor content <span className={styles.sponsor}>{`by ${sponsor}`}</span></span>;
}

SponsoredBy.propTypes = {
	sponsor: PropTypes.string.isRequired,
};

function ArticleStrip ( {
	dateGmt,
	edition,
	kicker,
	size,
	sponsor,
	thumbnailUrl,
	title,
} ) {
	return (
		<div className={`${styles.container} ${styles[ size ]}`}>
			{
				thumbnailUrl &&
				<div className={`${styles.thumbnailContainer} ${styles[ size ]}`}>
					<ResponsiveImage
						alt=""
						src={thumbnailUrl}
						{...responsiveImagePropsMapping[ size ]}
					/>
				</div>
			}
			<div>
				<TextGroup
					isArticle={true}
					kicker={sponsor ? <SponsoredBy sponsor={sponsor} /> : kicker}
					size={size}
					title={title}
					tagline={! sponsor && `${stylizedTimestamp( dateGmt )} • ${edition}`}
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
	dateGmt: PropTypes.string,

	/**
	 * The Quartz edition to which the article belongs.
	 */
	edition: PropTypes.oneOf( [
		'Quartz',
		'Quartz Africa',
		'Quartz India',
		'Quartz at Work',
	] ),

	/**
	 * A short phrase that accompanies the hed. See [Kicker](/?path=/docs/kicker--default-story).
	 */
	kicker: PropTypes.string,

	/**
	 * The size of the component. Adjusts the thumbnail dimensions and
	 * [TextGroup](/?path=/docs/textgroup--default-story) size used.
	 */
	size: PropTypes.oneOf( [ 'small', 'extra-large' ] ),

	/**
	 * If this is a 'bulletin' type article, passing in the name of the
	 * company sponsoring the article will display a 'Sponsored by'
	 * message instead of a kicker, even if a kicker is also provided.
	 * A sponsored article will also not display an edition or timestamp.
	 */
	sponsor: PropTypes.string,

	/**
	 * URL of the thumbnail image from our WordPress media library.
	 */
	thumbnailUrl: PropTypes.string,

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
