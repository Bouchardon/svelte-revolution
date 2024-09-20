import scrollbar from 'tailwind-scrollbar';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				redditSans: ['RedditSans', 'cursive']
			},
		}
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'active', 'checked']
	},
	plugins: [scrollbar(), daisyui]
};
