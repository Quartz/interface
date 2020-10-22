import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.scss';

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
} ) => (
	<label className={styles.container}>
		{label && (
			<span className={`${styles.label} ${required && styles.required}`}>
				{label}
			</span>
		)}
		{isMultiline &&
			<textarea
				className={styles.textarea}
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
				className={styles.input}
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
	 * Sets whether the input is prevented from changing values or not. Distinct from read-only in that users cannot
	 * click or select in the field.
	 */
	disabled: PropTypes.bool.isRequired,
	/**
	 * HTML ID of the component. Forwarded to the input/textarea element.
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
	 * Sets 'ghost' text that appears within the input or textarea field when no value exists. For example, if the label
	 * suggests the input is for email, set placeholder to an example email ("email@qz.com").
	 */
	placeholder: PropTypes.string,
	/**
	 * Determines whether value is editable or not. Users can still click/select/highlight in the field.
	 */
	readOnly: PropTypes.bool.isRequired,
	/**
	 * If true, value must be present for the form to be submitted. Will add asterisk to label if label is present.
	 */
	required: PropTypes.bool.isRequired,
	/**
	 * For input element only - determines type of form control, defaulting to text. Depending on the input type,
	 * different browser validations may apply (e.g. 'password' type will automatically obscure text input).
	 * Overview of types (MDN): https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
	 */
	type: PropTypes.oneOf( [
		'text',
		'email',
		'password',
		'tel',
		'search',
		'hidden',
		'number',
		'url',
		'datetime',
	] ).isRequired,
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
