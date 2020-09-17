import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Select.scss';

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
				<select
					aria-invalid={invalid}
					className={cx( 'select', { isPlaceholder: '' === value } )}
					disabled={disabled}
					onBlur={onChange}
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
				<svg
					aria-hidden="true"
					className={cx( 'down-arrow', { invalid } )}
					height="6"
					width="11"
					viewBox="15 20 11 6"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.027 26l.016-.016 1.088-1.062 3.887-3.859L23.932 20l-3.894 3.852L16.104 20l-1.086 1.064 3.964 3.881z"
						fillRule="evenodd"
						style={{ fill: 'var(--color, #4C4C4C)' }}
					/>
				</svg>
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
	 * A function that will called on change. It's passed to the native select's onBlur handler.
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
