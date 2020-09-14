import React from 'react';
import { shallow } from 'enzyme';
import Pill from './Pill';

const defaultProps = {
	text: 'Test content',
};

const setup = overrides => shallow( <Pill {...defaultProps} {...overrides} /> );

describe( 'Pill', () => {
	it( 'renders', () => {
		const wrapper = setup();

		expect( wrapper.text() ).toEqual( 'Test content' );
	} );
} );
