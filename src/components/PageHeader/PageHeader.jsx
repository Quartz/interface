import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageHeader.scss';

const PageHeader = ( { border, children, intro, title } ) => (
	<div className={`${styles.container} ${border ? styles.border : ''}`}>
		<div className={styles.contents}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.intro}>{intro}</p>
		</div>
		{children}
	</div>
);

PageHeader.propTypes = {
	border: PropTypes.bool.isRequired,
	children: PropTypes.node,
	intro: PropTypes.string,
	title: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
	border: true,
};

export default PageHeader;
