<script lang="ts">
	type Link = { name: string; url: string; alt: string };

	const links: Link[] = [
		{ name: 'twitter', url: 'https://twitter.com/crinklesio', alt: 'Link to my Twitter page' },
		{ name: 'github', url: 'https://github.com/crinklesio', alt: 'Link to my Github page' }
	];
</script>

<footer class="flex-col items-start | p-1 text-00 bg-gray-400">
	<div class="endline self-center mb-00" />
	<div class="links | flex-row items-center justify-end">
		<a href="/meta" sveltekit:prefetch class="flex-grow">© crinkles</a>
		{#each links as link}
			<a href={link.url} title={link.alt}>{link.name}</a>
		{/each}

		<a href="/rss.xml" title="RSS Feed" sveltekit:prefetch>rss</a>
	</div>
</footer>

<style lang="scss">
	.endline {
		background: var(--gradient);
		width: var(--size-0);
		height: 0.5rem;
		margin-top: calc(-1 * var(--spacing-1) - 0.25rem);
		border-radius: var(--radius-3);
	}

	.links {
		width: 100%;
	}

	.links > * + * {
		margin-left: var(--spacing-00);
		padding: var(--spacing-000);
	}
</style>
