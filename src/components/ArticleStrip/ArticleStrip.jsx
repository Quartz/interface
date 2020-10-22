import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleStrip.scss';
import { ResponsiveImage, TextGroup } from '..';

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
					tagline={`6 hours ago • ${edition}`}
				/>
			</div>
		</div>
	);
}

ArticleStrip.propTypes = {
	dateGmt: PropTypes.string.isRequired,
	edition: PropTypes.string.isRequired,
	kicker: PropTypes.string,
	size: PropTypes.oneOf( [ 'small', 'large' ] ),
	thumbnailUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

ArticleStrip.defaultProps = {
	edition: 'Quartz',
	size: 'small',
};

export default ArticleStrip;
