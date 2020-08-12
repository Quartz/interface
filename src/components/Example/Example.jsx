import React from 'react';
import PropTypes from 'prop-types';
import styles from './Example.scss';

function Example ( {
	text,
} ) {
	return <div className={styles.container}>{text}</div>;
}

Example.propTypes = {
	/**
	 * Child node to be rendered as the inner HTML of the component.
	 */
	children: PropTypes.node.isRequired,
};

Example.defaultProps = {
	children: 'Hello, world!',
};

export default Example;
