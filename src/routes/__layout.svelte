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
		{ name: 'twitter', url: 'https://twitter.com/kevtiq', alt: 'Link to my Twitter page' },
		{ name: 'github', url: 'https://github.com/kevtiq', alt: 'Link to my Github page' },
		{ name: 'codepen', url: 'https://codepen.io/kevtiq', alt: 'Link to my CodePen.io page' },
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

<div class="flex-col h-full text-fg-0 bg-bg-0">
	<slot />

	<footer class="relative flex-col items-start | p-00 text-00">
		<ListGroup class="cluster gap-00 self-center">
			<a href="/meta" sveltekit:prefetch class="p-000 serif bold italic">© crinkles studio</a>
			<a href="/writing" sveltekit:prefetch class="p-000">writing</a>
			<a href="/projects" sveltekit:prefetch class="p-000">projects</a>
			{#each links as link}
				<a href={link.url} title={link.alt} class="p-000">{link.name}</a>
			{/each}
		</ListGroup>
	</footer>
</div>
