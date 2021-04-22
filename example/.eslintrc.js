module.exports = {
	env: {
		node: true,
	},

	extends: ['plugin:vue/strongly-recommended', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier', '@vue/prettier/@typescript-eslint'],

	overrides: [
		{
			env: {
				jest: true,
			},
			files: [
				'<rootDir>/src/**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx|vue)', // local folder
				'<rootDir>/tests/unit/**/*.(test|spec).(js|jsx|ts|tsx|vue)', // global tests
			],
		},
	],

	parserOptions: {
		ecmaVersion: 2020,
	},

	plugins: ['sort-keys-fix', 'sort-imports-es6-autofix'],

	root: true,

	rules: {
		'@typescript-eslint/ban-types': [0],
		'@typescript-eslint/camelcase': [0],
		'@typescript-eslint/interface-name-prefix': [0],
		'@typescript-eslint/no-explicit-any': [0],
		'@typescript-eslint/no-inferrable-types': [0],
		'@typescript-eslint/typedef': [
			'error',
			{
				arrayDestructuring: true,
				arrowCallSignature: true,
				arrowParameter: true,
				callSignature: true,
				explicitFunctionReturnType: true,
				memberVariableDeclaration: true,
				objectDestructuring: true,
				parameter: true,
				propertyDeclaration: true,
				variableDeclaration: true,
				variableDeclarationIgnoreFunction: true,
			},
		],
		'no-console': 'error',
		'no-debugger': 'error',
		'sort-imports-es6-autofix/sort-imports-es6': [
			2,
			{
				ignoreCase: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		'sort-keys-fix/sort-keys-fix': [2],
		'vue/attributes-order': [
			'error',
			{
				alphabetical: true,
				order: [
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					'UNIQUE',
					'TWO_WAY_BINDING',
					'OTHER_DIRECTIVES',
					'OTHER_ATTR',
					'EVENTS',
					'CONTENT',
				],
			},
		],
	},
};
