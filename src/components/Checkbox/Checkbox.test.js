import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

const setup = overrides => {
	const defaultProps = {
		onChange: jest.fn(),
	};

	const props = {
		...defaultProps,
		...overrides,
	};

	const wrapper = shallow( <Checkbox {...props} /> );

	return { props, wrapper };
};

describe( 'Checkbox', () => {
	it( 'Calls onChange when the input checked state changes', () => {
		const { props, wrapper } = setup();

		wrapper.find( 'input' ).simulate( 'change' );
		expect( props.onChange ).toBeCalled();
	} );
} );
