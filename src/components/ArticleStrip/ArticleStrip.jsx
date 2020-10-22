import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleStrip.scss';
import { Image } from '..';

function ArticleStrip ( {
	dateGmt,
	edition,
	kicker,
	size,
	thumbnail,
	title,
} ) {
	const { altText, sourceUrl } = thumbnail || {};

	return (
		<div className={styles.container}>
			<div className={styles.thumbnail}>
				<Image alt={altText} src={sourceUrl} />
			</div>
			<span className={styles.kicker}>{kicker}</span>
			<span className={styles.title}>{title}</span>
			<span className={styles.meta}>{`6 hours ago • ${edition}`}</span>
		</div>
	);
}

ArticleStrip.propTypes = {
	dateGmt: PropTypes.string.isRequired,
	edition: PropTypes.string.isRequired,
	kicker: PropTypes.string.isRequired,
	thumbnail: PropTypes.shape( {
		altText: PropTypes.string.isRequired,
		sourceUrl: PropTypes.string.isRequired,
	} ).isRequired,
	title: PropTypes.string.isRequired,
};

export default ArticleStrip;
