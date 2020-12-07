export default PageHeader;
declare function PageHeader({ border, children, intro, showPadding, tagline, title, }: {
    border: any;
    children: any;
    intro: any;
    showPadding: any;
    tagline: any;
    title: any;
}): JSX.Element;
declare namespace PageHeader {
    namespace propTypes {
        const border: PropTypes.Validator<boolean>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const intro: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const showPadding: PropTypes.Validator<boolean>;
        const tagline: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const title: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        const border_1: boolean;
        export { border_1 as border };
        const showPadding_1: boolean;
        export { showPadding_1 as showPadding };
    }
}
import PropTypes from "prop-types";
