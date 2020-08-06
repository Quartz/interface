import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalloutCard.scss';

const CalloutCard = ( { children } ) => (
	<div className={styles.container}>
		{children}
	</div>
);

CalloutCard.propTypes = {
	children: PropTypes.node.isRequired,
};

export default CalloutCard;
