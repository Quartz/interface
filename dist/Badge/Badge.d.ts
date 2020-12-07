export default Badge;
declare function Badge({ alt, imageUrl, size, }: {
    alt: any;
    imageUrl: any;
    size: any;
}): JSX.Element;
declare namespace Badge {
    namespace propTypes {
        const alt: PropTypes.Validator<string>;
        const imageUrl: PropTypes.Validator<string>;
        const size: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        const size_1: string;
        export { size_1 as size };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=Badge.d.ts.map