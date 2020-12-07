module.exports = {
	stories: [
		'./welcome.story.mdx',
		'../src/**/*.stories.mdx',
	],
	addons: [
		{
			name: '@storybook/preset-scss',
			options: {
				cssLoaderOptions: {
					importLoaders: 1,
					modules: {
						exportLocalsConvention: 'dashes',
						localIdentName: '[name]__[local]__[hash:base64:5]',
					},
					sourceMap: true,
				},
			},
		},
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		'@storybook/addon-essentials',
		'@storybook/addon-links',
	],
}
