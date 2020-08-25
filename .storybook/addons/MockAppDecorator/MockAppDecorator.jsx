import React from 'react';
import PropTypes from 'prop-types';
import '!style-loader!css-loader!sass-loader!./MockAppDecorator.scss';

/**
 * A decorator that provides baseline conditions required to render stories. All
 * stories are automatically wrapped (see .storybook/preview.js).
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators
 */
const MockAppDecorator = ( { children } ) => (
	<main className="fonts-loaded">{children}</main>
);

MockAppDecorator.propTypes = {
	children: PropTypes.node,
};

export default MockAppDecorator;
