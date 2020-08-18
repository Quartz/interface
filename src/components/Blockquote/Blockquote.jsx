import React from 'react';
import PropTypes from 'prop-types';
import styles from './Blockquote.scss';

function Blockquote( { children, innerHtml } ) {
	return (
		<blockquote
			className={styles.blockquote}
			dangerouslySetInnerHTML={{ __html: innerHtml }}
		>
			{children}
		</blockquote>
	);
};

Blockquote.propTypes = {
	/**
	 * Child nodes to be rendered as the inner content of the blockquote.
	 */
	children: PropTypes.node,
	/**
	 * Html from a WP content block to be rendered as the inner content of the blockquote.
	 */
	innerHtml: PropTypes.string,
};

export default Blockquote;
