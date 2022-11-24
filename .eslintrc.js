module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
	},
	plugins: ['vue', '@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'./.eslintrc-auto-import.json',
	],
	overrides: [],
	rules: {
		'@typescript-eslint/no-explicit-any': 'warn',
		'vue/multi-word-component-names': 'warn',
	},
	ignorePatterns: ['dist'],
}
