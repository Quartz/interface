import React from 'react';
import Button, { ButtonLabel } from './Button';
import docs from './Button.docs.mdx';

export default {
	title: 'Button',
	component: Button,
	parameters: {
		docs: { page: docs },
	},
};

export const Default = () => <Button>Click me!</Button>;
export const Secondary = () => <Button variant="secondary">Click me!</Button>;
export const Warning = () => <Button variant="warning">Be very careful</Button>;
export const Inline = () => <Button inline={true}>Click me!</Button>;
export const InlineWarning = () => <Button variant="warning" inline={true}>Be very careful</Button>;
export const LabelOnly = () => <ButtonLabel>I am static text</ButtonLabel>;
