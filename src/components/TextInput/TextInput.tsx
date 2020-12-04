import React from 'react';
import styles from './TextInput.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind( styles );

export default function TextInput ( props: {
	/**
	 * Used with aria-describedby attribute to indicate the ID of a linked description element.
	 */
	ariaDescribedBy?: string,

	/**
	 * Sets for the browser what values the browser should suggest to fill out the field.
	 */
	autoComplete:
		'country' |
		'email' |
		'name' |
		'off' |
		'on' |
		'organization' |
		'street-address' |
		'tel' |
		'username' |
		'url',

	/**
	 * Sets whether the input is prevented from changing values or not. Distinct from read-only in that users cannot
	 * click or select in the field.
	 */
	disabled?: boolean,

	/**
	 * Descriptive content displayed under the element, usually to provide context or instructions to the user (e.g. 'Password must be at least 6 characters' )
	 */
	hint?: React.ReactNode,

	/**
	 * HTML ID of the component. Forwarded to the input/textarea element.
	 */
	id: string,

	/**
	 * Forward a ref to the input element. Use this prop to create an uncontrolled component.
	 */
	inputRef?: React.Ref<HTMLInputElement>,

	/**
	 * Alert the user that validation has failed. This may be useful where HTML5 validation is not sufficient (for example, a field that is validated server side)
	*/
	invalid?: boolean,

	/**
	 * Boolean that determines whether component is a `textarea` or `input` tag.
	 */
	isMultiline?: boolean,

	/**
	 * Semantic description of the input or textarea purpose to be displayed above the element (e.g. 'Email' for an email input).
	 */
	label?: string,

	/**
	 * Prevents string length beyond given value.
	 */
	maxLength?: number,

	/**
	 * Event handler fired when focus is removed from the tag.
	 */
	onBlur?: ( event: InputEvent ) => void,

	/**
	 * Event handler fired when user input changes.
	 */
	onChange?: ( event: InputEvent ) => void,

	/**
	 * Event handler for when a user clicks onto the element.
	 */
	onClick?: ( event: InputEvent ) => void,

	/**
	 * Event handler fired when a user focuses on the element, including tab-focus.
	 */
	onFocus?: ( event: InputEvent ) => void,

	/**
	 * Event handler fired when input is found invalid (see `pattern` / `type`).
	 */
	onInvalid?: ( event: InputEvent ) => void,

	/**
	 * A regex validation that the input must match for input to be valid (for example, a custom email validator).
	 */
	pattern?: string,

	/**
	 * Sets 'ghost' text that appears within the input or textarea field when no value exists. For example, if the label
	 * suggests the input is for email, set placeholder to an example email ("email@qz.com").
	 */
	placeholder?: string,

	/**
	 * Determines whether value is editable or not. Users can still click/select/highlight in the field.
	 */
	readOnly?: boolean,

	/**
	 * If true, value must be present for the form to be submitted. Will add asterisk to label if label is present.
	 */
	required?: boolean,

	/**
	 * For input element only - determines type of form control, defaulting to text. Depending on the input type,
	 * different browser validations may apply (e.g. 'password' type will automatically obscure text input).
	 * Overview of types (MDN): https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
	 */
	type:
		'text' |
		'email' |
		'password' |
		'tel' |
		'search' |
		'hidden' |
		'number' |
		'url' |
		'datetime',

	/**
	 *  If present, the value of the form field. Use this prop to create a controlled component.
	 */
	value?: string,
} ) {
	const {
		autoComplete = 'on',
		disabled = false,
		invalid = false,
		isMultiline = false,
		readOnly = false,
		required = false,
	} = props;

	return (
		<label className={styles.container}>
			{
				props.label &&
					<span className={cx( 'label', { required } )}>
						{props.label}
					</span>
			}

			{
				isMultiline ?
					<textarea
						className={styles.textarea}
						rows={6}
						aria-describedby={props.ariaDescribedBy}
						aria-invalid={invalid}
						disabled={disabled}
						id={props.id}
						maxLength={props.maxLength}
						placeholder={props.placeholder}
						onBlur={props.onBlur}
						onChange={props.onChange}
						onClick={props.onClick}
						onFocus={props.onFocus}
						onInvalid={props.onInvalid}
						readOnly={readOnly}
						ref={props.inputRef}
						required={required}
						value={props.value}
					/>
					:
					<input
						className={styles.input}
						type={props.type}
						aria-describedby={props.ariaDescribedBy}
						aria-invalid={invalid}
						autoComplete={autoComplete}
						disabled={disabled}
						id={props.id}
						maxLength={props.maxLength}
						placeholder={props.placeholder}
						readOnly={readOnly}
						onBlur={props.onBlur}
						onChange={props.onChange}
						onClick={props.onClick}
						onFocus={props.onFocus}
						onInvalid={onInvalid}
						pattern={props.pattern}
						ref={props.inputRef}
						required={required}
						value={props.value}
					/>
			}

			{
				props.hint &&
					<div className={cx( 'hint', { invalid } )}>{props.hint}</div>
			}
		</label>
	);
}
