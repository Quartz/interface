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
	 * Text
	 */
	text: PropTypes.string.isRequired,
};

Example.defaultProps = {
	text: 'Hello, world!',
};

export default Example;
