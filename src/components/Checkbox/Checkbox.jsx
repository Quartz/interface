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
	hasError,
	id,
	size,
} ) => (
	<label className={cx( 'container', { hasError } )}>
		<input
			aria-describedby={ariaDescribedBy}
			aria-invalid={hasError}
			aria-label={ariaLabel}
			aria-labelledby={ariaLabelledBy}
			checked={checked}
			className={cx( 'input', size )}
			id={id}
			onChange={handleChange}
			type="checkbox"
		/>
		{children && <span className={cx( 'label', size )}>{children}</span>}
	</label>
);

Checkbox.propTypes = {
	ariaDescribedBy: PropTypes.string,
	ariaLabel: PropTypes.string,
	ariaLabelledBy: PropTypes.string,
	checked: PropTypes.bool,
	children: PropTypes.node,
	handleChange: PropTypes.func.isRequired,
	hasError: PropTypes.bool,
	id: PropTypes.string,
	size: PropTypes.oneOf( [ 'large' ] ),
};

Checkbox.defaultProps = {
	hasError: false,
};

export default Checkbox;
