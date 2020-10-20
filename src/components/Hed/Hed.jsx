import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hed.scss';

function Hed ( {
	children,
	size,
} ) {
	return (
		<div className={`${styles.container} ${styles[ size ]}`}>
			{children}
		</div>
	);
}

Hed.propTypes = {
	/**
	 * The text of the headline.
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The size of the headline.
	 */
	size: PropTypes.oneOf( [ 'small', 'medium', 'large' ] ).isRequired,
};

Hed.defaultProps = {
	size: 'large',
};

export default Hed;
