import React from 'react';
import PropTypes from 'prop-types';
import ColorScheme, { schemes } from '../../../src/components/ColorScheme/ColorScheme';

/*
 * Decorator to supply a ColorScheme corresponding to the user's theme
 * selection. All story components are automatically wrapped.
 *
 * https://github.com/tonai/storybook-addon-themes#custom-decorator
 */
function StoryTheme ( { children, themeName } ) {
	let scheme = schemes.LIGHT;

	if ( 'Dark' === themeName ) {
		scheme = schemes.DARK;
	}

	if ( 'At Work Light' === themeName ) {
		scheme = schemes.WORK_LIGHT;
	}

	if ( 'At Work Dark' === themeName ) {
		scheme = schemes.WORK_DARK;
	}

	return (
		<>
			<ColorScheme
				{...scheme}
				type="default"
			/>
			{children}
		</>
	);
}

StoryTheme.propTypes = {
	children: PropTypes.node,
	themeName: PropTypes.oneOf( [ 'At Work Dark', 'At Work Light', 'Dark', 'Light' ] ).isRequired,
};

export default StoryTheme;
