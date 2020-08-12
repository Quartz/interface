import React from 'react';
import { shallow } from 'enzyme';
import BadgeGroup from './BadgeGroup';

const defaultProps = {
	text: 'Test content',
};

const setup = overrides => shallow( <BadgeGroup {...defaultProps} {...overrides} /> );

describe( 'BadgeGroup', () => {
	it( 'renders', () => {
		const wrapper = setup();

		expect( wrapper.text() ).toEqual( 'Test content' );
	} );
} );

