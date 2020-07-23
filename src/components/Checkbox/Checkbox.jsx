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
	/**
	 * Forwarded to the input element as `aria-described-by`.
	 */
	ariaDescribedBy: PropTypes.string,
	/**
	 * Forwarded to the input element as `aria-label`.
	 */
	ariaLabel: PropTypes.string,
	/**
	 * Forwarded to the input element as `aria-labelled-by`.
	 */
	ariaLabelledBy: PropTypes.string,
	/**
	 * Toggle for the component’s checked state. Forwarded to the input
	 * element.
	 */
	checked: PropTypes.bool,
	/**
	 * Child nodes to be rendered as the label for the checkbox.
	 * Label/input HTML linking happens automatically.
	 */
	children: PropTypes.node,
	/**
	 * Whether the checkbox is interactive. Forwarded to the input
	 * element.
	 */
	disabled: PropTypes.bool.isRequired,
	/**
	 * HTML ID of the component. Forwarded to the input element.
	 */
	id: PropTypes.string,
	/**
	 * Indicates a validation error that must be corrected by the user.
	 * Forwarded to the input element as `aria-invalid`.
	 */
	invalid: PropTypes.bool,
	/**
	 * Function to run when the checkbox is toggled. Forwarded to the
	 * input element.
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * Indicates that the checkbox must be checked by the user in order
	 * for the parent form to validate. Forwarded to the input element.
	 */
	required: PropTypes.bool.isRequired,
	/**
	 * Visual size of the checkbox. Does not affect label size.
	 */
	size: PropTypes.oneOf( [ 'small', 'large' ] ),
};

Checkbox.defaultProps = {
	disabled: false,
	invalid: false,
	required: false,
	size: 'small',
};

export default Checkbox;
