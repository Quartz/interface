import React from 'react';
import PropTypes from 'prop-types';
import '!style-loader!css-loader!sass-loader!./MockAppDecorator.scss';

const MockAppDecorator = ( { children } ) => (
	<main className="fonts-loaded">{children}</main>
);

MockAppDecorator.propTypes = {
	children: PropTypes.node,
};

export default MockAppDecorator;
