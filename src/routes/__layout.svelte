<script context="module">
	export async function load({ fetch }) {
		try {
			await fetch('/rss.xml');
			return true;
		} catch (error) {
			console.error(error);
		}
	}
</script>

<script>
	import '../styles/index.scss';

	let links = [
		{ name: 'twitter', url: 'https://twitter.com/crinklesio', alt: 'Link to my Twitter page' },
		{ name: 'github', url: 'https://github.com/crinklesio', alt: 'Link to my Github page' }
	];

	let twitter = '@crinklesio';
	let keywords = 'CSS, front-end, web design, consulting, architecture';
	let img = 'https://crinkles.io/logo.png';
</script>

<svelte:head>
	<meta name="keywords" content={keywords} />
	<meta name="content" content={keywords} />
	<meta name="property" content={keywords} />

	<meta name="twitter:creator" content={twitter} />
	<meta name="twitter:site" content={twitter} />

	<meta property="og:image" content={img} />
	<meta name="twitter:image" content={img} />
	<meta name="twitter:card" content="summary" />
	<meta name="color-scheme" content="dark" />

	<meta name="theme-color" content="#0e141e" />
</svelte:head>

<slot />

<footer class="relative flex-col items-start | p-1 text-00 bg-gray-300">
	<div class="endline | absolute post-0 w-00 radius-3 self-center mb-00" />
	<div class="w-full flow-x flow-g-00 self-center">
		<a href="/meta" sveltekit:prefetch class="flex-grow p-000">© crinkles</a>
		{#each links as link}
			<a href={link.url} title={link.alt} class="p-000">{link.name}</a>
		{/each}

		<a href="/rss.xml" title="RSS Feed" class="p-000">rss</a>
	</div>
</footer>

<style>
	.endline {
		background: var(--gradient);
		height: 0.5rem;
		margin-top: -0.25rem;
	}
</style>
