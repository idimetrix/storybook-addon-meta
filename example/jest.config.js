module.exports = {
	globals: {
		'ts-jest': {
			babelConfig: true,
			isolatedModules: true,
			tsConfig: '<rootDir>/tsconfig.json',
		},
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'vue'],
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/tests/unit/styleMock.ts',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/unit/fileMock.ts',
		'^@/(.*)$': '<rootDir>/src/$1',
		vue$: '<rootDir>/node_modules/vue/dist/vue.js',
	},
	setupFilesAfterEnv: ['<rootDir>/tests/unit/setup.ts'],
	snapshotSerializers: ['jest-serializer-vue'],
	testEnvironment: 'jsdom',
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx|vue)', // local folder
		'<rootDir>/tests/unit/**/*.(test|spec).(js|jsx|ts|tsx|vue)', // global tests
	],
	transform: {
		'.+\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2)$': 'jest-transform-stub',
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.vue$': 'vue-jest',
	},
	transformIgnorePatterns: ['/node_modules/(?!(bootstrap-vue)/)'],
	verbose: true,
};
