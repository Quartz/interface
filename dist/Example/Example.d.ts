export default Example;
declare function Example({ children, }: {
    children: any;
}): JSX.Element;
declare namespace Example {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    }
    namespace defaultProps {
        const children_1: string;
        export { children_1 as children };
    }
}
import PropTypes from "prop-types";
