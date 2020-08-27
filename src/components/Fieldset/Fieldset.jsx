import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import classnames from 'classnames/bind';
import styles from './Fieldset.scss';
const cx = classnames.bind( styles );

const Fieldset = ( {
	appTheme,
	autoComplete,
	buttonProps,
	children,
	defaultValue,
	describedBy,
	id,
	invalid,
	isMultiline,
	inputRef,
	label,
	maxLength,
	name,
	placeholder,
	value,
	onBlur,
	onChange,
	onClick,
	onFocus,
	onKeyPress,
	onInvalid,
	pattern,
	readOnly,
	required,
	type,
} ) => {
	// ClassNames used by both <input> and <textarea>.
	const sharedClassNames = {
		readOnly,
		[`status-${status}`]: status,
		[appTheme]: appTheme,
		[type]: type,
	};

	const requiredField = label && required;
	const optionalField =  label && !requiredField;

	return (
		<fieldset className={styles.inner}>
			{
				requiredField &&
					<div
						className={styles.requiredLabel}
						title="Required"
					>
						<label className={styles.label} htmlFor={id}>
							{label}
						</label>
						<sup className={styles.requiredAsterisk}> * </sup>
					</div>
			}

			{
				optionalField &&
				<label className={styles.label} htmlFor={id}>
					{label}
				</label>
			}

			{isMultiline &&
				<textarea
					className={cx( 'textarea', { ...sharedClassNames } )}
					rows={6}
					aria-invalid={invalid}
					aria-describedby={describedBy}
					autoComplete={autoComplete}
					defaultValue={defaultValue}
					describedBy={describedBy}
					id={id}
					maxLength={maxLength}
					name={name}
					placeholder={placeholder}
					value={value}
					onBlur={onBlur}
					onChange={onChange}
					onClick={onClick}
					onFocus={onFocus}
					onKeyPress={onKeyPress}
					onInvalid={onInvalid}
					pattern={pattern}
					readOnly={readOnly}
					ref={inputRef}
					required={required}
				/>
			}

			{!isMultiline &&
				<div className={styles.inputGroup}>
					<input
						className={cx( 'input', { ...sharedClassNames } )}
						type={type}
						aria-invalid={invalid}
						aria-describedby={describedBy}
						autoComplete={autoComplete}
						defaultValue={defaultValue}
						describedBy={describedBy}
						id={id}
						maxLength={maxLength}
						name={name}
						placeholder={placeholder}
						readOnly={readOnly}
						value={value}
						onBlur={onBlur}
						onChange={onChange}
						onClick={onClick}
						onFocus={onFocus}
						onKeyPress={onKeyPress}
						onInvalid={onInvalid}
						pattern={pattern}
						readOnly={readOnly}
						ref={inputRef}
						required={required}
						type={type}
					/>
					{
						buttonProps &&
						<div className={styles.inputButton}>
							<Button {...buttonProps} />
						</div>
					}
				</div>
			}
			{children}
		</fieldset>
	);
};

Fieldset.propTypes = {
	/**
	 * Style prop that accepts a QZ app theme (i.e. 'work').
	 */
	appTheme: PropTypes.string,
	/**
	 * Input tag prop; boolean to accept autoCompletion or not.
	 */
	autoComplete: PropTypes.string,
	/**
	 * Object that should contain props to be used with an associated `<Button />` component (see Button story).
	 */
	buttonProps: PropTypes.shape( {
		children: PropTypes.node.isRequired,
		onClick: PropTypes.func.isRequired,
		loading: PropTypes.bool.isRequired,
	} ),
	children: PropTypes.node,
	/**
	 * Input tag prop; sets default value.
	 */
	defaultValue: PropTypes.string,
	describedBy: PropTypes.string,
	/**
	 * Input tag prop; attaches id to tag.
	 */
	id: PropTypes.string.isRequired,
	/**
	 * Used in the event of forwarding a ref to the input tag.
	 */
	inputRef: PropTypes.object,
	invalid: PropTypes.bool,
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
	 * Input tag prop; name of the input control, submitted along with value.
	 */
	name: PropTypes.string,
	/**
	 * Event handler for blur event.
	 */
	onBlur: PropTypes.func.isRequired,
	/**
	 * Event handler for change event. Will reset any invalid status.
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
	onInvalid: PropTypes.func,
	/**
	 * Event handler for key press event.
	 */
	onKeyPress: PropTypes.func,
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
	 * Used primarily for styling - sets a status which will appear in classnames. Primarily used with 'error', 'confirmed', 'valid'.
	 */
	status: PropTypes.string,
	/**
	 * Text used when status is 'valid' or 'confirmed' - adjacent to Checkbox.
	 */
	statusText: PropTypes.string,
	/**
	 * Input tag prop; determines type of form control.
	 */
	type: PropTypes.oneOf( [ 'text', 'email', 'password' ] ),
	/**
	 * Sets whether the component is controlled or not.
	 */
	value: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.number,
	] ),
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
