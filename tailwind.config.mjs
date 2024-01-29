/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				"green": "hsl(75, 94%, 57%)",
				"grey": "hsl(0, 0%, 20%)",
				"darker-grey": "hsl(0, 0%, 12%)",
				"off-black": "hsl(0, 0%, 8%)",
			},
			textColor: {
				"green": "hsl(75, 94%, 57%)",
				"grey": "hsl(0, 0%, 20%)",
				"darker-grey": "hsl(0, 0%, 12%)",
				"off-black": "hsl(0, 0%, 8%)",
			},
		},
	},
	plugins: [],
}
