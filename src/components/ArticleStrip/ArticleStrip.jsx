import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleStrip.scss';
import { ResponsiveImage } from '..';

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
				{
					kicker &&
					<span className={styles.kicker}>{kicker}</span>
				}
				<span className={styles.title}>{title}</span>
				<span className={styles.meta}>{`6 hours ago • ${edition}`}</span>
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
};

export default ArticleStrip;
