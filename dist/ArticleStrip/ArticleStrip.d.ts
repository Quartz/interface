export default ArticleStrip;
declare function ArticleStrip({ amp, dateGmt, edition, kicker, size, sponsor, thumbnailUrl, title, }: {
    amp: any;
    dateGmt: any;
    edition: any;
    kicker: any;
    size: any;
    sponsor: any;
    thumbnailUrl: any;
    title: any;
}): JSX.Element;
declare namespace ArticleStrip {
    namespace propTypes {
        const amp: PropTypes.Validator<boolean>;
        const dateGmt: PropTypes.Requireable<string>;
        const edition: PropTypes.Requireable<string>;
        const kicker: PropTypes.Requireable<string>;
        const size: PropTypes.Requireable<string>;
        const sponsor: PropTypes.Requireable<string>;
        const thumbnailUrl: PropTypes.Requireable<string>;
        const title: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        const amp_1: boolean;
        export { amp_1 as amp };
        const edition_1: string;
        export { edition_1 as edition };
        const size_1: string;
        export { size_1 as size };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=ArticleStrip.d.ts.map