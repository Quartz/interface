import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

const setup = overrides => {
	const defaultProps = {
		onChange: jest.fn(),
	};

	const props = {
		...defaultProps,
		...overrides,
	};

	const wrapper = shallow( <Select {...props} /> );

	return { props, wrapper };
};

describe( 'Select', () => {
	it( 'Calls onChange when the input checked state changes', () => {
		const { props, wrapper } = setup();

		wrapper.find( 'input' ).simulate( 'change' );
		expect( props.onChange ).toBeCalled();
	} );
} );