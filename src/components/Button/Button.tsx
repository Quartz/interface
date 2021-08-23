import React from 'react';
import classnames from 'classnames/bind';
import styles from './Button.scss';
import Spinner from '../Spinner/Spinner';

const cx = classnames.bind( styles );

type Variant = 'primary' | 'secondary' | 'warning'

const ButtonLabel = ( props: {
	/**
	 * Child nodes to be rendered as the label for the button. Maps to
	 * the button element’s innerHTML.
	 */
	children: React.ReactNode,
	/**
	 * Whether the label should be purely textual, e.g. for use in a
	 * paragraph of text.
	 */
	inline?: boolean,
	/**
	 * Visual variations of the button.
	 */
	variant?: Variant,
} ) => {
	const {
		children,
		inline = false,
		variant = 'primary',
	} = props;

	return (
		<span className={cx( 'label', `variant-${variant}`, { block: !inline } )}>{children}</span>
	);
};

ButtonLabel.defaultProps = {
	inline: false,
	variant: 'primary',
};

type AriaRole = (
	'checkbox' | 'link' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'radio' | 'switch' | 'tab'
)

const Button = ( props: {
	/**
	 * Forwarded to the button element as `aria-checked`. Only use when
	 * `props.role` is one of `checkbox`, `menuitemcheckbox`,
	 * `menuitemradiobutton`, `radiobutton`, or `switch`.
	 */
	ariaChecked?: boolean,
	/**
	 * Forwarded to the button element as `aria-described-by`.
	 */
	ariaDescribedBy?: string,
	/**
	 * Child nodes to be rendered as the label for the button. Maps to
	 * the button element’s innerHTML.
	 */
	children: React.ReactNode,
	/**
	 * Whether the button is interactive. Forwarded to the button
	 * element.
	 */
	disabled?: boolean,
	/**
	 * Same visual state as `props.disabled`, but without affecting
	 * interactivity. Use this when you want to indicate that a form's
	 * contents are invalid, but still submissible.
	 */
	inactive?: boolean,
	/**
	 * Whether the button should be purely textual, e.g. for use in a
	 * paragraph of text.
	 */
	inline?: boolean,
	/**
	 * Visually replaces `props.children` with the Spinner component. Use
	 * when waiting for an action to complete in response to a user
	 * engaging the button.
	 */
	loading?: boolean,
	/**
	 * For binding Google AMP interactivity. See
	 * https://amp.dev/documentation/examples/components/amp-bind/
	 */
	on?: string,
	/**
	 * Function to run when the button is engaged. Forwarded to the button
	 * element.
	 */
	onClick: React.UIEventHandler<HTMLButtonElement>,
	/**
	 * The WAI-ARIA element role. It is always preferable to use the
	 * approporiate HTML element over the role attribute, e.g.
	 * `<input type="checkbox" />` is preferred to `<Button role="checkbox" />`.
	 * Forwarded to the button element.
	 */
	role?: AriaRole,
	/**
	 * When value is 'submit', the button will submit a parent `<form>`
	 * element when engaged. Forwarded to the button element.
	 */
	type: 'submit' | 'button',
	/**
	 * Visual variations of the button. See `ButtonLabel.propTypes.variant`
	 */
	variant?: Variant
} ) => {
	const {
		ariaChecked,
		ariaDescribedBy,
		children,
		disabled = false,
		inactive = false,
		inline = false,
		loading = false,
		on,
		onClick,
		role,
		type = 'button',
		variant = 'primary',
	} = props;

	return (
		<button
			aria-checked={ariaChecked}
			aria-describedby={ariaDescribedBy}
			className={cx( 'button', { block: !inline, inactive } )}
			disabled={disabled || loading}
			on={on}
			onClick={onClick}
			role={role}
			type={type}
		>
			<ButtonLabel variant={variant} inline={inline}>
				{
					loading && (
						<div className={styles.spinner}>
							<Spinner />
						</div>
					)
				}
				<span className={cx( 'label-text', { loading } )}>{children}</span>
			</ButtonLabel>
		</button>
	);
};

export { ButtonLabel };
export default Button;
