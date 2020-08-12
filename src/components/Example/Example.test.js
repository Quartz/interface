import React from 'react';
import { shallow } from 'enzyme';
import Example from './Example';

const defaultProps = {
	text: 'Test content',
};

const setup = overrides => shallow( <Example {...defaultProps} {...overrides} /> );

describe( 'Example', () => {
	it( 'renders', () => {
		const wrapper = setup();

		expect( wrapper.text() ).toEqual( 'Test content' );
	} );
} );

