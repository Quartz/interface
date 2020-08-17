import React from 'react';
import Header from './Header';
import docs from './Header.docs.mdx';

export const Default = () => (
	<div>
		<Header title="Good morning, USA" intro="I’ve got a feeling that it’s gonna be a wonderful day" />
		<div>
			<ul>
				<li>Contributor 1</li>
				<li>Contributor 2</li>
				<li>Contributor 3</li>
			</ul>
		</div>
	</div>
);

export default {
	conponent: Header,
	parameters: {
		docs: { page: docs },
	},
	title: 'Header',
};
