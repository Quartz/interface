export default RadioButton;
declare function RadioButton({ checked, children, disabled, display, name, onChange, required, }: {
    checked: any;
    children: any;
    disabled: any;
    display: any;
    name: any;
    onChange: any;
    required: any;
}): JSX.Element;
declare namespace RadioButton {
    namespace propTypes {
        const checked: PropTypes.Requireable<boolean>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const disabled: PropTypes.Validator<boolean>;
        const display: PropTypes.Requireable<string>;
        const name: PropTypes.Requireable<string | number>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const required: PropTypes.Validator<boolean>;
    }
    namespace defaultProps {
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const display_1: string;
        export { display_1 as display };
        const required_1: boolean;
        export { required_1 as required };
    }
}
import PropTypes from "prop-types";
