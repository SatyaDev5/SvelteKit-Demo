import { join } from 'path'

import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'selector',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			fontFamily:{
				"space-grotesk-500":["Space Grotesk", "sans-serif"],
				"space-grotesk-400":["Space Grotesk", "sans-serif"]
			},
			colors:{
				"navbar-bg":"#323232",
				"sidebar-bg":"#282828",
				"sidebar-font":"#DDDDDD",
				"sidebar-hr":"#7b7b7b"
			}
		},	
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: true,
					},
					"crimson","gold-nouveau","modern"
				],
			},
		}),
	],
};
