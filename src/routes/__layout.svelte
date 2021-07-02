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
	let links = [
		{ name: 'twitter', url: 'https://twitter.com/crinklesio', alt: 'Link to my Twitter page' },
		{ name: 'github', url: 'https://github.com/crinklesio', alt: 'Link to my Github page' }
	];

	import '../styles/index.scss';

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
</svelte:head>

<slot />

<footer class="flex-col items-start | p-1 text-00 bg-gray-400">
	<div class="endline self-center mb-00" />
	<div class="links | flow-x flow-g-00 | self-center">
		<a href="/meta" sveltekit:prefetch class="flex-grow p-000">© crinkles</a>
		{#each links as link}
			<a href={link.url} title={link.alt} class="p-000">{link.name}</a>
		{/each}

		<a href="/rss.xml" title="RSS Feed" class="p-000">rss</a>
	</div>
</footer>

<style lang="scss">
	footer {
		position: relative;
	}
	.endline {
		position: absolute;
		top: 0;
		background: var(--gradient);
		width: var(--size-0);
		height: 0.5rem;
		margin-top: -0.25rem;
		border-radius: var(--radius-3);
	}

	.links {
		width: 100%;
	}
</style>
