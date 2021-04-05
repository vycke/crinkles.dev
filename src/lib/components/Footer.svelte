<script lang="ts">
	type Link = { name: string; url: string; alt: string };

	const links: Link[] = [
		{ name: 'twitter', url: 'https://twitter.com/kevtiq', alt: 'Link to my Twitter page' },
		{ name: 'github', url: 'https://github.com/kevtiq', alt: 'Link to my Github page' }
	];
</script>

<footer class="flex-col items-start p-1 text-00 bg-gray-400">
	<div class="links flex-row items-center justify-end">
		<a href="/meta" sveltekit:prefetch class="flex-grow">
			<i>crinkle</i>
		</a>
		{#each links as link}
			<a href={link.url} title={link.alt} sveltekit:prefetch>{link.name}</a>
		{/each}

		<a href="https://crinkle.dev/writing/rss.xml" title="RSS Feed" sveltekit:prefetch>rss</a>
	</div>
	<i class="text-center text-000 pb-00 text-gray-100">
		"A crinkle (/ˈkrɪŋk(ə)l/) is a wrinkle or crease on a surface. It highlights personality and
		uniqueness."
	</i>
</footer>

<style lang="scss">
	footer {
		grid-row: 3;
		border-top: 1px solid var(--gray-300);
	}

	.links {
		width: 100%;
	}

	.links > * + * {
		margin-left: var(--spacing-0);
		padding: var(--spacing-000);
	}
</style>
