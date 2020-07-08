import React from 'react';
import styles from './Spinner.scss';

const Spinner = () => (
	<div className={styles.container}>
		<span className={styles.label}>Loading...</span>
	</div>
);

export default Spinner;
