module.exports = {
	modules: true,
	plugins: {
		'postcss-modules': {
			generateScopedName: 'prism__[sha1:hash:hex:5]',
		},
	},
};
