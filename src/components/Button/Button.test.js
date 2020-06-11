import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button.jsx';

const setup = overrides => {
	const props = {
		children: 'Button',
		variant: 'primary',
		loading: false,
		onClick: jest.fn(),
		...overrides,
	};

	const wrapper = shallow( <Button {...props} /> );

	return {
		props,
		wrapper,
	};
};

describe( 'Components: Button', () => {
	it( 'Runs the provided onClick function when clicked', () => {
		const { props, wrapper } = setup();
		wrapper.simulate( 'click' );
		expect( props.onClick ).toHaveBeenCalled();
	} );
} );
