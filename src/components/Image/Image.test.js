import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

const defaultProps = {
	alt: '',
	amp: false,
	height: 100,
	sizes: '200w',
	src: 'https://example.com/cheezburger@100.jpeg',
	srcSet: 'https://example.com/cheezburger@200.jpeg 200w',
	width: 200,
};

const setup = overrides => shallow( <Image {...defaultProps} {...overrides} /> );

describe( 'Image', () => {
	it( 'renders an img by default', () => {
		const wrapper = setup();

		expect( wrapper.find( 'ImageAmp' ) ).toHaveLength( 0 );
		expect( wrapper.find( 'img' ) ).toHaveLength( 1 );

		expect( wrapper.find( 'img' ).props().src ).toEqual( defaultProps.src );
	} );

	it( 'renders an AMP img when amp is true', () => {
		const wrapper = setup( { amp: true } );

		expect( wrapper.find( 'img' ) ).toHaveLength( 0 );
		expect( wrapper.find( 'ImageAmp' ) ).toHaveLength( 1 );

		expect( wrapper.find( 'ImageAmp' ).props().src ).toEqual( defaultProps.src );
	} );
} );

