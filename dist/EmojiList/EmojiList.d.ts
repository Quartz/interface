export default EmojiList;
declare function EmojiList({ bullets, children, innerHtml, renderStyles, tagName, }: {
    bullets: any;
    children: any;
    innerHtml: any;
    renderStyles: any;
    tagName: any;
}): JSX.Element;
declare namespace EmojiList {
    namespace propTypes {
        const bullets: PropTypes.Validator<(string | null | undefined)[]>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const innerHtml: PropTypes.Requireable<string>;
        const renderStyles: PropTypes.Requireable<(...args: any[]) => any>;
        const tagName: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        const bullets_1: never[];
        export { bullets_1 as bullets };
        const tagName_1: string;
        export { tagName_1 as tagName };
    }
}
import PropTypes from "prop-types";
//# sourceMappingURL=EmojiList.d.ts.map