import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './RadioButton.scss';

const cx = classnames.bind( styles );

const RadioButton = ( {
	checked,
	children,
	disabled,
	display,
	name,
	onChange,
	required,
} ) => (
	<label className={cx( 'container', display )}>
		<input
			checked={checked}
			className={cx( 'input' )}
			disabled={disabled}
			name={name}
			onChange={onChange}
			required={required}
			type="radio"
		/>
		{children}
	</label>
);

RadioButton.propTypes = {
	checked: PropTypes.bool,
	children: PropTypes.node,
	disabled: PropTypes.bool.isRequired,
	display: PropTypes.oneOf( [ 'block', 'inline' ] ),
	name: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
	] ),
	onChange: PropTypes.func,
	required: PropTypes.bool.isRequired,
};

RadioButton.defaultProps = {
	disabled: false,
	display: 'inline',
	required: false,
};

export default RadioButton;
