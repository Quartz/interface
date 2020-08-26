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
							className={cx( 'required-label' )}
							title="Required"
						>
							<label className={cx( 'label' )} htmlFor={id}>
								{label}
							</label>
							<sup className={cx( 'required-asterisk' )}> * </sup>
						</div>
				}

				{
					optionalField &&
					<label className={cx( 'label' )} htmlFor={id}>
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
					<div className={cx( 'input-group' )}>
						<input
							className={cx( 'input', { ...sharedClassNames } )}
							type={type}
							{...sharedProps}
						/>
						{
							buttonProps &&
							<div className={cx( 'input-button' )}>
								<Button {...buttonProps} />
							</div>
						}
					</div>
				}

				{
					toggleText && handleToggleClick &&
					<div className={cx( 'toggle' )}>
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
					<div className={cx( 'status' )}>
						<Checkbox
							checked={true}
						/>
						{statusText && <span className={cx( 'status-text' )}>{statusText}</span>}
					</div>
				}

				{
					status === 'loading' &&
					<div className={cx( 'spinner' )}>
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
	appTheme: PropTypes.string,
	autoComplete: PropTypes.string,
	buttonProps: PropTypes.shape( {
		children: PropTypes.node.isRequired,
		onClick: PropTypes.func.isRequired,
		loading: PropTypes.bool.isRequired,
	} ),
	defaultValue: PropTypes.string,
	handleBlur: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleClick: PropTypes.func,
	handleFocus: PropTypes.func.isRequired,
	handleKeyPress: PropTypes.func,
	handleToggleClick: PropTypes.func,
	id: PropTypes.string.isRequired,
	inputRef: PropTypes.object,
	isMultiline: PropTypes.bool.isRequired,
	label: PropTypes.string,
	maxLength: PropTypes.number,
	name: PropTypes.string,
	pattern: PropTypes.string,
	placeholder: PropTypes.string,
	readOnly: PropTypes.bool,
	required: PropTypes.bool.isRequired,
	status: PropTypes.string,
	statusText: PropTypes.string,
	subtext: PropTypes.node,
	toggleActive: PropTypes.bool,
	toggleText: PropTypes.string,
	type: PropTypes.oneOf( [ 'text', 'email', 'password' ] ),
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
