import React from 'react';
import styles from './Kicker.scss';

export default function Kicker ( props: {
	/**
	 * The text of the kicker.
	 */
	children: React.ReactNode,
} ) {
	return (
		<div className={styles.container}>
			{props.children}
		</div>
	);
}
