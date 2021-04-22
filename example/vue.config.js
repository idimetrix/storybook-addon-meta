// eslint-disable-next-line
const webpack = require('webpack');

module.exports = {
	configureWebpack: {
		devtool: 'source-map',
		optimization: {
			splitChunks: false,
		},
	},
	css: {
		extract: false,
		loaderOptions: {
			sass: {
				additionalData: '@import "@/styles/variables.scss"; @import "@/styles/mixins.scss"; @import "@/styles/medias.scss";',
			},
		},
	},
	devServer: {
		https: false,
	},
	filenameHashing: true,
	lintOnSave: true,
	parallel: false,
	productionSourceMap: true,
	runtimeCompiler: false,
};
