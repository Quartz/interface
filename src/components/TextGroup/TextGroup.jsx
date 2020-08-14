import React from 'react';
import PropTypes from 'prop-types';
import Hed from '../Hed/Hed';
import Kicker from '../Kicker/Kicker';
import Tagline from '../Tagline/Tagline';
import styles from './TextGroup.scss';

function TextGroup ( {
	isArticle,
	kicker,
	tagline,
	title,
} ) {
	return (
		<>
			{
				kicker &&
					<Kicker>
						<div className={`${styles.kicker} ${isArticle ? styles.isArticle : ''}`}>{kicker}</div>
					</Kicker>
			}
			<Hed size="small">{title}</Hed>
			{
				tagline &&
					<Tagline>
						<div className={styles.tagline}>{tagline}</div>
					</Tagline>
			}
		</>
	);
};

TextGroup.propTypes = {
	/**
	 * Whether this text group represents an article, which influences color and
	 * other formatting.
	 */
	isArticle: PropTypes.bool.isRequired,

	/**
	 * Kicker text. This accepts a string or a node—most notably to accommodate
	 * bulletins, which have multicolor kickers and sometimes incorporate images.
	 */
	kicker: PropTypes.node,

	/**
	 * Tagline to appear beneath the title.
	 */
	tagline: PropTypes.string,

	/**
	 * Title.
	 */
	title: PropTypes.string.isRequired,
};

TextGroup.defaultProps = {
	isArticle: false,
};

export default TextGroup;
