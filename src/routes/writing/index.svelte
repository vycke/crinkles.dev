<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		const res = await fetch('/api/allArticles.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Page from '$lib/components/Page.svelte';

	export let articles;
</script>

<svelte:head>
	<title>Writing • Kevin Pennekamp</title>
</svelte:head>

<Page class="flow-y flow-g-2 | mb-3" headerTitle="Writing.">
	{#each articles as group}
		<div class="year flex-row items-end justify-between monospace">
			<span class="text-0 text-green bold">{group[0]}</span>
		</div>
		{#each group[1] as article}
			<div class="flex-col | click-area">
				<span class="text-000 text-gray-200 uppercase monospace">{article.formattedDate}</span>
				<h2 class="text-0 text-gray-100">
					<a href="/writing/{article.slug}">{article.title}</a>
				</h2>
				<span class="text-00 text-gray-200 mt-000">{article.description}</span>
			</div>
		{/each}
	{/each}
</Page>

<style lang="scss">
	.year {
		border-bottom: 2px solid var(--color-gray-200);
	}
</style>
