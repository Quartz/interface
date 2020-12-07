import React from 'react';
import styles from './Hed.scss';

export default function Hed ( props: {
	/**
	 * The tag to use to render the headline. Default `div`.
	 */
	as?: 'div' | 'h1' | 'h2' | 'h3',

	/**
	 * The text of the headline.
	 */
	children: React.ReactNode,

	/**
	 * The size of the headline.
	 */
	size: 'small' | 'medium' | 'large' | 'extra-large',
} ) {
	const { as: Tag = 'div' } = props;

	return (
		<Tag className={`${styles.container} ${styles[ props.size ]}`}>
			{props.children}
		</Tag>
	);
}
