import React from 'react';
import { makeDecorator } from '@storybook/addons';
import { color } from '@quartz/styles/dictionaries/colors.json';
import ColorScheme, { schemes } from '../../src/components/ColorScheme/ColorScheme';
import styles from '../styles/global.scss';

export const backgrounds = {
	default: 'Light',
	values: [
		{
			name: 'Light',
			value: color[ 'off-white' ].value,
		},
		{
			name: 'Dark',
			value: color[ 'dark-blue' ].value,
		},
	],
};

/**
 * Currently there are only two themes, but there could be more. These values
 * must match the values provided in the "backgrounds" parameter above, which are
 * used to configure the backgrounds addon in .storybook/preview.js.
 */
function getColorScheme ( backgroundValue: string ) {
	switch ( backgroundValue ) {
		case color['dark-blue'].value:
			return schemes.DARK;
	}

	// Default color scheme.
	return schemes.LIGHT;
}

/**
 * A decorator that provides a ColorScheme that matches the background selected
 * by the user. It only does so in the "Canvas" view since stories in Docs are
 * not isolated in iframes.
 */
export default makeDecorator( {
	name: 'withColorScheme',
	parameterName: 'colorScheme',
	wrapper: ( storyFn, context ) => {
		// Initially the background is undefined, until / unless the user makes a
		// selection.
		const scheme = getColorScheme( context.globals?.backgrounds?.value );

		return (
			<main className={styles.main}>
				{
					'story' === context.viewMode &&
						<ColorScheme
							{...scheme}
							type="default"
						/>
				}
				{storyFn( context )}
			</main>
		);
	}
} );
