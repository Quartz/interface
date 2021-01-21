import React, { Fragment, useEffect, useState } from 'react';
import styles from './Spinner.scss';

const timeoutIntervalMs = 10000;

const Spinner = ( props: {
	/**
	 * Whether to display a timeout message to the user after a number of seconds have elapsed.
	 */
	timeout?: boolean,
} ) => {
	const { timeout } = props;
	const [ showTimeout, setShowTimeout ] = useState( false );
	useEffect( () => {
		let timeoutTimer;

		if ( timeout ) {
			setTimeout( () => setShowTimeout( true ), timeoutIntervalMs );
		}

		return () => clearTimeout( timeoutTimer );
	}, [ timeout ] );

	return (
		<Fragment>
			<div className={styles.container}>
				<span className={styles.label}>Loading...</span>
			</div>
			{
				showTimeout &&
				<p className={styles.timeoutMessage}>This seems to be taking longer than usual. You might want to try <button className={styles.reload} onClick={() => window.location.reload()}>reloading the page</button>.</p>
			}
		</Fragment>
	);
};

export default Spinner;
