import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

const defaultProps = {
	children: 'Test content',
};

function setup ( overrides = {} ) {
	return shallow( <Icon {...defaultProps} {...overrides} /> );
}

describe( 'Icon', () => {
	it( 'renders', () => {
		const wrapper = setup();

		expect( wrapper.text() ).toEqual( 'Test content' );
	} );
} );
