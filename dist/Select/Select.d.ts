export default Select;
declare function Select({ disabled, hint, invalid, label, onChange, options, placeholder, required, value, }: {
    disabled: any;
    hint: any;
    invalid: any;
    label: any;
    onChange: any;
    options: any;
    placeholder: any;
    required: any;
    value: any;
}): JSX.Element;
declare namespace Select {
    namespace propTypes {
        const disabled: PropTypes.Validator<boolean>;
        const hint: PropTypes.Requireable<string>;
        const invalid: PropTypes.Validator<boolean>;
        const label: PropTypes.Validator<string>;
        const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const options: PropTypes.Validator<(PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
            value: PropTypes.Validator<string | number>;
        }> | null | undefined)[]>;
        const placeholder: PropTypes.Requireable<string>;
        const required: PropTypes.Validator<boolean>;
        const value: PropTypes.Requireable<string | number>;
    }
    namespace defaultProps {
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const required_1: boolean;
        export { required_1 as required };
        const value_1: string;
        export { value_1 as value };
    }
}
import PropTypes from "prop-types";
