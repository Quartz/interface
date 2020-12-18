import React from 'react';
import styles from './Example.scss';

export default function Example ( props: {
	/**
	 * Child node to be rendered as the inner HTML of the component.
	 */
	children: React.ReactNode,
} ) {
	const { children = 'Hello, world!' } = props;

	return <div className={styles.container}>{children}</div>;
}
