import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pill.scss';

function Pill ( {
	children,
} ) {
	return <span className={styles.container}>{children}</span>;
}

Pill.propTypes = {
	/**
	 * String or node to be rendered inside the pill.
	 */
	children: PropTypes.node.isRequired,
};

export default Pill;
