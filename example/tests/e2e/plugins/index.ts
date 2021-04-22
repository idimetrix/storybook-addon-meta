module.exports = (on: any, config: any): any => {
	// on('file:preprocessor', webpack({
	//  webpackOptions: require('@vue/cli-service/webpack.config'),
	//  watchOptions: {}
	// }))

	return Object.assign({}, config, {
		fixturesFolder: 'tests/e2e/fixtures',
		integrationFolder: 'tests/e2e/specs',
		screenshotsFolder: 'tests/e2e/screenshots',
		supportFile: 'tests/e2e/support/index.js',
		videosFolder: 'tests/e2e/videos',
	});
};
