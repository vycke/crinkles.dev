import sveltePreprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-static';

const config = {
	extensions: ['.svelte'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [sveltePreprocess()],
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		ssr: true,
		vite: {}
	}
};

export default config;
