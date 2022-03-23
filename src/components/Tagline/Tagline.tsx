import React from 'react';
import styles from './Tagline.scss';

type TaglineProps = {
	/**
	 * The text of the tagline.
	 */
	children: React.ReactNode,
	/**
	 * Determines the font size.
	 */
	size?: 'small' | 'large',
}

export default function Tagline (  { children, size = 'small' }: TaglineProps ) {
	return (
		<div className={`${styles.container} ${styles[size]}`}>
			{children}
		</div>
	);
}
