import React from 'react';
import PropTypes from 'prop-types';
import styles from './InlineWrapper.scss';

const InlineWrapper = ( { children } ) => (
	<div className={styles.container}>
		{children}
	</div>
);

InlineWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default InlineWrapper;
