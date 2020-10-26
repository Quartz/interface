module.exports = {
	moduleNameMapper: {
		'^.+\\.s?css$': 'identity-obj-proxy',
	},
	setupFiles: [
		'./jest.setup.js',
	],
	transform: {
		'.*': 'babel-jest',
	},
	verbose: true,
};
