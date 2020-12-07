import React from 'react';
import classnames from 'classnames/bind';
import styles from './RadioButton.scss';

const cx = classnames.bind( styles );

function RadioButton ( props: {
	/**
	 * Toggle for the component’s checked state. Forwarded to the input
	 * element.
	 */
	checked: boolean,
	/**
	 * Child nodes to be rendered as the label for the radio button.
	 * Label/input HTML linking happens automatically.
	 */
	children: React.ReactNode,
	/**
	 * Whether the radio button is interactive. Forwarded to the input
	 * element.
	 */
	disabled: boolean,
	/**
	 * Controls the DOM flow behavior of the component.
	 */
	display: 'block' | 'inline',
	/**
	 * A string to combine multiple radio buttons in order to provide a
	 * multiple choice field. Forwarded to the input element.
	 */
	name: string,
	/**
	 * Function to run when the radio button is toggled. Forwarded to the
	 * input element.
	 */
	onChange: ( event: React.ChangeEvent ) => void,
	/**
     * Forward a ref to the element.
     */
	ref?: React.Ref<HTMLInputElement>
	/**
	 * Indicates that the radio button must be checked by the user in
	 * order for the parent form to validate. Forwarded to the input
	 * element.
	 */
	required: boolean,
} ) {
	return (
		<label className={cx( 'container', props.display )}>
			<input
				checked={props.checked}
				className={cx( 'input', props.display )}
				disabled={props.disabled}
				name={props.name}
				onChange={props.onChange}
				required={props.required}
				type="radio"
			/>
			{props.children}
		</label>
	);
}

RadioButton.defaultProps = {
	disabled: false,
	display: 'inline',
	required: false,
};

export default RadioButton;
