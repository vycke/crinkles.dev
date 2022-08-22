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
	import { quote } from '$lib/constants';

	export let articles;
</script>

<Page>
	<Main width={5} class="flex-grow flex-col">
		<Header />
		<section class="switcher switcher-w-1 switcher-a-2 gap-5 items-center mt-2">
			<div class="stack">
				<span class="text-3 bold lh-0 flex-row items-center mb-1">Hi, I'm Kevin.</span>
				<span class="text-0">
					Crafting interfaces for users and developers, using <i>CSS</i>, <i>TypeScript</i>,
					<i>Svelte</i>, and/or
					<i>React</i>. Occasionally sharing my thoughs on front-end development, developer
					experience, and engineering management.
				</span>

				<span class="serif bold italic text-1 text-center pt-3 text-primary maxw-2 self-center">
					{quote}
				</span>
			</div>

			<aside class="stack gap-0">
				<ListGroup class="switcher switcher-w-00 switcher-a-3 gap-0" fade={true}>
					{#each articles as article}
						<div class="card | flex-col | click-area | p-1">
							<span class="text-000 bold uppercase text-accent"> {article.formattedDate} </span>
							<h3>
								<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
							</h3>
							<span class="text-00 text-fg-1 mt-000">{article.description}</span>
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
	.card {
		background-color: var(--color-bg-1);
	}

	.view-more,
	.view-more:active {
		color: var(--color-fg-1);
		transition: all 0.25s;
		text-decoration-color: transparent;
		position: relative;
		padding: 0 var(--size-000);
		margin-right: var(--size-1);
	}

	.view-more:hover {
		color: var(--color-primary);
	}

	.view-more:after {
		border: solid var(--color-fg-1);
		border-width: 0 3px 3px 0;
		content: '';
		display: inline-block;
		padding: 3px;
		position: absolute;
		right: -6px;
		top: 0.6em;
		transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
		transition: all 0.25s;
	}

	.view-more:hover:after {
		right: -18px;
		border-color: var(--color-primary);
	}
</style>
