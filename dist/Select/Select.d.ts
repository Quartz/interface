import React from 'react';
declare type OptionType = {
    label: string;
    value: number | string;
};
export default function Select(props: {
    /**
     * If true, the element is not interactive.
     */
    disabled?: boolean;
    /**
     * Instructive/helpful text to be displayed below the select, e.g.:
     *   "Your password must be 6 characters or more"
     *   "Unfortunately, we cannot accept JCB cards at this time"
     *
     * Note: If the element's invalid prop is true, this text will display red.
     */
    hint?: string;
    /**
     * Forward a ref to the element. Use this prop to create an uncontrolled
     * component.
     */
    inputRef?: React.Ref<HTMLSelectElement>;
    /**
     * Whether the element is in an invalid state (or part of a group of elements
     * that are).
     */
    invalid: boolean;
    /**
     * A label for the whole element, describing the category of options. For
     * example: for a dropdown prompting the user to choose their state of
     * residence, the label could be "US State".
     */
    label: string;
    /**
     * A function that will be called when the user's selection changes.
     */
    onChange?: (event: React.ChangeEvent) => void;
    /**
     * The options to display in the dropdown. Each has a label, which will display
     * to the user, and a value, which can be different than the label. For
     * example: in a dropdown to choose their state of residence, the label might
     * be the state name ("New Hampshire") and the value could be what's saved in
     * the database, like a postal code ("NH").
     */
    options: OptionType[];
    /**
     * A non-selectable option, which will be the initial value if none is
     * provided. Use this as an example or instruction, e.g., "Pick a state". Note
     * that placeholders are only styled correctly when "required" is set to true
     * (this is a browser limitation).
     */
    placeholder?: string;
    /**
     * Whether a selection is required.
     */
    required?: boolean;
    /**
     * The value of the selected option. Use this prop to create a controlled
     * component.
     */
    value?: number | string;
}): JSX.Element;
export {};
//# sourceMappingURL=Select.d.ts.map