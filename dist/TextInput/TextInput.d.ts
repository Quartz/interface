import React from 'react';
export declare function TextInput(props: {
    /**
     * Used with aria-describedby attribute to indicate the ID of a linked description element.
     */
    ariaDescribedBy?: string;
    /**
     * Informs the browser what values should be suggested when filling out the field.
     */
    autoComplete?: React.InputHTMLAttributes<HTMLInputElement>['autoComplete'];
    /**
     * For uncontrolled components, sets the initial value which can be overridden by the user.
     */
    defaultValue?: string;
    /**
     * Sets whether the field is prevented from changing values or not. Distinct from read-only in that users cannot click or select in the field.
     */
    disabled?: boolean;
    /**
     * Descriptive content displayed under the field, usually to provide context or instructions to the user (e.g., "Password must be at least 6 characters").
     */
    hint?: React.ReactNode;
    /**
     * HTML ID. Forwarded to the element.
     */
    id: string;
    /**
     * Forward a ref to the element. Use this prop to create an uncontrolled component.
     */
    inputRef?: React.Ref<HTMLInputElement>;
    /**
     * Alert the user that validation has failed. This may be useful where HTML5 validation is not sufficient (for example, a field that is validated server-side).
    */
    invalid?: boolean;
    /**
     * Semantic description of the field's purpose to be displayed above the field (e.g., "Email" for an email input).
     */
    label?: string;
    /**
     * Prevents string length beyond given value.
     */
    maxLength?: number;
    /**
     * Event handler fired when focus is removed from the element.
     */
    onBlur?: (event: React.FocusEvent) => void;
    /**
     * Event handler fired when user input changes.
     */
    onChange?: (event: React.ChangeEvent) => void;
    /**
     * Event handler for when a user clicks on the element.
     */
    onClick?: (event: React.MouseEvent) => void;
    /**
     * Event handler fired when a user focuses on the element, including tab-focus.
     */
    onFocus?: (event: React.FocusEvent) => void;
    /**
     * Event handler fired when input is found invalid.
     */
    onInvalid?: (event: React.FormEvent) => void;
    /**
     * A regex validation that the input must match for input to be valid (for example, a custom email validator).
     */
    pattern?: string;
    /**
     * Sets "ghost" text that appears within the field when no value exists. For example, if the label suggests the input is for email, set placeholder to "email@qz.com".
     */
    placeholder?: string;
    /**
     * Determines whether field value is editable or not. Users can still click/select/highlight in the field.
     */
    readOnly?: boolean;
    /**
     * If true, value must be present for the form to be submitted. Will add asterisk to label if label is present.
     */
    required?: boolean;
    /**
     * Determines type of form control. Depending on the input type, different browser validations may apply (e.g., "password" type will automatically obscure text input). Overview of types (MDN): https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input.
     */
    type: 'text' | 'email' | 'password' | 'tel' | 'search' | 'hidden' | 'number' | 'url' | 'datetime';
    /**
     *  If present, the value of the field. Use this prop to create a controlled component.
     */
    value?: string;
}): JSX.Element;
export declare function TextMultilineInput(props: {
    /**
     * Used with aria-describedby attribute to indicate the ID of a linked description element.
     */
    ariaDescribedBy?: string;
    /**
     * For uncontrolled components, sets the initial value which can be overridden by the user.
     */
    defaultValue?: string;
    /**
     * Sets whether the field is prevented from changing values or not. Distinct from read-only in that users cannot click or select in the field.
     */
    disabled?: boolean;
    /**
     * Descriptive content displayed under the field, usually to provide context or instructions to the user.
     */
    hint?: React.ReactNode;
    /**
     * HTML ID. Forwarded to the element.
     */
    id: string;
    /**
     * Forward a ref to the element. Use this prop to create an uncontrolled component.
     */
    inputRef?: React.Ref<HTMLTextAreaElement>;
    /**
     * Alert the user that validation has failed. This may be useful where HTML5 validation is not sufficient (for example, a field that is validated server-side).
    */
    invalid?: boolean;
    /**
     * Semantic description of the field’s purpose to be displayed above the field.
     */
    label?: string;
    /**
     * Prevents string length beyond given value.
     */
    maxLength?: number;
    /**
     * Event handler fired when focus is removed from the element.
     */
    onBlur?: (event: React.FocusEvent) => void;
    /**
     * Event handler fired when user input changes.
     */
    onChange?: (event: React.ChangeEvent) => void;
    /**
     * Event handler for when a user clicks on the element.
     */
    onClick?: (event: React.MouseEvent) => void;
    /**
     * Event handler fired when a user focuses on the element, including tab-focus.
     */
    onFocus?: (event: React.FocusEvent) => void;
    /**
     * Event handler fired when input is found invalid.
     */
    onInvalid?: (event: React.FormEvent) => void;
    /**
     * Sets "ghost" text that appears within the element when no value exists.
     */
    placeholder?: string;
    /**
     * Determines whether the field value is editable or not. Users can still click/select/highlight in the field.
     */
    readOnly?: boolean;
    /**
     * If true, value must be present for the form to be submitted. Will add an asterisk to label if label is present.
     */
    required?: boolean;
    /**
     *  If present, the value of the field. Use this prop to create a controlled component.
     */
    value?: string;
}): JSX.Element;
//# sourceMappingURL=TextInput.d.ts.map