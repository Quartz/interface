import React from 'react';
import PropTypes from 'prop-types';
import Hed from '../Hed/Hed';
import Kicker from '../Kicker/Kicker';
import Tagline from '../Tagline/Tagline';
import styles from './TextGroup.scss';

function TextGroup ( {
	kicker,
	tagline,
	title,
	type,
} ) {
	return (
		<>
			{
				kicker &&
					<Kicker>
						<div className={`${styles.kicker} ${styles[ `kicker-${type}` ]}`}>{kicker}</div>
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

	/**
	 * The type of the text group, which influences color and other formatting.
	 */
	type: PropTypes.oneOf( [ 'article', 'default' ] ),
};

TextGroup.defaultProps = {
	type: 'default',
};

export default TextGroup;
