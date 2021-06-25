import sveltePreprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-netlify';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [sveltePreprocess()],
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		ssr: true,
		vite: {}
	}
};

export default config;
