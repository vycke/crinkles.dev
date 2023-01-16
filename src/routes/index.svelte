<script context="module">
	export const hydrate = false;

	export async function load({ fetch }) {
		const res = await fetch('/api/latestArticles.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Header from '$lib/components/structure/Header.svelte';

	import ListGroup from '$lib/components/structure/ListGroup.svelte';
	import Main from '$lib/components/structure/Main.svelte';
	import Page from '$lib/components/structure/Page.svelte';
	import Wave from '$lib/components/utilities/Wave.svelte';
	export let articles;
</script>

<Page>
	<Main width={5} class="flex-grow flex-col">
		<Header />
		<section class="switcher switcher-w-1 switcher-a-2 gap-5 items-center mt-5 mb-2">
			<div class="stack">
				<span class="text-4 bold lh-0 flex-row items-center mb-1">Hi, I'm Kevin.</span>
				<span class="text-0">
					Crinkles is the after-hours digital playground from Kevin Pennekamp — my corner of the
					internet to publish my <a href="/writing" sveltekit:prefetch>thoughts</a>, work on
					freelance projects and <a href="/projects" sveltekit:prefetch>tinker</a> around.
				</span>

				<Wave class="mt-4 maxw-0 self-center" />
			</div>

			<aside class="stack gap-0">
				<ListGroup class="tiles tiles-w-00 gap-0" fade={true}>
					{#each articles as article}
						<div
							class="bg-bg-1 radius-000 border-bg-1 hover:border-primary | flex-col | click-area | p-1"
							role="listitem"
						>
							<span class="text-000 bold uppercase"> {article.formattedDate} </span>
							<h2 class="text-0">
								<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
							</h2>
							<span class="text-00 mt-000">{article.description}</span>
						</div>
					{/each}
				</ListGroup>
				<a href="/writing" class="view-more | self-end | text-0" sveltekit:prefetch>
					See all articles
				</a>
			</aside>
		</section>
	</Main>
</Page>

<style>
	.view-more,
	.view-more:active {
		color: var(--color-fg-1);
		transition: all 0.25s;
		position: relative;
		padding: 0 var(--size-000);
		margin-right: var(--size-1);
	}

	.view-more:hover {
		color: var(--color-primary);
	}

	.view-more:after {
		content: '>';
		display: inline-block;
		position: absolute;
		right: -6px;
		top: 0.1em;
		transition: all 0.25s;
	}

	.view-more:hover:after {
		right: -18px;
		font-weight: 600;
	}
</style>
