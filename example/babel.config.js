module.exports = {
	env: {
		test: {
			plugins: ['transform-require-context'],
			presets: ['@vue/app'],
		},
	},
	plugins: [
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-nullish-coalescing-operator',
		[
			'component',
			{
				libraryName: 'element-ui',
				styleLibraryName: 'theme-chalk',
			},
		],
	],
	presets: ['@vue/app'],
};
