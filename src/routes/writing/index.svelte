<script context="module">
	export const hydrate = false;
	export async function load({ fetch }) {
		const res = await fetch('/api/allArticles.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Card from '$lib/components/Card.svelte';
	import Page from '$lib/components/Page.svelte';

	export let articles;
</script>

<Page class="stack stack-g-2 | mb-3">
	{#each articles as group}
		<div class="monospace">
			<span class="text-0 text-bace-1 bold">{group[0]}</span>
		</div>
		<div class="tiles tiles-w-0 gap-0">
			{#each group[1] as article}
				<Card>
					<span class="text-00 text-gray-2 monospace uppercase">
						{article.formattedDate}
					</span>
					<h2 class="text-0 text-gray-0">
						<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
					</h2>
					<span class="text-00 text-gray-2 mt-000">{article.description}</span>
				</Card>
			{/each}
		</div>
	{/each}
</Page>
