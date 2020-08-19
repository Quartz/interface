import React from 'react';
import PropTypes from 'prop-types';
import styles from './TabNav.scss';

const TabNav = ( { children } ) => (
	<nav className={styles.container}>
		<div className={styles[ 'scroll-container' ]}>
			<ul className={styles.tablist}>
				{children}
			</ul>
		</div>
	</nav>
);

TabNav.propTypes = {
	/**
	 * Child node to be rendered as the inner HTML of the component.
	 */
	children: PropTypes.node,
};

const TabNavItem = ( { children, isActive } ) => <li aria-current={isActive} className={styles.tab}>{children}</li>;

TabNavItem.propTypes = {
	/**
	 * Child node to be rendered as the inner HTML of the component.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * Whether this is the currently active tab. Applies
	 * `aria-current="true"`. Only one tab may be active at a time.
	 */
	isActive: PropTypes.bool.isRequired,
};

TabNavItem.defaultProps = {
	isActive: false,
};

export { TabNav, TabNavItem };
