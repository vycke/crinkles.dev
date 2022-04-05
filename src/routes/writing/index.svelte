<script context="module">
	export const hydrate = false;
	export async function load({ fetch }) {
		const res = await fetch('/api/allArticles.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Page from '$lib/components/Page.svelte';

	export let articles;
</script>

<Page class="stack gap-3 | mb-6">
	{#each articles as group}
		<div class="monospace">
			<span class="text-3 text-primary bold">{group[0]}</span>
		</div>
		{#each group[1] as article}
			<div class="stack click-area">
				<h2 class="text-4 text-grey-0">
					<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
				</h2>
				<span class="text-2 text-grey-2 monospace uppercase"> {article.formattedDate} </span>
				<span class="text-2 text-grey-2">{article.description}</span>
			</div>
		{/each}
	{/each}
</Page>
