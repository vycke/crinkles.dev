import adapter from '@sveltejs/adapter-static';

const config = {
	extensions: ['.svelte'],
	kit: {
		adapter: adapter(),
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		},
		vite: {}
	}
};

export default config;
