import nodeAdapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
const config = {
	kit: {
		adapter: nodeAdapter(),
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
