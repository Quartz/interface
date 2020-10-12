import React from 'react';
import PropTypes from 'prop-types';
import styles from './Blockquote.scss';

function Blockquote( { children } ) {
	return (
		<blockquote className={styles.blockquote}>{children}</blockquote>
	);
}

Blockquote.propTypes = {
	/**
	 * Child nodes to be rendered as the inner content of the blockquote.
	 */
	children: PropTypes.node,
};

export default Blockquote;
