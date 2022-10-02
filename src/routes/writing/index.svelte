<script context="module">
	export const hydrate = false;
	export async function load({ fetch }) {
		const res = await fetch('/api/allArticles.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Header from '$lib/components/structure/Header.svelte';
	import ListGroup from '$lib/components/structure/ListGroup.svelte';
	import Main from '$lib/components/structure/Main.svelte';
	import Page from '$lib/components/structure/Page.svelte';
	import Dotted from '$lib/components/utilities/Dotted.svelte';

	export let articles;
</script>

<Page title="Articles">
	<Header class="center center-w-3 center-g-1 mb-3">
		<h1 class="text-1 ml-1 serif">Writing</h1>
	</Header>
	<Main class="flex-grow">
		<ListGroup class="flex-col gap-2 | mb-3">
			{#each articles as article}
				<div class="flex-col click-area" role="listitem">
					<div class="flex-row items-center">
						<a href="/writing/{article.slug}" sveltekit:prefetch class="bold no-decoration"
							>{article.title}</a
						>
						<Dotted class="flex-grow" />
						<span class="text-00 uppercase text-fg-1 text-right"> {article.formattedDate} </span>
					</div>
					<span class="text-fg-1">{article.description}</span>
				</div>
			{/each}
		</ListGroup>
	</Main>
</Page>
