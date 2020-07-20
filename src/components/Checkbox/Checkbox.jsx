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
	handleChange,
	id,
	invalid,
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
			id={id}
			onChange={handleChange}
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
	handleChange: PropTypes.func.isRequired,
	id: PropTypes.string,
	invalid: PropTypes.bool,
	required: PropTypes.bool.isRequired,
	size: PropTypes.oneOf( [ 'small', 'large' ] ),
};

Checkbox.defaultProps = {
	invalid: false,
	required: false,
	size: 'small',
};

export default Checkbox;
