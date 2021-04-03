<script lang="ts">
	import { prefetch } from '$app/navigation';
	type Link = { name: string; url: string; alt: string };

	const links: Link[] = [
		{ name: 'twitter', url: 'https://twitter.com/kevtiq', alt: 'Link to my Twitter page' },
		{ name: 'github', url: 'https://github.com/kevtiq', alt: 'Link to my Github page' },
		{
			name: 'rss',
			url: 'https://crinkle.dev/rss.xml',
			alt: 'Link to the RSS feed of crinkle.dev'
		}
	];
</script>

<footer class="flex-col items-start p-1 text-00 bg-gray-400">
	<div class="links flex-row items-center justify-end">
		<a href="/meta" on:mouseover={() => prefetch('/meta')} class="flex-grow">
			<i>crinkle</i>
		</a>
		{#each links as link}
			<a href={link.url} title={link.alt}>{link.name}</a>
		{/each}
	</div>
	<i class="text-center text-000 pb-00 text-gray-100">
		"A crinkle (/ˈkrɪŋk(ə)l/) is a wrinkle or crease on a surface. It highlights personality and
		uniqueness."
	</i>
</footer>

<style lang="scss">
	footer {
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
