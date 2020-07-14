const path = require( 'path' );

module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
	],
	addons: [
		'@storybook/addon-a11y/register',
		'@storybook/addon-docs',
		'@storybook/addon-knobs/register',
	],
	webpackFinal: async config => {
		// Loads .scss files using our sassconfig
		config.module.rules.push( {
			test: /\.s?css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: {
							localIdentName: '[name]__[local]__[hash:base64:5]',
						},
						sourceMap: true,
						importLoaders: 1,
						localsConvention: 'dashes',
					},
				},
				'sass-loader',
			],
			include: [
				path.resolve( __dirname, '../src' ),
			],
		} );

		return config;
	}
};
