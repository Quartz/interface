import React from 'react';
import { shallow } from 'enzyme';
import Pill from './Pill';

const defaultProps = {
	children: 'Test content',
};

const setup = overrides => shallow( <Pill {...defaultProps} {...overrides} /> );

describe( 'Pill', () => {
	it( 'renders', () => {
		const wrapper = setup();

		expect( wrapper.text() ).toEqual( 'Test content' );
	} );

	it( 'renders an icon when passed', () => {
		const wrapper = setup( { icon: '✦' } );

		expect( wrapper.text() ).toEqual( '✦Test content' );
	} );
} );
