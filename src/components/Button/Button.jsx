import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Button.scss';
import Spinner from 'components/Spinner/Spinner';
import Link from 'components/Link/Link';

const cx = classnames.bind( styles );

const Button = ( {
	checked,
	children,
	describedBy,
	disabled,
	inactive,
	loading,
	on,
	onClick,
	role,
	type,
	variant,
} ) => (
	<button
		aria-checked={checked}
		aria-describedby={describedBy}
		className={cx(
			`variant-${variant}`,
			{
				inactive: inactive || disabled,
				loading,
			}
		)}
		disabled={disabled || loading}
		on={on}
		onClick={onClick}
		role={role}
		type={type}
	>
		{
			loading
				? <Spinner />
				: <span className={cx( 'label' )}>{children}</span>
		}
	</button>
);

Button.propTypes = {
	checked: PropTypes.bool,
	children: PropTypes.node.isRequired,
	describedBy: PropTypes.string,
	disabled: PropTypes.bool.isRequired,
	inactive: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
	on: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	role: PropTypes.oneOf( [
		'checkbox',
		'link',
		'menuitem',
		'menuitemcheckbox',
		'menuitemradio',
		'option',
		'radio',
		'switch',
		'tab',
	] ),
	type: PropTypes.oneOf( [ 'submit', 'button' ] ).isRequired,
	variant: PropTypes.oneOf( [
		'inline',
		'primary',
		'secondary',
		'transparent',
		'warning-inline',
		'warning',
	] ).isRequired,
};

Button.defaultProps = {
	checked: false,
	disabled: false,
	inactive: false,
	loading: false,
	onClick: () => {},
	type: 'button',
	variant: 'primary',
};

const ButtonLink = ( { children, variant, ...props } ) => <Link className={cx( `variant-${variant}` )} {...props}>{children}</Link>;

ButtonLink.propTypes = {
	children: PropTypes.node.isRequired,
	variant: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
	variant: 'primary',
};

export { ButtonLink };
export default Button;
