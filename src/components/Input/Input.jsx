import React, { useState } from 'react';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Spinner from '../Spinner/Spinner';
import PropTypes from 'prop-types';

import styles from './Input.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind( styles );

const Input = ( {
	appTheme,
	autoComplete,
	buttonProps,
	defaultValue,
	handleBlur,
	handleChange,
	handleClick,
	handleFocus,
	handleKeyPress,
	handleToggleClick,
	id,
	inputRef,
	isMultiline,
	label,
	maxLength,
	name,
	pattern,
	placeholder,
	readOnly,
	required,
	status,
	statusText,
	subtext,
	toggleActive,
	toggleText,
	type,
	value,
} ) => {
	const [ invalid, setInvalid ] = useState( false );

	const setAndHandleChange = ( event ) => {
		setInvalid( false );
		handleChange( event.target.value );
	};

	const descriptionElId = `${id}-description`;

	const requiredField = label && required;
	const optionalField =  label && !requiredField;

	// Props used by both <input> and <textarea>.
	const sharedProps = {
		autoComplete,
		defaultValue,
		id,
		maxLength,
		name,
		placeholder,
		readOnly,
		value,
		'aria-describedby': subtext ? descriptionElId : undefined,
		'aria-invalid': invalid,
		onBlur: handleBlur,
		onChange: setAndHandleChange,
		onClick: handleClick,
		onFocus: handleFocus,
		onKeyPress: handleKeyPress,
		onInvalid: () => setInvalid( true ),
		pattern,
		ref: inputRef,
		required,
		title: subtext,
	};

	// ClassNames used by both <input> and <textarea>.
	const sharedClassNames = {
		readOnly,
		[`status-${status}`]: status,
		[appTheme]: appTheme,
		[type]: type,
	};


	return (
		<div className={cx( 'container', { [`status-${status}`]: status, invalid } )}>
			<div className={cx( 'inner', { toggleVisibility: toggleText } )}>
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

				{
					isMultiline &&
					<textarea
						className={cx( 'textarea', { ...sharedClassNames } )}
						rows={6}
						{...sharedProps}
					/>
				}

				{
					!isMultiline &&
					<div className={styles.inputGroup}>
						<input
							className={cx( 'input', { ...sharedClassNames } )}
							type={type}
							{...sharedProps}
						/>
						{
							buttonProps &&
							<div className={styles.inputButton}>
								<Button {...buttonProps} />
							</div>
						}
					</div>
				}

				{
					toggleText && handleToggleClick &&
					<div className={styles.toggle}>
						<Button
							checked={toggleActive}
							inline={true}
							onClick={handleToggleClick}
							role="switch"
							type="button"
						>
							{toggleText}
						</Button>
					</div>
				}

				{
					[ 'confirmed', 'valid' ].includes( status ) &&
					<div className={styles.status}>
						<Checkbox
							checked={true}
						/>
						{statusText && <span className={styles.statusText}>{statusText}</span>}
					</div>
				}

				{
					status === 'loading' &&
					<div className={styles.spinner}>
						<Spinner />
					</div>
				}
			</div>
			{
				subtext &&
				<div
					id={descriptionElId}
					className={cx( 'subtext', { [`status-${status}`]: status, invalid } )}
				>
					{subtext}
				</div>
			}
		</div>
	);
};

Input.propTypes = {
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
	/**
	 * Input tag prop; sets default value.
	 */
	defaultValue: PropTypes.string,
	/**
	 * Event handler for blur event.
	 */
	handleBlur: PropTypes.func.isRequired,
	/**
	 * Event handler for change event. Will reset any invalid status.
	 */
	handleChange: PropTypes.func.isRequired,
	/**
	 * Event handler for click event.
	 */
	handleClick: PropTypes.func,
	/**
	 * Event handler for focus event.
	 */
	handleFocus: PropTypes.func.isRequired,
	/**
	 * Event handler for key press event.
	 */
	handleKeyPress: PropTypes.func,
	/**
	 * Event handler for the toggle button; only used when toggleText is present.
	 */
	handleToggleClick: PropTypes.func,
	/**
	 * Input tag prop; attaches id to tag.
	 */
	id: PropTypes.string.isRequired,
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
	 * Input tag prop; name of the input control, submitted along with value.
	 */
	name: PropTypes.string,
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
	 * Text that appears below the input element, primarily for error messages or disclaimers.
	 */
	subtext: PropTypes.node,
	/**
	 * Boolean used to determine active/inactive status of toggle.
	 */
	toggleActive: PropTypes.bool,
	/**
	 * Text that appears as child of the toggle button, if `handleToggleClick` is present.
	 */
	toggleText: PropTypes.string,
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

Input.defaultProps = {
	handleBlur: () => {},
	handleChange: () => {},
	handleFocus: () => {},
	isMultiline: false,
	required: false,
	type: 'text',
};

export default Input;
