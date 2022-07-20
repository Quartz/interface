/// <reference types="react" />
/**
 * Export some color schemes so that pages can request them specifically.
 * Otherwise we'll provide a context-aware default.
 *
 * If you have custom hardcoded color schemes that can be used on qz.com,
 * define it here. Other color schemes are defined in the CMS (e.g., for a
 * series or guide).
 *
 * A color scheme contains at least four colors.
 *
 * 1. Typography: Default font color.
 * 2. Background 1: Background color of the page.
 * 3. Accent: The color of focused interactive borders, accented color blocks,
 *    article text links, certain headings and more.
 * 4. UI: The color of the site logo and other chrome in the navigation and
 *    around the site.
 *
 * Optional:
 *
 * 5. Interactive border: border color used for interactive borders, e.g.,
 *    checkboxes, text inputs and other form elements. Defaults to Typography
 *    with 30% alpha channel.
 * 6. Background 2: a tint of the background color, e.g. for alternating page
 *    sections. Defaults to Background 1.
 * 7. Background 3: a second tint of the background color. Defaults to
 *    Typography with 10% alpha channel.
 * 8. Highlight: color used to highlight text or other UI elements for emphasis.
 * 9. Typography inverted: inverted type color used in overlaid elements.
 * 10. Navigation background: background of navigation elements. Defaults
 *     to Background 1.
 * 11. Navigation typography: Type color of navigation elements. Defaults to Typography.
 * 12. Navigation accent: Accent color of navigation elements. Defaults to Accent.
 */
export declare const schemes: {
    LIGHT: {
        accent: string;
        background1: string;
        background2: string;
        highlight: string;
        typography: string;
        typographyInverted: string;
    };
    DARK: {
        accent: string;
        background1: string;
        background2: string;
        highlight: string;
        typography: string;
        typographyInverted: string;
    };
    PRINT: {
        accent: string;
        background1: string;
        typography: string;
    };
};
export default function ColorScheme(props: {
    /**
     * The color used for borders of focused interactive elements, accented
     * color blocks, article text links, certain headings, and more.
     */
    accent: string;
    /**
     * The color used for borders of focused interactive elements, accented
     * color blocks, article text links, certain headings, etc. on navigation.
     * Defaults to `accent`.
     */
    accentNavigation?: string;
    /**
     * Primary background color of the page.
     */
    background1: string;
    /**
     * A tint of the background color, e.g., for alternating page sections.
     * Defaults to `background1`.
     */
    background2?: string;
    /**
     * Background of the navigation.
     * Defaults to `background1`.
     */
    backgroundNavigation?: string;
    /**
     * An optional render prop if you need to use the CSS in a non-HTML context or
     * if you need to provide it to an external dependency like React Helmet.
     */
    children?: (css: string) => JSX.Element;
    /**
     * The background color used for highlighting text or other UI elements for
     * emphasis. Defaults to `typography` with 15% alpha channel.
     */
    highlight?: string;
    /**
     * The color scheme type. If a value other than `default` or `print` is
     * provided, the definition will be wrapped in a `prefers-color-scheme`
     * media query.
     */
    type: 'dark' | 'default' | 'light' | 'print';
    /**
     * Default type color.
     */
    typography: string;
    /**
     * Inverted type color, for use in overlaid elements. Defaults to `background1`.
     */
    typographyInverted?: string;
    /**
     * Type color of the navigation.
     */
    typographyNavigation?: string;
}): JSX.Element;
//# sourceMappingURL=ColorScheme.d.ts.map