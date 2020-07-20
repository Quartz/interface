import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind( styles );

const Checkbox = ( {
	ariaDescribedBy,
	ariaLabel,
	ariaLabelledBy,
	checked,
	children,
	disabled,
	id,
	invalid,
	onChange,
	required,
	size,
} ) => (
	<label className={cx( 'container' )}>
		<input
			aria-describedby={ariaDescribedBy}
			aria-invalid={invalid}
			aria-label={ariaLabel}
			aria-labelledby={ariaLabelledBy}
			checked={checked}
			className={cx( 'input', size )}
			disabled={disabled}
			id={id}
			onChange={onChange}
			required={required}
			type="checkbox"
		/>
		{children && <span className={cx( 'label' )}>{children}</span>}
	</label>
);

Checkbox.propTypes = {
	ariaDescribedBy: PropTypes.string,
	ariaLabel: PropTypes.string,
	ariaLabelledBy: PropTypes.string,
	checked: PropTypes.bool,
	children: PropTypes.node,
	disabled: PropTypes.bool.isRequired,
	id: PropTypes.string,
	invalid: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	required: PropTypes.bool.isRequired,
	size: PropTypes.oneOf( [ 'small', 'large' ] ),
};

Checkbox.defaultProps = {
	disabled: false,
	invalid: false,
	required: false,
	size: 'small',
};

export default Checkbox;
