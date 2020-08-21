import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Select.scss';
import ExpandArrowDown from '../../svg/expand-arrow-down.svg';

const cx = classnames.bind( styles );

const Select = ( {
	disabled,
	hint,
	invalid,
	label,
	onChange,
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
				<ExpandArrowDown
					className={cx( 'down-arrow', { invalid } )}
					aria-hidden="true"
				/>
			</div>
		</label>
		{
			hint &&
			<span className={cx( 'subtext', { invalid } )}>
				{hint}
			</span>
		}
	</div>
);

Select.propTypes = {
	/**
	 * If true, the element is not interactive.
	 */
	disabled: PropTypes.bool.isRequired,

	/**
	 * Instructive/helpful text to be displayed below the select.
	 * e.g.
	 *   "Your password must be 6 characters or more"
	 *   "Unfortunately, we cannot accept JCB cards at this time"
	 *
	 * Note: if the element's invalid prop is true, this text will display red.
	 */
	hint: PropTypes.string,

	/**
	 * Whether the element is in an invalid state (or part of a group of
	 * elements that are).
	 */
	invalid: PropTypes.bool.isRequired,

	/**
	 * A label for the whole element, describing the category of options. For example: for a dropdown prompting the user to choose their state of residence, the label could be US State.
	 */
	label: PropTypes.string.isRequired,
	/**
	 * A function that will called on change. It's passed to the native select's onChange handler.
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * The options to display in the dropdown. Each has a label, which will display to the user, and a value, which can be different than the label. For example: in a dropdown fo the user to choose their state of residence, the label might be the state name ("New Hampshire") and the value could be what's saved in the database, like a postal code ("NH")
	 */
	options: PropTypes.arrayOf( PropTypes.shape( {
		label: PropTypes.string.isRequired,
		value: PropTypes.oneOfType( [
			PropTypes.number,
			PropTypes.string,
		] ).isRequired,
	} ) ).isRequired,

	/**
	 * A non-selectable option, which will be the initial value if none is provided. Use this as an example or instruction.
	 * ("Pick a state")
	 */
	placeholder: PropTypes.string,

	/**
	 * Whether a selection is required.
	 */
	required: PropTypes.bool.isRequired,

	/**
	 * The value of the select element when used as a [controlled component](https://reactjs.org/docs/forms.html#controlled-components)
	 */
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
