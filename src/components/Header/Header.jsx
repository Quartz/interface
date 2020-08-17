import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

const Header = ( { border, children, intro, title } ) => (
	<div className={`${styles.container} ${border ? styles.border : ''}`}>
		<div className={styles.contents}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.intro}>{intro}</p>
		</div>
		{children}
	</div>
);

Header.propTypes = {
	border: PropTypes.bool,
	children: PropTypes.node,
	intro: PropTypes.string,
	title: PropTypes.string.isRequired,
};

Header.defaultProps = {
	border: true,
};

export default Header;
