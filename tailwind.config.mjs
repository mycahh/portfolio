/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: {
				"layout":"900px",
			},
			colors: {
				"background": "#121212",
				"color-card": "rgba(255, 255, 255, 0.7)"
			}

		},
	},
	plugins: [],
}
