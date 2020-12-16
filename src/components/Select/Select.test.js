import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

const setup = overrides => {
	const defaultProps = {
		label: 'Select a fruit',
		invalid: false,
		onChange: jest.fn(),
		options: [
			{ value: 'orange', label: 'Premium Florida citrus' },
		],
	};

	const props = {
		...defaultProps,
		...overrides,
	};

	const wrapper = shallow( <Select {...props} /> );

	return { props, wrapper };
};

describe( 'Select', () => {
	it( 'Calls onChange when the select element changes', () => {
		const { props, wrapper } = setup();

		wrapper.find( 'select' ).simulate( 'change' );
		expect( props.onChange ).toBeCalled();
	} );
} );
