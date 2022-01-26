import adapter from '@sveltejs/adapter-static';

const config = {
	extensions: ['.svelte'],
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {}
	}
};

export default config;
