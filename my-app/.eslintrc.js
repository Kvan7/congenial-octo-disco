module.exports = {
	extends: [
		'react-app',
		'airbnb',
		'airbnb-typescript',
		'prettier',
		// 'prettier/react',
		// 'plugin:jsx-a11y/recommended',
		// 'plugin:prettier/recommended',
		// 'plugin:import/typescript'
	],
	plugins: ['jsx-a11y', 'prettier'],
	parserOptions: {
		project: './tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
	},
	rules: {
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.tsx'],
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'lf',
			},
		],
	},
};
