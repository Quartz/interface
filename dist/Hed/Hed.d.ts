export default Hed;
declare function Hed({ children, size, }: {
    children: any;
    size: any;
}): JSX.Element;
declare namespace Hed {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const size: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        const size_1: string;
        export { size_1 as size };
    }
}
import PropTypes from "prop-types";
