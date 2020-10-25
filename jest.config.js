module.exports = {
	moduleNameMapper: {
		'^.+\\.s?css$': 'identity-obj-proxy',
	},
	setupFiles: [
		'./jest.setup.js',
	],
	testPathIgnorePatterns: [
		'<rootDir>/dist/',
	],
	transform: {
		'.*': 'babel-jest',
	},
	verbose: true,
};
