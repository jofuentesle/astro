import animation from '@midudev/tailwind-animations';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary':'#333333',
				'secondary':'#1a78b3',
			}
		},
	},
	plugins: [ animation ],
}
