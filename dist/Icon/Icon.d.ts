import React from 'react';
declare const svgIcons: {
    readonly apple: (props: any) => JSX.Element;
    readonly 'arrow-right': (props: any) => JSX.Element;
    readonly check: (props: any) => JSX.Element;
    readonly compass: (props: any) => JSX.Element;
    readonly envelope: (props: any) => JSX.Element;
    readonly facebook: (props: any) => JSX.Element;
    readonly linkedin: (props: any) => JSX.Element;
    readonly search: (props: any) => JSX.Element;
    readonly twitter: (props: any) => JSX.Element;
    readonly youtube: (props: any) => JSX.Element;
};
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
    name: keyof typeof svgIcons;
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
    className?: React.HTMLAttributes<HTMLElement>['className'];
}): JSX.Element;
export {};
//# sourceMappingURL=Icon.d.ts.map