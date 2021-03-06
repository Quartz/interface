import React from 'react';
import { shallow } from 'enzyme';
import Example from './Example';

const defaultProps = {
	children: 'Test content',
};

function setup ( overrides = {} ) {
	return shallow( <Example {...defaultProps} {...overrides} /> );
}

describe( 'Example', () => {
	it( 'renders', () => {
		const wrapper = setup();

		expect( wrapper.text() ).toEqual( 'Test content' );
	} );
} );
