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
	import MetaData from '$lib/components/structure/MetaData.svelte';
	import Page from '$lib/components/structure/Page.svelte';

	// export let articles;
	export let groupedByYear;
</script>

<Page title="Writing">
	<main class="center center-w-4 center-g-1">
		<Header>
			<h1>Writing</h1>
		</Header>
	</main>

	<Main class="flex-grow mt-1" width={4}>
		<ListGroup fade={true} scale={false}>
			{#each groupedByYear as [year, articles]}
				<div class="sidebar-l sidebar-w-000 sidebar-c-80 gap-0 border-b-bg-1 mb-1">
					<span class="text-primary">{year}</span>
					<ListGroup fade={true} scale={false} class="flex-col gap-2 mb-1">
						{#each articles as article}
							<div class="flex-col click-area" role="listitem">
								<MetaData>
									<time date={article.formattedDate}>{article.formattedDate}</time>
								</MetaData>
								<a href="/writing/{article.slug}" sveltekit:prefetch class="bold no-decoration">
									{article.title}
								</a>
								<span class="text-fg-1">{article.description}</span>
							</div>
						{/each}
					</ListGroup>
				</div>
			{/each}
		</ListGroup>
	</Main>
</Page>
