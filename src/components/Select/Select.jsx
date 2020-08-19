import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Select.scss';
import ExpandArrowDown from './expand-arrow-down.svg';

const cx = classnames.bind( styles );

const Select = ( {
	subtext,
	disabled,
	onChange,
	invalid,
	label,
	options,
	placeholder,
	required,
	value,
} ) => (
	<div className={cx( 'container' )}>
		<label>
			{
				label &&
				<span className={cx( 'label' )}>{label}</span>
			}
			<div className={cx( 'select-container' )}>
				{/* eslint-disable-next-line jsx-a11y/no-onchange */}
				<select
					aria-invalid={invalid}
					className={cx( 'select', { isPlaceholder: '' === value } )}
					disabled={disabled}
					onChange={onChange}
					required={required}
					value={value}
				>
					{
						placeholder &&
						<option disabled value="">
							{placeholder}
						</option>
					}
					{options.map( item => (
						<option
							key={item.value}
							value={item.value}
						>
							{item.label}
						</option>
					) )}
				</select>
				<ExpandArrowDown className={cx( 'down-arrow', { invalid } )} aria-hidden="true" />
			</div>
		</label>
		{
			subtext &&
			<span className={cx( 'subtext', { invalid } )}>{subtext}</span>
		}
	</div>
);

Select.propTypes = {
	/**
	 * If true, the element is not interactive. False by default.
	 */
	disabled: PropTypes.bool.isRequired,
	/**
	 * Whether the element is in an invalid state (or part of a group of
	 * elements that are).
	 */
	invalid: PropTypes.bool,
	/**
	 * A label for the whole element.
	 */
	label: PropTypes.string,
	/**
	 * A function that will called on change. It's passed to the native select's onChange handler.
	 */
	onChange: PropTypes.func.isRequired,
	/** The options to display in the dropdown. Each has a label, which will display to the user, and a value, which can be different than the label. */
	options: PropTypes.arrayOf( PropTypes.shape( {
		label: PropTypes.string.isRequired,
		value: PropTypes.oneOfType( [
			PropTypes.number,
			PropTypes.string,
		] ).isRequired,
	} ) ).isRequired,

	/**
	 * A non-selectable option. Use this as an example or instruction.
	 * ("Pick an option")
	 */
	placeholder: PropTypes.string,

	/**
	 * Whether a selection is required.
	 */
	required: PropTypes.bool,

	/**
	 * Text to be displayed below the select. If the element's invalid prop is true,
	 * this will be styled as an error.
	 */
	subtext: PropTypes.string,

	/** The value of the select as a controlled component. */
	value: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
	] ),
};

Select.defaultProps = {
	disabled: false,
	required: false,
	value: '',
};

export default Select;
