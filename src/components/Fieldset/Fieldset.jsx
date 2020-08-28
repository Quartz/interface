import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Fieldset.scss';
const cx = classnames.bind( styles );

const Fieldset = ( {
	autoComplete,
	defaultValue,
	describedBy,
	isMultiline,
	inputRef,
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
	// ClassNames used by both <input> and <textarea>.
	const sharedClassNames = {
		readOnly,
		[type]: type,
	};

	const requiredField = label && required;

	return (
		<fieldset className={styles.container}>
			<label className={`${styles.label} ${styles.requiredLabel}`}>
				{label}
				{requiredField && <span className={styles.requiredAsterisk}> * </span>}
				{isMultiline &&
					<textarea
						className={cx( 'textarea', { ...sharedClassNames } )}
						rows={6}
						aria-describedby={describedBy}
						autoComplete={autoComplete}
						defaultValue={defaultValue}
						describedBy={describedBy}
						maxLength={maxLength}
						placeholder={placeholder}
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

				{!isMultiline &&
					<input
						className={cx( 'input', { ...sharedClassNames } )}
						type={type}
						aria-describedby={describedBy}
						autoComplete={autoComplete}
						defaultValue={defaultValue}
						describedBy={describedBy}
						maxLength={maxLength}
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
						type={type}
					/>
				}
			</label>
		</fieldset>
	);
};

Fieldset.propTypes = {
	/**
	 * Input tag prop; boolean to accept autoCompletion or not.
	 */
	autoComplete: PropTypes.string,
	/**
	 * Input tag prop; sets default value.
	 */
	defaultValue: PropTypes.string,
	/**
	 * Input tag prop; used with aria-describedby attribute to indicate the ID of a linked description element.
	 */
	describedBy: PropTypes.string,
	/**
	 * Used in the event of forwarding a ref to the input tag.
	 */
	inputRef: PropTypes.object,
	/**
	 * Boolean that determines whether component is a `textarea` or `input` tag.
	 */
	isMultiline: PropTypes.bool.isRequired,
	/**
	 * Text to be used in `label` tag.
	 */
	label: PropTypes.string,
	/**
	 * Input tag prop; prevents string length beyond given value.
	 */
	maxLength: PropTypes.number,
	/**
	 * Event handler for blur event.
	 */
	onBlur: PropTypes.func.isRequired,
	/**
	 * Event handler for change event.
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * Event handler for click event.
	 */
	onClick: PropTypes.func,
	/**
	 * Event handler for focus event.
	 */
	onFocus: PropTypes.func.isRequired,
	/**
	 * Event handler for invalid event.
	 */
	onInvalid: PropTypes.func,
	/**
	 * Input tag prop; sets `value` validation pattern.
	 */
	pattern: PropTypes.string,
	/**
	 * Input tag prop; sets 'ghost' text that appears when no value exists.
	 */
	placeholder: PropTypes.string,
	/**
	 * Input tag prop; determines whether value is editable or not.
	 */
	readOnly: PropTypes.bool,
	/**
	 * Input tag prop + style prop; if true, value must be present for the form to be submitted. Will add asterisk to label if label is present.
	 */
	required: PropTypes.bool.isRequired,
	/**
	 * Input tag prop; determines type of form control.
	 */
	type: PropTypes.oneOf( [ 'text', 'email', 'password' ] ),
};

Fieldset.defaultProps = {
	onBlur: () => {},
	onChange: () => {},
	onFocus: () => {},
	isMultiline: false,
	required: false,
	type: 'text',
};

export default Fieldset;
