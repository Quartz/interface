export default Button;
export function ButtonLabel({ children, inline, variant, }: {
    children: any;
    inline: any;
    variant: any;
}): JSX.Element;
export namespace ButtonLabel {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const inline: PropTypes.Validator<boolean>;
        const variant: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        const inline_1: boolean;
        export { inline_1 as inline };
        const variant_1: string;
        export { variant_1 as variant };
    }
}
declare function Button({ ariaChecked, children, ariaDescribedBy, disabled, inline, loading, on, onClick, role, type, variant, }: {
    ariaChecked: any;
    children: any;
    ariaDescribedBy: any;
    disabled: any;
    inline: any;
    loading: any;
    on: any;
    onClick: any;
    role: any;
    type: any;
    variant: any;
}): JSX.Element;
declare namespace Button {
    export namespace propTypes_1 {
        export const ariaChecked: PropTypes.Requireable<boolean>;
        export const ariaDescribedBy: PropTypes.Requireable<string>;
        const children_1: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        export { children_1 as children };
        export const disabled: PropTypes.Validator<boolean>;
        const inline_2: PropTypes.Validator<boolean>;
        export { inline_2 as inline };
        export const loading: PropTypes.Validator<boolean>;
        export const on: PropTypes.Requireable<string>;
        export const onClick: PropTypes.Validator<(...args: any[]) => any>;
        export const role: PropTypes.Requireable<string>;
        export const type: PropTypes.Validator<string>;
        const variant_2: PropTypes.Requireable<string>;
        export { variant_2 as variant };
    }
    export { propTypes_1 as propTypes };
    export namespace defaultProps_1 {
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const inline_3: boolean;
        export { inline_3 as inline };
        const loading_1: boolean;
        export { loading_1 as loading };
        export function onClick_1(): void;
        export { onClick_1 as onClick };
        const type_1: string;
        export { type_1 as type };
    }
    export { defaultProps_1 as defaultProps };
}
import PropTypes from "prop-types";
