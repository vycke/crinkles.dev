<script context="module">
	export const prerender = true;
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

<Page class="flow-y flow-g-2 | mb-4" headerTitle="writing.">
	{#each articles as group}
		<div class="monospace">
			<span class="text-0 text-green bold">{group[0]}</span>
		</div>
		<div class="tiles tiles-w-1 tiles-g-0">
			{#each group[1] as article}
				<Card>
					<span class="text-000 text-gray-200 monospace uppercase">
						{article.formattedDate}
					</span>
					<h2 class="text-0 text-gray-100">
						<a href="/writing/{article.slug}">{article.title}</a>
					</h2>
					<span class="text-00 text-gray-200 mt-000">{article.description}</span>
				</Card>
			{/each}
		</div>
	{/each}
</Page>
