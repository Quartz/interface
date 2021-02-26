/// <reference types="react" />
export default function Icon(props: {
    /**
     * Fill color of the icon to be rendered. Can be any HTML-valid
     * color string, e.g. hexadecimal, RGBA, CSS color names, etc.
     * If supplied, this value takes precedence over `props.themeColor`.
     */
    color?: string;
    /**
     * Name of the icon to be rendered.
     */
    name: ('apple' | 'arrow-right' | 'check' | 'compass' | 'envelope' | 'facebook' | 'linkedin' | 'twitter' | 'youtube');
    /**
     * Size of the icon to be rendered in pixels. Defaults to 20.
     */
    size?: number;
    /**
     * Theme color of the icon to be rendered. This will be mapped to a
     * CSS variable name declared by the ColorScheme component.
     * Defaults to 'typography'.
     */
    themeColor?: ('accent' | 'typography' | 'typography-faint');
}): JSX.Element | null;
//# sourceMappingURL=Icon.d.ts.map