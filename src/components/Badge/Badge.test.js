import React from 'react';
import { shallow } from 'enzyme';
import Badge from './Badge';

const defaultProps = {
	text: 'Test content',
};

const setup = overrides => shallow( <Badge {...defaultProps} {...overrides} /> );

describe( 'Badge', () => {
	it( 'renders', () => {
		const wrapper = setup();

		expect( wrapper.text() ).toEqual( 'Test content' );
	} );
} );

