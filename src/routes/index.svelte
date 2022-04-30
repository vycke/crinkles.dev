<script context="module">
	export const hydrate = false;

	export async function load({ fetch }) {
		const res = await fetch('/api/latestArticles.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Logo from '$lib/components/structure/Logo.svelte';
	import { description, projects, quote, title } from '$lib/constants';

	export let articles;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:title" content={title} />
	<meta property="og:title" content={title} />

	<meta name="description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:description" content={description} />
</svelte:head>

<main class="center center-w-5 center-g-1 | flex-grow mt-3">
	<section class="switcher switcher-w-1 switcher-a-2 gap-5 items-center">
		<div class="stack mb-3">
			<Logo class="self-start mb-3" />
			<span class="text-4 bold lh-0 flex-row items-center">Hi, I'm Kevin</span>
			<span class="text-1 italic bold serif text-primary mb-2">
				Front-end developer & engineering manager.
			</span>
			<span class="text-0 text-fg-1">
				Crinkles studio is a <i>creative</i> agency specialized in improving front-end developer
				experience through writing, mentoring and creating tools. I build solutions using
				<i>CSS</i>, <i>TypeScript</i>, <i>Svelte</i>, and/or <i>React</i>.
			</span>

			<span class="serif bold italic text-1 text-center pt-3 text-primary maxw-2 self-center">
				{quote}
			</span>
		</div>

		<aside class="stack gap-0">
			<h2 class="text-1">Recent articles</h2>
			<div class="card-group | switcher switcher-w-00 switcher-a-3 gap-0">
				{#each articles as article}
					<div class="card | flex-col | click-area | p-1">
						<span class="text-000 bold uppercase"> {article.formattedDate} </span>
						<h3>
							<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
						</h3>
						<span class="text-00 text-fg-1 mt-000">{article.description}</span>
					</div>
				{/each}
			</div>
			<a href="/writing" class="view-more | self-end | text-0" sveltekit:prefetch>
				View more articles
			</a>
		</aside>
	</section>

	<h2 class="text-1 mb-0 mt-3">Recent projects</h2>
	<aside class="card-group | tiles tiles-w-0 gap-0 | mb-3">
		{#each projects as project}
			<div class="card | flex-col | click-area | p-1">
				<span class="text-000 bold uppercase">{project.type}</span>
				<h3>
					<a href={project.href} title="Link to {project.title}"> {project.title} </a>
				</h3>
				<span class="text-00 text-fg-1 mt-000">{project.description}</span>
			</div>
		{/each}
	</aside>
</main>

<style>
	.card-group:hover > .card:not(:hover) {
		opacity: 0.6;
	}

	.card {
		background-color: var(--color-bg-1);
		transition: all 0.25s;
	}
	.card:hover {
		transform: matrix(1.075, 0, 0, 1.075, 0, 0);
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
		border-width: 0 4px 4px 0;
		content: '';
		display: inline-block;
		padding: 3px;
		position: absolute;
		right: -8px;
		top: 0.675em;
		transform: rotate(-45deg);
		-webkit-transform: rotate(-45deg);
		transition: all 0.25s;
	}

	.view-more:hover:after {
		right: -18px;
		border-color: var(--color-primary);
	}
</style>
