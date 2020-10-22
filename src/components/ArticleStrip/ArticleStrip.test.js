import React from 'react';
import { shallow } from 'enzyme';
import ArticleStrip from './ArticleStrip';

const defaultProps = {
	children: 'Test content',
};

const setup = overrides => shallow( <ArticleStrip {...defaultProps} {...overrides} /> );

describe( 'ArticleStrip', () => {
	it( 'renders', () => {
		const wrapper = setup();

		expect( wrapper.text() ).toEqual( 'Test content' );
	} );
} );
