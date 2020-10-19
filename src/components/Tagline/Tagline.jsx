import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tagline.scss';

function Tagline ( {
	children,
} ) {
	return (
		<div className={styles.container}>
			{children}
		</div>
	);
}

Tagline.propTypes = {
	/**
	 * The text of the kicker.
	 */
	children: PropTypes.node.isRequired,
};

export default Tagline;
