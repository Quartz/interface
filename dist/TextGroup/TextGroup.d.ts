import React from 'react';
export default function TextGroup(props: {
    /**
     * Whether this text group represents an article, which influences color and
     * other formatting.
     */
    isArticle?: boolean;
    /**
     * Kicker text. This accepts a string or a node—most notably to accommodate
     * bulletins, which have multicolor kickers and sometimes incorporate images.
     */
    kicker?: React.ReactNode;
    /**
     * Size preset for the text group. Adjusts the font size and spacing
     * of the headline (Hed component).
     */
    size: 'small' | 'medium' | 'large' | 'extra-large';
    /**
     * Tagline to appear beneath the title.
     */
    tagline?: string;
    /**
     * Title.
     */
    title: string;
}): JSX.Element;
