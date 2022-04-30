<script context="module">
	export const hydrate = false;
	export async function load({ fetch }) {
		const res = await fetch('/api/allArticles.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Page from '$lib/components/structure/Page.svelte';

	export let articles;
</script>

<Page class="flex-col gap-2 | mb-3" title="Articles">
	<h1>Articles</h1>
	{#each articles as article}
		<div class="stack click-area">
			<span class="text-000 bold uppercase"> {article.formattedDate} </span>
			<h2 class="text-1 text-fg-0">
				<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
			</h2>
			<span class="text-00 text-fg-1">{article.description}</span>
		</div>
	{/each}
</Page>
