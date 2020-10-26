import React from 'react';
import { mount } from 'enzyme';
import TextGroup from './TextGroup';

// Neat trick so that we don't have to export prop types separately.
type Props = React.ComponentProps<typeof TextGroup>;

const baseProps: Props = {
	size: 'medium',
	title: 'Hello, world!',
};

function setup ( props: Partial<Props> = {} ) {
	return mount( <TextGroup {...baseProps} {...props} /> );
}

describe( 'TextGroup', () => {
	it( 'does not render a kicker by default', () => {
		const wrapper = setup();
		expect( wrapper.find( 'Kicker' ) ).toHaveLength( 0 );
	} );

	it( 'renders a kicker when passed', () => {
		const wrapper = setup( { kicker: 'Great quarter, guys!' } );
		expect( wrapper.find( 'Kicker' ) ).toHaveLength( 1 );
	} );
} );
