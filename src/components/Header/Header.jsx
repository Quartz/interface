import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Header.scss';

const cx = classnames.bind( styles );

const Header = ( { border, children, intro, title } ) => (
	<div className={cx( 'container', { border } )}>
		<div className={cx( 'contents' )}>
			<h1 className={cx( 'title' )}>{title}</h1>
			<p className={cx( 'intro' )}>{intro}</p>
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
