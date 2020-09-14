import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pill.scss';

function Pill ( {
	text,
} ) {
	return <span className={styles.container}>{text}</span>;
}

Pill.propTypes = {
	/**
	 * String to be rendered inside the pill.
	 */
	text: PropTypes.string.isRequired,
};

export default Pill;
