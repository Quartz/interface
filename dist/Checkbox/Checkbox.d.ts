export default Checkbox;
declare function Checkbox({ ariaDescribedBy, ariaLabel, ariaLabelledBy, checked, children, disabled, id, invalid, onChange, required, size, }: {
    ariaDescribedBy: any;
    ariaLabel: any;
    ariaLabelledBy: any;
    checked: any;
    children: any;
    disabled: any;
    id: any;
    invalid: any;
    onChange: any;
    required: any;
    size: any;
}): JSX.Element;
declare namespace Checkbox {
    namespace propTypes {
        const ariaDescribedBy: PropTypes.Requireable<string>;
        const ariaLabel: PropTypes.Requireable<string>;
        const ariaLabelledBy: PropTypes.Requireable<string>;
        const checked: PropTypes.Requireable<boolean>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const disabled: PropTypes.Validator<boolean>;
        const id: PropTypes.Requireable<string>;
        const invalid: PropTypes.Requireable<boolean>;
        const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const required: PropTypes.Validator<boolean>;
        const size: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const invalid_1: boolean;
        export { invalid_1 as invalid };
        export function onChange_1(): void;
        export { onChange_1 as onChange };
        const required_1: boolean;
        export { required_1 as required };
        const size_1: string;
        export { size_1 as size };
    }
}
import PropTypes from "prop-types";
