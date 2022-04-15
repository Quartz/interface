import React from 'react';
import {
	hexToRGB,
	minifyCss,
} from '@quartz/js-utils';
import colors from '@quartz/styles/dictionaries/colors.json';

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
export const schemes = {
	LIGHT: {
		accent: colors.color[ 'accent-blue' ].value,
		background1: colors.color[ 'off-white' ].value,
		background2: colors.color.white.value,
		highlight: createRgba( ...hexToRGB( colors.color[ 'accent-blue' ].value ), 0.2 ),
		typography: colors.color.black.value,
		typographyInverted: colors.color.white.value,
	},
	DARK: {
		accent: colors.color[ 'accent-blue-dark' ].value,
		background1: colors.color[ 'dark-blue' ].value,
		background2: colors.color[ 'mid-dark-blue' ].value,
		highlight: createRgba( ...hexToRGB( colors.color.pink.value ), 0.25 ),
		typography: colors.color.white.value,
		typographyInverted: colors.color.black.value,
	},
	PRINT: {
		accent: '#000',
		background1: 'transparent',
		typography: '#000',
	},
};

/**
 * Helper function to construct a CSS rgba value.
 */
function createRgba( r: number, g: number, b: number, a: number ): string {
	return `rgba( ${r}, ${g}, ${b}, ${a})`;
}

function getCss ( {
	accent,
	accentNavigation,
	background1,
	background2,
	backgroundNavigation,
	highlight,
	type,
	typography,
	typographyInverted,
	typographyNavigation,
} ) {
	// Print color schemes are simpler.
	if ( 'print' === type ) {
		return `
			@media print {
				:root {
					--color-accent: ${accent};
					--color-accent-navigation: ${accent};
					--color-background-1: ${background1};
					--color-background-1-transparent: transparent;
					--color-background-2: transparent;
					--color-background-3: transparent;
					--color-background-4: transparent;
					--color-background-navigation: transparent;
					--color-background-navigation-faint: transparent;
					--color-border-decorative: ${typography};
					--color-border-interactive: ${typography};
					--color-highlight: transparent;
					--color-typography: ${typography};
					--color-typography-faint: ${typography};
					--color-typography-inverted: ${typographyInverted || background1};
					--color-typography-navigation: ${typography};
					--color-typography-navigation-faint: ${typography};
				}
			}`;
	}

	// Colors derived from the typography color:
	const typographyRgb = hexToRGB( typography );
	const typographyNavigationRgb = hexToRGB( typographyNavigation || typography );
	const backgroundNavigationRgb = hexToRGB( backgroundNavigation || background1 );
	const typographyFaint = createRgba( ...typographyRgb, 0.7 ); // A fainter tint of the typography color, eg. for descriptions or subheadings.
	const typographyNavigationFaint = createRgba( ...typographyNavigationRgb, 0.7 ); // A fainter tint of the typography-navigation color, eg. for descriptions or subheadings under navigation elements.
	const borderDecorative = createRgba( ...typographyRgb, 0.15 );
	const borderInteractive = createRgba( ...typographyRgb, 0.3 );
	const background3 = createRgba( ...typographyRgb, 0.15 );
	const background4 = createRgba( ...typographyRgb, 0.07 );
	const backgroundNavigationFaint = backgroundNavigation ? createRgba( ...backgroundNavigationRgb, 0.98 ) : background2; // A fainter tint of the navigation background color, eg. nav flyouts

	// Colors derived from the background color:
	const backgroundRgb = hexToRGB( background1 );
	const fakeTransparent = createRgba( ...backgroundRgb, 0.0001 ); // Fake transparent (i.e. for the paywall gradient)
	const backgroundModal = createRgba( ...backgroundRgb, 0.98 );

	const css = `
			:root {
				--color-accent: ${accent};
				--color-accent-navigation: ${accentNavigation || accent};
				--color-background-1: ${background1};
				--color-background-1-transparent: ${fakeTransparent};
				--color-background-2: ${background2 || background1};
				--color-background-3: ${background3};
				--color-background-4: ${background4};
				--color-background-navigation: ${backgroundNavigation || background1};
				--color-background-navigation-faint: ${backgroundNavigationFaint};
				--color-background-modal: ${backgroundModal};
				--color-border-decorative: ${borderDecorative};
				--color-border-interactive: ${borderInteractive};
				--color-highlight: ${highlight || borderDecorative};
				--color-typography: ${typography};
				--color-typography-faint: ${typographyFaint};
				--color-typography-inverted: ${typographyInverted || background1};
				--color-typography-navigation: ${typographyNavigation || typography};
				--color-typography-navigation-faint: ${typographyNavigationFaint};
			}
		`;

	if ( 'default' !== type ) {
		return `@media (prefers-color-scheme: ${type}) { ${css} }`;
	}

	return css;
}

export default function ColorScheme( props: {
	/**
	 * The color used for borders of focused interactive elements, accented
	 * color blocks, article text links, certain headings, and more.
	 */
	accent: string,

	 /**
	 * The color used for borders of focused interactive elements, accented
	 * color blocks, article text links, certain headings, etc. on navigation.
	 * Defaults to `accent`.
	 */
	accentNavigation?: string,

	/**
	 * Primary background color of the page.
	 */
	background1: string,

	/**
	 * A tint of the background color, e.g., for alternating page sections.
	 * Defaults to `background1`.
	 */
	background2?: string,

	/**
	 * Background of the navigation.
	 * Defaults to `background1`.
	 */
	backgroundNavigation?: string,

	/**
	 * An optional render prop if you need to use the CSS in a non-HTML context or
	 * if you need to provide it to an external dependency like React Helmet.
	 */
	children?: ( css: string ) => JSX.Element,

	/**
	 * The background color used for highlighting text or other UI elements for
	 * emphasis. Defaults to `typography` with 15% alpha channel.
	 */
	highlight?: string,

	/**
	 * The color scheme type. If a value other than `default` or `print` is
	 * provided, the definition will be wrapped in a `prefers-color-scheme`
	 * media query.
	 */
	type: 'dark' | 'default' | 'light' | 'print',

	/**
	 * Default type color.
	 */
	typography: string,

	/**
	 * Inverted type color, for use in overlaid elements. Defaults to `background1`.
	 */
	typographyInverted?: string,

	/**
	 * Type color of the navigation.
	 */
	typographyNavigation?: string,
} ) {
	// Reassembling ensures we don't have any hidden dependencies in our props (and
	// pleases the linter).
	const css = minifyCss(
		getCss( {
			accent: props.accent,
			accentNavigation: props.accentNavigation,
			background1: props.background1,
			background2: props.background2,
			backgroundNavigation: props.backgroundNavigation,
			highlight: props.highlight,
			type: props.type,
			typography: props.typography,
			typographyInverted: props.typographyInverted,
			typographyNavigation: props.typographyNavigation,
		} )
	);

	if ( props.children ) {
		return props.children( css );
	}

	return <style type="text/css">{css}</style>;
}
