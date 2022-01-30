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

<Page class="stack stack-g-5 | mb-6">
	{#each articles as group}
		<div class="monospace">
			<span class="text-3 text-primary bold">{group[0]}</span>
		</div>
		<div class="tiles tiles-w-3 gap-3">
			{#each group[1] as article}
				<Card>
					<span class="text-1 text-grey-2 monospace uppercase">
						{article.formattedDate}
					</span>
					<h2 class="text-3 text-grey-0">
						<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
					</h2>
					<span class="text-2 text-grey-2 mt-1">{article.description}</span>
				</Card>
			{/each}
		</div>
	{/each}
</Page>
