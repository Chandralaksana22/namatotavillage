import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$assets: '/src/assets',
			$lib: '/src/lib'
		},
		csrf: {
			checkOrigin: false,
		}
	},
	preprocess: vitePreprocess()
};

export default config;
