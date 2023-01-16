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
	import ListGroup from '$lib/components/structure/ListGroup.svelte';
	import '../styles/index.scss';

	let links = [
		{ name: 'mastodon', url: 'https://mastodon.world/@kevtiq', alt: 'Link to my Mastodon page' },
		{ name: 'github', url: 'https://github.com/kevtiq', alt: 'Link to my Github page' },
		{ name: 'rss', url: '/rss.xml', alt: 'Link to my RSS page' }
	];

	let twitter = '@kevtiq';
	let keywords = 'CSS, front-end, web design, consulting, architecture';
	let img = 'https://crinkles.io/sm-image.png';
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
</svelte:head>

<div class="flex-col h-full text-fg-0 bg-bg-0 text-0">
	<slot />

	<footer
		class="w-full | flex-row content-center gap-0 | bg-grey-4 border-t-brand-2 border-w-4 | p-00 text-00 text-grey-0"
	>
		<span class="serif italic flex-grow"> © crinkles<span class="text-brand-2">.</span> </span>
		<ListGroup class="cluster gap-0" fade={true} scale={false}>
			{#each links as link}
				<a rel="me" href={link.url} title={link.alt} role="listitem">{link.name}</a>
			{/each}
		</ListGroup>
	</footer>
</div>

<style>
	footer a {
		color: var(--color-grey-0);
		text-decoration-color: var(--color-grey-2);
	}

	footer a:hover {
		color: var(--color-brand-2);
		text-decoration-color: var(--color-brand-2);
	}
</style>
