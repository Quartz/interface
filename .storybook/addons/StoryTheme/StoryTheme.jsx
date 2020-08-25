import React from 'react';
import PropTypes from 'prop-types';
import ColorScheme, { schemes } from '../../../src/components/ColorScheme/ColorScheme';

/*
	A decorator component that provides baseline conditions required to
	display library components. All story components are automatically
	wrapped (see .storybook/preview.js)

	https://storybook.js.org/docs/addons/introduction/#1-decorators
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
	themeName: PropTypes.string.isRequired,
};

export default StoryTheme;
