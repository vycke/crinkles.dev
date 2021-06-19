<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/writing.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Page from '$lib/components/Page.svelte';
	import formatDate from '$lib/utils/date';

	export let articles;
</script>

<svelte:head>
	<title>Writing • Kevin Pennekamp</title>
</svelte:head>

<Page class="flow-y flow-g-2 | mb-3">
	<h1>Writing.</h1>
	{#each articles as group}
		<div class="year flex-row items-end justify-between">
			<span class="text-0 text-green bold">{group[0]}</span><span class="text-00 text-gray-200"
				>{group[1].length} articles</span
			>
		</div>
		{#each group[1] as article}
			<div class="flex-col | click-area">
				<span class="text-00 text-gray-300 uppercase">{formatDate(article.date)}</span>
				<h2 class="text-0 text-gray-100">
					<a href="/writing/{article.slug}">{article.title}</a>
				</h2>
				<span class="text-00 text-gray-300 mt-000">{article.description}</span>
			</div>
		{/each}
	{/each}
</Page>

<style lang="scss">
	.year {
		border-bottom: 2px solid var(--color-gray-300);
	}
</style>
