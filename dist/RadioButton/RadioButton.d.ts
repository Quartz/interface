import React from 'react';
declare function RadioButton(props: {
    /**
     * Toggle for the component’s checked state. Forwarded to the input
     * element.
     */
    checked: boolean;
    /**
     * Child nodes to be rendered as the label for the radio button.
     * Label/input HTML linking happens automatically.
     */
    children: React.ReactNode;
    /**
     * Whether the radio button is interactive. Forwarded to the input
     * element.
     */
    disabled: boolean;
    /**
     * Controls the DOM flow behavior of the component.
     */
    display: 'block' | 'inline';
    /**
     * A string to combine multiple radio buttons in order to provide a
     * multiple choice field. Forwarded to the input element.
     */
    name: string;
    /**
     * Function to run when the radio button is toggled. Forwarded to the
     * input element.
     */
    onChange: (event: React.ChangeEvent) => void;
    /**
     * Forward a ref to the element.
     */
    ref?: React.Ref<HTMLInputElement>;
    /**
     * Indicates that the radio button must be checked by the user in
     * order for the parent form to validate. Forwarded to the input
     * element.
     */
    required: boolean;
}): JSX.Element;
declare namespace RadioButton {
    var defaultProps: {
        disabled: boolean;
        display: string;
        required: boolean;
    };
}
export default RadioButton;
//# sourceMappingURL=RadioButton.d.ts.map