import React from 'react';
import Image from './Image';
import docs from './Image.docs.mdx';

export default {
	title: 'Image',
	component: Image,
	parameters: {
		docs: { page: docs },
	},
};

export const Constrained = () => (
	<div style={{ maxWidth: 400 }}>
		<Image
			alt="A studio portrait of Lena Waithe"
			fallbackHeight={400}
			fallbackWidth={400}
			sizes="(max-width: 200px) 200w, 400w"
			src="https://cms.qz.com/wp-content/uploads/2018/01/lenawaithe-portrait.jpg?quality=75&strip=all&w=400&h=400&crop=1"
			srcSet="
				https://cms.qz.com/wp-content/uploads/2018/01/lenawaithe-portrait.jpg?quality=75&strip=all&w=200&h=200&crop=1 200w 1x,
				https://cms.qz.com/wp-content/uploads/2018/01/lenawaithe-portrait.jpg?quality=75&strip=all&w=400&h=400&crop=1 200w 2x,
				https://cms.qz.com/wp-content/uploads/2018/01/lenawaithe-portrait.jpg?quality=75&strip=all&w=400&h=400&crop=1 400w 1x,
				https://cms.qz.com/wp-content/uploads/2018/01/lenawaithe-portrait.jpg?quality=75&strip=all&w=800&h=800&crop=1 400w 2x
			"
		/>
	</div>
);

export const Reshaped = () => (
	<div style={{ borderRadius: '50%', maxWidth: 200, overflow: 'hidden' }}>
		<Image
			alt="A studio portrait of Lena Waithe"
			fallbackHeight={400}
			fallbackWidth={400}
			sizes="(max-width: 100px) 100w, 200w"
			src="https://cms.qz.com/wp-content/uploads/2018/01/lenawaithe-portrait.jpg?quality=75&strip=all&w=400&h=400&crop=1"
			srcSet="
				https://cms.qz.com/wp-content/uploads/2018/01/lenawaithe-portrait.jpg?quality=75&strip=all&w=100&h=100&crop=1 100w 1x,
				https://cms.qz.com/wp-content/uploads/2018/01/lenawaithe-portrait.jpg?quality=75&strip=all&w=200&h=200&crop=1 100w 2x,
				https://cms.qz.com/wp-content/uploads/2018/01/lenawaithe-portrait.jpg?quality=75&strip=all&w=200&h=200&crop=1 200w 1x,
				https://cms.qz.com/wp-content/uploads/2018/01/lenawaithe-portrait.jpg?quality=75&strip=all&w=400&h=400&crop=1 200w 2x
			"
		/>
	</div>
);
