export default Image;
declare function Image({ alt, amp, className, fallbackHeight: height, fallbackWidth: width, loading, sizes, src, srcSet, title, }: {
    alt: any;
    amp: any;
    className: any;
    fallbackHeight: any;
    fallbackWidth: any;
    loading: any;
    sizes: any;
    src: any;
    srcSet: any;
    title: any;
}): JSX.Element;
declare namespace Image {
    namespace propTypes {
        const alt: PropTypes.Validator<string>;
        const amp: PropTypes.Validator<boolean>;
        const className: PropTypes.Requireable<string>;
        const fallbackHeight: PropTypes.Validator<number>;
        const fallbackWidth: PropTypes.Validator<number>;
        const loading: PropTypes.Validator<string>;
        const sizes: PropTypes.Requireable<string>;
        const src: PropTypes.Validator<string>;
        const srcSet: PropTypes.Requireable<string>;
        const title: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const amp_1: boolean;
        export { amp_1 as amp };
        const loading_1: string;
        export { loading_1 as loading };
    }
}
import PropTypes from "prop-types";
