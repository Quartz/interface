import React from 'react';
import Button, { ButtonLink } from './Button';
import docs from './Button.docs.mdx';

export default {
	title: 'Button',
	component: Button,
	parameters: {
		docs: { page: docs },
	},
};

export const Primary = () => <Button>Click me!</Button>;
export const Secondary = () => <Button variant="secondary">Click me!</Button>;
export const Warning = () => <Button variant="warning">Be very careful</Button>;
export const Inline = () => <Button variant="inline">Click me!</Button>;
export const InlineWarning = () => <Button variant="warning-inline">Be very careful</Button>;
export const Link = () => <ButtonLink to="https://example.com">I link to example.com</ButtonLink>;
