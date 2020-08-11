import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kicker.scss';

function Kicker ( {
	children,
	type,
} ) {
	return (
		<div className={`${styles.container} ${styles[ type ]}`}>
			{children}
		</div>
	);
};

Kicker.propTypes = {
	/**
	 * The text of the kicker.
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The kicker type, which influences color and other formatting.
	 */
	type: PropTypes.oneOf( [ 'article', 'bulletin', 'default' ] ),
};

Kicker.defaultProps = {
	type: 'default',
};

export default Kicker;

