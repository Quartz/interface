import React from 'react';
import PropTypes from 'prop-types';
import ColorScheme, { schemes } from '../../../src/components/ColorScheme/ColorScheme';

/**
 * Decorator that supplies a ColorScheme corresponding to the user's theme
 * selection. All stories are automatically wrapped.
 *
 * https://github.com/tonai/storybook-addon-themes#custom-decorator
 */
function StoryTheme ( { children, themeName } ) {
	let scheme = schemes.LIGHT;

	if ( 'Dark' === themeName ) {
		scheme = schemes.DARK;
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
	themeName: PropTypes.oneOf( [ 'Dark', 'Light' ] ).isRequired,
};

export default StoryTheme;
