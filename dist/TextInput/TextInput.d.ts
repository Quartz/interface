export default TextInput;
declare function TextInput({ ariaDescribedBy, autoComplete, disabled, hint, id, inputRef, invalid, isMultiline, label, maxLength, onBlur, onChange, onClick, onFocus, onInvalid, pattern, placeholder, readOnly, required, type, value, }: {
    ariaDescribedBy: any;
    autoComplete: any;
    disabled: any;
    hint: any;
    id: any;
    inputRef: any;
    invalid: any;
    isMultiline: any;
    label: any;
    maxLength: any;
    onBlur: any;
    onChange: any;
    onClick: any;
    onFocus: any;
    onInvalid: any;
    pattern: any;
    placeholder: any;
    readOnly: any;
    required: any;
    type: any;
    value: any;
}): JSX.Element;
declare namespace TextInput {
    namespace propTypes {
        const ariaDescribedBy: PropTypes.Requireable<string>;
        const autoComplete: PropTypes.Requireable<string>;
        const disabled: PropTypes.Validator<boolean>;
        const hint: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const id: PropTypes.Requireable<string>;
        const inputRef: PropTypes.Requireable<object>;
        const invalid: PropTypes.Validator<boolean>;
        const isMultiline: PropTypes.Validator<boolean>;
        const label: PropTypes.Requireable<string>;
        const maxLength: PropTypes.Requireable<number>;
        const onBlur: PropTypes.Validator<(...args: any[]) => any>;
        const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const onFocus: PropTypes.Validator<(...args: any[]) => any>;
        const onInvalid: PropTypes.Requireable<(...args: any[]) => any>;
        const pattern: PropTypes.Requireable<string>;
        const placeholder: PropTypes.Requireable<string>;
        const readOnly: PropTypes.Validator<boolean>;
        const required: PropTypes.Validator<boolean>;
        const type: PropTypes.Validator<string>;
        const value: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const autoComplete_1: string;
        export { autoComplete_1 as autoComplete };
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const invalid_1: boolean;
        export { invalid_1 as invalid };
        const isMultiline_1: boolean;
        export { isMultiline_1 as isMultiline };
        export function onBlur_1(): null;
        export { onBlur_1 as onBlur };
        export function onChange_1(): null;
        export { onChange_1 as onChange };
        export function onFocus_1(): null;
        export { onFocus_1 as onFocus };
        const readOnly_1: boolean;
        export { readOnly_1 as readOnly };
        const required_1: boolean;
        export { required_1 as required };
        const type_1: string;
        export { type_1 as type };
    }
}
import PropTypes from "prop-types";
