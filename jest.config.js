module.exports = {
	moduleNameMapper: {
		'^.+\\.s?css$': 'identity-obj-proxy',
		'\\.(svg)$': '<rootDir>/__mocks__/fileMock.js',
	},
	setupFiles: [
		'./jest.setup.js',
	],
	transform: {
		'.*': 'babel-jest',
	},
	verbose: true,
};
