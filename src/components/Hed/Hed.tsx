import React from 'react';
import styles from './Hed.scss';

export default function Hed ( props: {
	/**
	 * The text of the headline.
	 */
	children: React.ReactNode,

	/**
	 * The size of the headline.
	 */
	size: 'small' | 'medium' | 'large' | 'extra-large',
} ) {
	return (
		<div className={`${styles.container} ${styles[ props.size ]}`}>
			{props.children}
		</div>
	);
}
