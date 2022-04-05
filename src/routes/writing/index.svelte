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

<Page class="flex-col gap-0 | mb-3">
	{#each articles as group}
		<div class="monospace">
			<span class="text-0 text-primary bold">{group[0]}</span>
		</div>
		{#each group[1] as article}
			<div class="stack">
				<span class="text-00 text-grey-2 monospace uppercase"> {article.formattedDate} </span>
				<h2 class="text-1 text-grey-0">
					<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
				</h2>
				<span class="text-00 text-grey-2">{article.description}</span>
			</div>
		{/each}
	{/each}
</Page>
