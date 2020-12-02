import React from 'react';
import styles from './TabNav.scss';

function TabNav ( props: {
	/**
	 * Child node to be rendered as the inner HTML of the component.
	 */
	children: React.ReactNode,
} ) {
	return (
		<nav className={styles.container}>
			<div className={styles[ 'scroll-container' ]}>
				<ul className={styles.tablist}>
					{props.children}
				</ul>
			</div>
		</nav>
	);
}

function TabNavItem ( props: {
	/**
	 * Child node to be rendered as the inner HTML of the component.
	 */
	children: React.ReactNode,

	/**
	 * Whether this is the currently active tab. Applies
	 * `aria-current="true"`. Only one tab may be active at a time.
	 */
	isActive: boolean,
} ) {
	return <li aria-current={props.isActive} className={styles.tab}>{props.children}</li>;
}

export { TabNav, TabNavItem };
