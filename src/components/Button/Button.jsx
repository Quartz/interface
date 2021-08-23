import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Button.scss';
import Spinner from '../Spinner/Spinner';

const cx = classnames.bind( styles );

const ButtonLabel = ( {
	children,
	inline,
	variant,
} ) => <span className={cx( 'label', `variant-${variant}`, { block: !inline } )}>{children}</span>;

ButtonLabel.propTypes = {
	/**
	 * Child nodes to be rendered as the label for the button. Maps to
	 * the button element’s innerHTML.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * Whether the label should be purely textual, e.g. for use in a
	 * paragraph of text.
	 */
	inline: PropTypes.bool.isRequired,
	/**
	 * Visual variations of the button.
	 */
	variant: PropTypes.oneOf( [
		'primary',
		'secondary',
		'warning',
	] ).isRequired,
};

ButtonLabel.defaultProps = {
	inline: false,
	variant: 'primary',
};

const Button = ( {
	ariaChecked,
	children,
	ariaDescribedBy,
	disabled,
	inactive,
	inline,
	loading,
	on,
	onClick,
	role,
	type,
	variant,
} ) => (
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

Button.propTypes = {
	/**
	 * Forwarded to the button element as `aria-checked`. Only use when
	 * `props.role` is one of `checkbox`, `menuitemcheckbox`,
	 * `menuitemradiobutton`, `radiobutton`, or `switch`.
	 */
	ariaChecked: PropTypes.bool,
	/**
	 * Forwarded to the button element as `aria-described-by`.
	 */
	ariaDescribedBy: PropTypes.string,
	/**
	 * Child nodes to be rendered as the label for the button. Maps to
	 * the button element’s innerHTML.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * Whether the button is interactive. Forwarded to the button
	 * element.
	 */
	disabled: PropTypes.bool.isRequired,
	/**
	 * Same visual state as `props.disabled`, but without affecting
	 * interactivity. Use this when you want to indicate that a form's
	 * contents are invalid, but still submissible.
	 */
	inactive: PropTypes.bool.isRequired,
	/**
	 * Whether the button should be purely textual, e.g. for use in a
	 * paragraph of text.
	 */
	inline: PropTypes.bool.isRequired,
	/**
	 * Visually replaces `props.children` with the Spinner component. Use
	 * when waiting for an action to complete in response to a user
	 * engaging the button.
	 */
	loading: PropTypes.bool.isRequired,
	/**
	 * For binding Google AMP interactivity. See
	 * https://amp.dev/documentation/examples/components/amp-bind/
	 */
	on: PropTypes.string,
	/**
	 * Function to run when the button is engaged. Forwarded to the button
	 * element.
	 */
	onClick: PropTypes.func.isRequired,
	/**
	 * The WAI-ARIA element role. It is always preferable to use the
	 * approporiate HTML element over the role attribute, e.g.
	 * `<input type="checkbox" />` is preferred to `<Button role="checkbox" />`.
	 * Forwarded to the button element.
	 */
	role: PropTypes.oneOf( [
		'checkbox',
		'link',
		'menuitem',
		'menuitemcheckbox',
		'menuitemradio',
		'option',
		'radio',
		'switch',
		'tab',
	] ),
	/**
	 * When value is 'submit', the button will submit a parent `<form>`
	 * element when engaged. Forwarded to the button element.
	 */
	type: PropTypes.oneOf( [ 'submit', 'button' ] ).isRequired,
	/**
	 * Visual variations of the button. See `ButtonLabel.propTypes.variant`
	 */
	variant: PropTypes.string,
};

Button.defaultProps = {
	disabled: false,
	inactive: false,
	inline: false,
	loading: false,
	onClick: () => {},
	type: 'button',
};

export { ButtonLabel };
export default Button;
