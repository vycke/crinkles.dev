<script context="module">
	export const hydrate = false;
	export async function load({ fetch }) {
		const res = await fetch('/api/allArticles.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Header from '$lib/components/structure/Header.svelte';
	import Main from '$lib/components/structure/Main.svelte';
	import Page from '$lib/components/structure/Page.svelte';

	export let articles;
</script>

<Page title="Articles">
	<Header class="center center-w-3 center-g-1 mb-3"
		><h1 class="text-1 ml-1 normal">Writing</h1></Header
	>
	<Main class="flex-grow flex-col gap-00 | mb-3">
		{#each articles as article}
			<div class="sidebar-l sidebar-w-000 clickarea items-center">
				<span class="text-00 uppercase text-fg-1"> {article.formattedDate} </span>
				<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
			</div>
		{/each}
	</Main>
</Page>

<style></style>
