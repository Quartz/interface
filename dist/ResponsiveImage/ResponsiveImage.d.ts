export default ResponsiveImage;
declare function ResponsiveImage({ alt, amp, className, fallbackHeight, fallbackWidth, sizes, src, widthRange, }: {
    alt: any;
    amp: any;
    className: any;
    fallbackHeight: any;
    fallbackWidth: any;
    sizes: any;
    src: any;
    widthRange: any;
}): JSX.Element;
declare namespace ResponsiveImage {
    namespace propTypes {
        const alt: PropTypes.Validator<string>;
        const amp: PropTypes.Validator<boolean>;
        const className: PropTypes.Requireable<string>;
        const fallbackHeight: PropTypes.Validator<number>;
        const fallbackWidth: PropTypes.Validator<number>;
        const sizes: PropTypes.Requireable<string>;
        const src: PropTypes.Validator<string>;
        const widthRange: PropTypes.Validator<(number | null | undefined)[]>;
    }
    namespace defaultProps {
        const amp_1: boolean;
        export { amp_1 as amp };
    }
}
import PropTypes from "prop-types";
