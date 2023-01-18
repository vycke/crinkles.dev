<script context="module">
	export const hydrate = false;
	export async function load({ fetch }) {
		const res = await fetch('/api/allArticles.json');
		const { groupedByYear } = await res.json();
		return { props: { groupedByYear } };
	}
</script>

<script>
	import Header from '$lib/components/structure/Header.svelte';
	import ListGroup from '$lib/components/structure/ListGroup.svelte';
	import Main from '$lib/components/structure/Main.svelte';
	import Meta from '$lib/components/structure/Meta.svelte';
	import Page from '$lib/components/structure/Page.svelte';

	// export let articles;
	export let groupedByYear;
</script>

<Page title="Writing">
	<Header class="center center-w-4 center-g-1">
		<h1>Writing</h1>
	</Header>

	<Main class="flex-grow mt-1" width={4}>
		<ListGroup>
			{#each groupedByYear as [year, articles], i}
				<div
					class="sidebar-l sidebar-w-000 sidebar-c-80 gap-0 mb-1"
					class:border-b-fg-1={i < groupedByYear.length - 1}
				>
					<span class="text-primary">{year}</span>
					<ListGroup class="flex-col gap-2 mb-1">
						{#each articles as article}
							<div class="flex-col click-area" role="listitem">
								<Meta>
									<time date={article.formattedDate}>{article.formattedDate}</time>
								</Meta>
								<h2 class="text-1 lh-1">
									<a href="/writing/{article.slug}" sveltekit:prefetch class="bold no-decoration">
										{article.title}
									</a>
								</h2>
								<span class="text-fg-1">{article.description}</span>
							</div>
						{/each}
					</ListGroup>
				</div>
			{/each}
		</ListGroup>
	</Main>
</Page>
