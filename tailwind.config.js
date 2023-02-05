/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	
	theme: {
		extend: {
			colors: {
				'ce-primary-black': '#0E0E0E',
				'ce-secondary-black': '#171717',
				'ce-primary-white': 'rgba(255, 255, 255, 0.75)',
				'ce-secondary-white': '#FFFFFF'
			},
			spacing: {
				'24': '2.4rem',
				'48': '4.8rem',
				'80': '8.0rem',
			},
			fontSize: {
				'14': '1.4rem',
				'16': '1.6rem',
				'20': '2rem',
				'24': '2.4rem',
				'32': '3.2rem',
				'36': '3.6rem',
				'40': '4rem',
				'48': '4.8rem'
				
			}
		},
	},
	plugins: [],
}
