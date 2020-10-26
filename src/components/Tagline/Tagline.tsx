import React from 'react';
import styles from './Tagline.scss';

export default function Tagline ( props: {
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
