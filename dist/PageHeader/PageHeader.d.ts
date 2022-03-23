import React from 'react';
declare type PageHeaderProps = {
    /**
     * Boolean to determine whether or not the component renders with a bottom border.
     */
    border?: boolean;
    /**
     * Child node to be rendered as the inner HTML of the component.
     */
    children?: React.ReactNode;
    /**
     * Smaller-print text used for the page subheader (renders in `<p>` tag).
     */
    intro?: React.ReactNode;
    /**
     * Boolean to determine whether to add padding to the header before the bottom border.
     */
    showPadding?: boolean;
    /**
     * Boolean to determine whether to add a top margin to the header.
     */
    showTopMargin?: boolean;
    /**
     * Very small-print text used directly below the title (e.g., as a dateline).
     */
    tagline?: React.ReactNode;
    /**
     * Required text for the h1 tag.
     */
    title: string;
};
declare const PageHeader: ({ border, children, intro, showPadding, showTopMargin, tagline, title, }: PageHeaderProps) => JSX.Element;
export default PageHeader;
//# sourceMappingURL=PageHeader.d.ts.map