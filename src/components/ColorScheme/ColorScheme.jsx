import React from 'react';
import PropTypes from 'prop-types';
import {
	hexToRGB,
	minifyCss,
} from '@quartz/js-utils';
import { color } from '@quartz/styles/dictionaries/colors.json';

// Reshape the color dictionary JSON for easier application
const colors = Object.keys( color ).reduce( ( acc, colorName ) => ( {
	...acc,
	[ colorName ]: color[ colorName ].value,
} ), {} );

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
 * 3. Accent 1: The color of focused interactive borders, accented color blocks,
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
 * 8. Navigation background: background of the navigation and tab bar. Defaults
 *    to Background 1.
 * 9. Highlight: color used to highlight text or other UI elements for emphasis.
 */
export const schemes = {
	LIGHT: {
		accent: colors[ 'accent-blue' ],
		background1: colors[ 'off-white' ],
		background2: colors.white,
		highlight: createRgba( ...hexToRGB( colors[ 'accent-blue' ] ), 0.2 ),
		typography: colors.black,
	},
	DARK: {
		accent: colors[ 'accent-blue-dark' ],
		background1: colors[ 'dark-blue' ],
		background2: colors[ 'dark-blue' ],
		highlight: createRgba( ...hexToRGB( colors.pink ), 0.25 ),
		typography: colors.white,
	},
	PRINT: {
		accent: '#000',
		background1: 'transparent',
		typography: '#000',
	},
};

/**
 * Helper function to construct a CSS rgba value.
 *
 * @param  {Number} r Red value.
 * @param  {Number} g Green value.
 * @param  {Number} b Blue value.
 * @param  {Number} a Alpha value.
 * @return {String}
 */
function createRgba( r, g, b, a ) {
	return `rgba( ${r}, ${g}, ${b}, ${a})`;
}

function getCss ( {
	accent,
	background1,
	background2,
	highlight,
	type,
	typography,
} ) {
	// Print color schemes are simpler.
	if ( 'print' === type ) {
		return `
			@media print {
				:root {
					--color-accent: ${accent};
					--color-background-1: ${background1};
					--color-background-1-transparent: transparent;
					--color-background-2: transparent;
					--color-background-3: transparent;
					--color-background-4: transparent;
					--color-background-navigation: transparent;
					--color-border-decorative: ${typography};
					--color-border-interactive: ${typography};
					--color-highlight: transparent;
					--color-typography: ${typography};
					--color-typography-faint: ${typography};
				}
			}`;
	}

	// Colors derived from the typography color:
	const typographyRgb = hexToRGB( typography );
	const typographyFaint = createRgba( ...typographyRgb, 0.7 ); // A fainter tint of the typography color, eg. for descriptions or subheadings.
	const borderDecorative = createRgba( ...typographyRgb, 0.15 );
	const borderInteractive = createRgba( ...typographyRgb, 0.3 );
	const background3 = createRgba( ...typographyRgb, 0.15 );
	const background4 = createRgba( ...typographyRgb, 0.07 );

	// Colors derived from the background color:
	const backgroundRgb = hexToRGB( background1 );
	const fakeTransparent = createRgba( ...backgroundRgb, 0.0001 ); // Fake transparent (i.e. for the paywall gradient)
	const backgroundModal = createRgba( ...backgroundRgb, 0.98 );

	const css = `
			:root {
				--color-accent: ${accent};
				--color-background-1: ${background1};
				--color-background-1-transparent: ${fakeTransparent};
				--color-background-2: ${background2 || background1};
				--color-background-3: ${background3};
				--color-background-4: ${background4};
				--color-background-modal: ${backgroundModal};
				--color-border-decorative: ${borderDecorative};
				--color-border-interactive: ${borderInteractive};
				--color-highlight: ${highlight || borderDecorative};
				--color-typography: ${typography};
				--color-typography-faint: ${typographyFaint};
			}
		`;

	if ( 'default' !== type ) {
		return `@media (prefers-color-scheme: ${type}) { ${css} }`;
	}

	return css;
}

function ColorScheme( {
	accent,
	background1,
	background2,
	highlight,
	type,
	typography,
} ) {
	// Destructuring and reassembling ensures we don't have any hidden
	// dependencies in our props (and pleases the linter).
	const props = {
		accent,
		background1,
		background2,
		highlight,
		type,
		typography,
	};

	return <style type="text/css">{minifyCss( getCss( props ) )}</style>;
}

ColorScheme.propTypes = {
	/**
	 * The color used for borders of focused interactive elements, accented
	 * color blocks, article text links, certain headings, and more.
	 */
	accent: PropTypes.string.isRequired,

	/**
	 * Primary background color of the page.
	 */
	background1: PropTypes.string.isRequired,

	/**
	 * A tint of the background color, e.g., for alternating page sections.
	 * Defaults to `background1`.
	 */
	background2: PropTypes.string,

	/**
	 * The background color used for highlighting text or other UI elements for
	 * emphasis. Defaults to `typography` with 15% alpha channel.
	 */
	highlight: PropTypes.string,

	/**
	 * The color scheme type. If a value other than `default` or `print` is
	 * provided, the definition will be wrapped in a `prefers-color-scheme`
	 * media query.
	 */
	type: PropTypes.oneOf( [ 'dark', 'default', 'light', 'print' ] ).isRequired,

	/**
	 * Default type color.
	 */
	typography: PropTypes.string.isRequired,
};

export default ColorScheme;
