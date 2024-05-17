import { join } from 'path'

import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'selector',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			colors:{
				"navbar-bg":"#323232",
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
