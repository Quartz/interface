import React from 'react';
declare type Variant = 'primary' | 'secondary' | 'warning';
declare const ButtonLabel: {
    (props: {
        /**
         * Child nodes to be rendered as the label for the button. Maps to
         * the button element’s innerHTML.
         */
        children: React.ReactNode;
        /**
         * Whether the label should be purely textual, e.g. for use in a
         * paragraph of text.
         */
        inline?: boolean | undefined;
        /**
         * Visual variations of the button.
         */
        variant?: "primary" | "secondary" | "warning" | undefined;
    }): JSX.Element;
    defaultProps: {
        inline: boolean;
        variant: string;
    };
};
declare type AriaRole = ('checkbox' | 'link' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'option' | 'radio' | 'switch' | 'tab');
declare const Button: (props: {
    /**
     * Forwarded to the button element as `aria-checked`. Only use when
     * `props.role` is one of `checkbox`, `menuitemcheckbox`,
     * `menuitemradiobutton`, `radiobutton`, or `switch`.
     */
    ariaChecked?: boolean | undefined;
    /**
     * Forwarded to the button element as `aria-described-by`.
     */
    ariaDescribedBy?: string | undefined;
    /**
     * Child nodes to be rendered as the label for the button. Maps to
     * the button element’s innerHTML.
     */
    children: React.ReactNode;
    /**
     * Whether the button is interactive. Forwarded to the button
     * element.
     */
    disabled?: boolean | undefined;
    /**
     * Same visual state as `props.disabled`, but without affecting
     * interactivity. Use this when you want to indicate that a form's
     * contents are invalid, but still submissible.
     */
    inactive?: boolean | undefined;
    /**
     * Whether the button should be purely textual, e.g. for use in a
     * paragraph of text.
     */
    inline?: boolean | undefined;
    /**
     * Visually replaces `props.children` with the Spinner component. Use
     * when waiting for an action to complete in response to a user
     * engaging the button.
     */
    loading?: boolean | undefined;
    /**
     * For binding Google AMP interactivity. See
     * https://amp.dev/documentation/examples/components/amp-bind/
     */
    on?: string | undefined;
    /**
     * Function to run when the button is engaged. Forwarded to the button
     * element.
     */
    onClick?: ((event: React.UIEvent<HTMLButtonElement, UIEvent>) => void) | undefined;
    /**
     * The WAI-ARIA element role. It is always preferable to use the
     * approporiate HTML element over the role attribute, e.g.
     * `<input type="checkbox" />` is preferred to `<Button role="checkbox" />`.
     * Forwarded to the button element.
     */
    role?: "link" | "option" | "switch" | "checkbox" | "radio" | "menuitem" | "tab" | "menuitemcheckbox" | "menuitemradio" | undefined;
    /**
     * When value is 'submit', the button will submit a parent `<form>`
     * element when engaged. Forwarded to the button element.
     */
    type?: "button" | "submit" | undefined;
    /**
     * Visual variations of the button. See `ButtonLabel.propTypes.variant`
     */
    variant?: "primary" | "secondary" | "warning" | undefined;
}) => JSX.Element;
export { ButtonLabel };
export default Button;
//# sourceMappingURL=Button.d.ts.map