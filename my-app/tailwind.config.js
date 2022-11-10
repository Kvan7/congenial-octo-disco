/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				colbalt: {
					50: '#8a778e',
					100: '#806d84',
					200: '#76637a',
					300: '#6c5970',
					400: '#624f66',
					500: '#58455c',
					600: '#4e3b52',
					700: '#443148',
					800: '#3a273e',
					900: '#301d34',
				},
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
