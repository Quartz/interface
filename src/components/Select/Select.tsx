import React from 'react';
import classnames from 'classnames/bind';
import { FormLabel } from '../index';
import styles from './Select.scss';

const cx = classnames.bind( styles );

type OptionType = {
	label: string,
	value: number | string,
};

export default function Select ( props: {
	/**
	 * If true, the element is not interactive.
	 */
	disabled?: boolean,

	/**
	 * Instructive/helpful text to be displayed below the select, e.g.:
	 *   "Your password must be 6 characters or more"
	 *   "Unfortunately, we cannot accept JCB cards at this time"
	 *
	 * Note: If the element's invalid prop is true, this text will display red.
	 */
	hint?: string,

	/**
	 * Forward a ref to the element. Use this prop to create an uncontrolled
	 * component.
	 */
	inputRef?: React.Ref<HTMLSelectElement>,

	/**
	 * Whether the element is in an invalid state (or part of a group of elements
	 * that are).
	 */
	invalid: boolean,

	/**
	 * A label for the whole element, describing the category of options. For
	 * example: for a dropdown prompting the user to choose their state of
	 * residence, the label could be "US State".
	 */
	label: string,

	/**
	 * A function that will be called when the user's selection changes.
	 */
	onChange: ( event: React.ChangeEvent ) => void,

	/**
	 * The options to display in the dropdown. Each has a label, which will display
	 * to the user, and a value, which can be different than the label. For
	 * example: in a dropdown to choose their state of residence, the label might
	 * be the state name ("New Hampshire") and the value could be what's saved in
	 * the database, like a postal code ("NH").
	 */
	options: OptionType[],

	/**
	 * A non-selectable option, which will be the initial value if none is
	 * provided. Use this as an example or instruction, e.g., "Pick a state". Note
	 * that placeholders are only styled correctly when "required" is set to true
	 * (this is a browser limitation).
	 */
	placeholder?: string,

	/**
	 * Whether a selection is required.
	 */
	required?: boolean,

	/**
	 * The value of the selected option. Use this prop to create a controlled
	 * component.
	 */
	value?: number | string,
} ) {
	const {
		disabled = false,
		required = false,
	} = props;

	return (
		<label className={styles.container}>
			<FormLabel required={required}>{props.label}</FormLabel>
			<select
				aria-invalid={props.invalid}
				className={styles.select}
				disabled={disabled}
				onChange={props.onChange}
				ref={props.inputRef}
				required={required}
				value={props.value}
			>
				{
					props.placeholder &&
						<option disabled value="">
							{props.placeholder}
						</option>
				}
				{
					props.options.map( item => (
						<option
							key={item.value}
							value={item.value}
						>
							{item.label}
						</option>
					) )
				}
			</select>
			<svg
				aria-hidden="true"
				className={cx( 'down-arrow', { invalid: props.invalid } )}
				height="6"
				width="11"
				viewBox="15 20 11 6"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M20.027 26l.016-.016 1.088-1.062 3.887-3.859L23.932 20l-3.894 3.852L16.104 20l-1.086 1.064 3.964 3.881z"
					fill="var(--color, #4C4C4C)"
					fillRule="evenodd"
				/>
			</svg>
			{
				props.hint &&
					<span className={cx( 'subtext', { invalid: props.invalid } )}>
						{props.hint}
					</span>
			}
		</label>
	);
}
