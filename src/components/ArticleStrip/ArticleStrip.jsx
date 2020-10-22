import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleStrip.scss';
import { ResponsiveImage, TextGroup } from '..';

function ArticleStrip ( {
	dateGmt,
	edition,
	kicker,
	size,
	thumbnailUrl,
	title,
} ) {

	return (
		<div className={styles.container}>
			<div className={styles.thumbnailContainer}>
				<ResponsiveImage
					alt=""
					fallbackWidth={80}
					fallbackHeight={80}
					sizes="80px"
					src={thumbnailUrl}
					widthRange={[ 80, 80 ]}
				/>
			</div>
			<div>
				<TextGroup
					isArticle={true}
					kicker={kicker}
					size={size}
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
