import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kicker.scss';

function Kicker ( {
	children,
} ) {
	return (
		<div className={styles.container}>
			{children}
		</div>
	);
};

Kicker.propTypes = {
	/**
	 * The text of the kicker.
	 */
	children: PropTypes.node.isRequired,
};

export default Kicker;

