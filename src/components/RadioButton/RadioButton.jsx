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
	/**
	 * Toggle for the component’s checked state. Forwarded to the input
	 * element.
	 */
	checked: PropTypes.bool,
	/**
	 * Child nodes to be rendered as the label for the radio button.
	 * Label/input HTML linking happens automatically.
	 */
	children: PropTypes.node,
	/**
	 * Whether the radio button is interactive. Forwarded to the input
	 * element.
	 */
	disabled: PropTypes.bool.isRequired,
	/**
	 * Controls the DOM flow behavior of the component.
	 */
	display: PropTypes.oneOf( [ 'block', 'inline' ] ),
	/**
	 * A string to combine multiple radio buttons in order to provide a
	 * multiple choice field. Forwarded to the input element.
	 */
	name: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
	] ),
	/**
	 * Function to run when the radio button is toggled. Forwarded to the
	 * input element.
	 */
	onChange: PropTypes.func,
	/**
	 * Indicates that the radio button must be checked by the user in
	 * order for the parent form to validate. Forwarded to the input
	 * element.
	 */
	required: PropTypes.bool.isRequired,
};

RadioButton.defaultProps = {
	disabled: false,
	display: 'inline',
	required: false,
};

export default RadioButton;
