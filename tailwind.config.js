/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	
	theme: {
		theme: {
			screens: {
				'sm': '640px',
				// => @media (min-width: 640px) { ... }
				
				'md': '768px',
				// => @media (min-width: 768px) { ... }
				
				'lg': '1024px',
				// => @media (min-width: 1024px) { ... }
				
				'xl': '1280px',
				// => @media (min-width: 1280px) { ... }
				
				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }
			}
		},
		extend: {
			colors: {
				'ce-primary-black': '#0E0E0E',
				'ce-secondary-black': '#171717',
				'ce-primary-white': 'hsl(0, 0%, 75%)',
				'ce-secondary-white': 'hsl(0, 0%, 100%)',
				'ce-tertiary-white': 'hsl(0, 0%, 50%)',
				'ce-primary-white2': 'hsl(0, 0%, 80%)'
			},
			spacing: {
				'24': '2.4rem',
				'28': '2.8rem',
				'40': '4rem',
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
