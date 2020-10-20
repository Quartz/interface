import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './TextInput.scss';
const cx = classnames.bind( styles );

const TextInput = ( {
	autoComplete,
	ariaDescribedBy,
	disabled,
	isMultiline,
	inputRef,
	id,
	label,
	maxLength,
	placeholder,
	onBlur,
	onChange,
	onClick,
	onFocus,
	onInvalid,
	pattern,
	readOnly,
	required,
	type,
} ) => {
	// Class names used by both <input> and <textarea>.
	const sharedClassNames = {
		disabled,
		readOnly,
		[type]: type,
	};

	return (
		<label className={styles.container}>
			<span className={`${styles.label} ${required && label ? styles.requiredLabel : ''}`}>
				{label}
			</span>
			{isMultiline &&
				<textarea
					className={cx( 'textarea', { sharedClassNames } )}
					type={type}
					rows={6}
					aria-describedby={ariaDescribedBy}
					disabled={disabled}
					id={id}
					maxlength={maxLength}
					placeholder={placeholder}
					onBlur={onBlur}
					onChange={onChange}
					onClick={onClick}
					onFocus={onFocus}
					onInvalid={onInvalid}
					readOnly={readOnly}
					ref={inputRef}
					required={required}
				/>
			}

			{!isMultiline &&
				<input
					className={cx( 'input', { sharedClassNames } )}
					type={type}
					aria-describedby={ariaDescribedBy}
					autocomplete={autoComplete}
					disabled={disabled}
					id={id}
					maxlength={maxLength}
					placeholder={placeholder}
					readOnly={readOnly}
					onBlur={onBlur}
					onChange={onChange}
					onClick={onClick}
					onFocus={onFocus}
					onInvalid={onInvalid}
					pattern={pattern}
					readOnly={readOnly}
					ref={inputRef}
					required={required}
				/>
			}
		</label>
	);
};

TextInput.propTypes = {
	/**
	 * Used with aria-describedby attribute to indicate the ID of a linked description element.
	 */
	ariaDescribedBy: PropTypes.string,
	/**
	 * Whether the value of the control can be automatically completed by the browser.
	 */
	autoComplete: PropTypes.bool.isRequired,
	/**
	 * Sets whether the input is disabled from changing values or not.
	 */
	disabled: PropTypes.bool.isRequired,
	/**
	 * Used to identify the element.
	 */
	id: PropTypes.string,
	/**
	 * Used in the event of forwarding an external ref to the tag.
	 */
	inputRef: PropTypes.object,
	/**
	 * Boolean that determines whether component is a `textarea` or `input` tag.
	 */
	isMultiline: PropTypes.bool.isRequired,
	/**
	 * Semantic description of the input or textarea purpose to be displayed above the element (e.g. 'Email' for an email input).
	 */
	label: PropTypes.string,
	/**
	 * Prevents string length beyond given value.
	 */
	maxLength: PropTypes.number,
	/**
	 * Event handler fired when focus is removed from the tag.
	 */
	onBlur: PropTypes.func.isRequired,
	/**
	 * Event handler fired when user input changes.
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * Event handler for when a user clicks onto the element.
	 */
	onClick: PropTypes.func,
	/**
	 * Event handler fired when a user focuses on the element, including tab-focus.
	 */
	onFocus: PropTypes.func.isRequired,
	/**
	 * Event handler fired when input is found invalid (see `pattern` / `type`).
	 */
	onInvalid: PropTypes.func,
	/**
	 * A regex validation that the input must match for input to be valid (for example, a custom email validator).
	 */
	pattern: PropTypes.string,
	/**
	 * Sets 'ghost' text that appears when no value exists.
	 */
	placeholder: PropTypes.string,
	/**
	 * Determines whether value is editable or not.
	 */
	readOnly: PropTypes.bool,
	/**
	 * If true, value must be present for the form to be submitted. Will add asterisk to label if label is present.
	 */
	required: PropTypes.bool.isRequired,
	/**
	 * For input element only - determines type of form control, defaulting to text. Depending on the input type,
	 * different browser validations may apply (e.g. 'password' type will automatically obscure text input).
	 * Overview of types (MDN): https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
	 */
	type: PropTypes.oneOf( [ 'text', 'email', 'password', 'tel', 'search', 'hidden', 'number', 'url', 'datetime' ] ),
};

TextInput.defaultProps = {
	autoComplete: true,
	disabled: false,
	isMultiline: false,
	onBlur: () => null,
	onChange: () => null,
	onFocus: () => null,
	readOnly: false,
	required: false,
	type: 'text',
};

export default TextInput;
