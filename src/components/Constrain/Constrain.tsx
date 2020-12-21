import React from 'react';
import styles from './Constrain.scss';

export default function Constrain ( props: {
	/**
	 * Children that will be constrained by the container.
	 */
	children: React.ReactNode,

	/**
	 * The size of the constrained container.
	 */
	size: 'small' | 'medium' | 'large' | 'extra-large',
} ) {
	return (
		<div className={`${styles.container} ${styles[ props.size ]}`}>
			{props.children}
		</div>
	);
}
