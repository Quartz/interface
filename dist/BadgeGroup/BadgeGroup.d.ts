export default BadgeGroup;
declare function BadgeGroup({ imageUrl, kicker, size, tagline, title, }: {
    imageUrl: any;
    kicker: any;
    size: any;
    tagline: any;
    title: any;
}): JSX.Element;
declare namespace BadgeGroup {
    namespace propTypes {
        const imageUrl: PropTypes.Requireable<string>;
        const kicker: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const size: PropTypes.Requireable<string>;
        const tagline: PropTypes.Requireable<string>;
        const title: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        const size_1: string;
        export { size_1 as size };
    }
}
import PropTypes from "prop-types";
