import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router-dom';
import '!style-loader!css-loader!sass-loader!./MockAppDecorator.scss';

/*
	A decorator component that provides baseline conditions required to
	display library components. All story components are automatically
	wrapped (see .storybook/preview.js)

	https://storybook.js.org/docs/addons/introduction/#1-decorators
*/
const MockAppDecorator = ( { children } ) => (
	<MemoryRouter>
		<main className="fonts-loaded">{children}</main>
	</MemoryRouter>
);

MockAppDecorator.propTypes = {
	children: PropTypes.node,
};

export default MockAppDecorator;
