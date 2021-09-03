<script context="module">
	export const hydrate = false;
	import Crinkle from '$lib/components/Crinkle.svelte';

	export async function load({ fetch }) {
		const res = await fetch('/api/latestArticles.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Logo from '$lib/components/Logo.svelte';
	import Card from '$lib/components/Card.svelte';
	import { description, principles, projects, quote, title } from '$lib/constants';

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

<main class="center center-w-5 center-g-1 | mt-2 mb-3">
	<section class="articles | panel-l panel-w-2 my-3">
		<div class="flow-y flow-g-0">
			<Logo class="self-start flow-next-2" />
			<h1>Hi, I'm Kevin.</h1>
			<span class="text-0 text-gray-200">
				I'm a creative front-end engineer and <i>crinkles</i> is my UI development studio. I love
				<i>CSS</i> and live by some basic engineering principles.
			</span>
			{#each principles as principle, index}
				<div class="flex-row items-start">
					<span class="italic serif text-1 text-cyan mr-0 bold">{index + 1}.</span>
					<div class="flex-col">
						<span class="rainbow text-1 italic bold serif text-left">{principle.title}</span>
						<span class="text-gray-200 text-0">{principle.description}</span>
					</div>
				</div>
			{/each}
		</div>
		<aside class="flow-y flow-g-0">
			<h2 class="text-0 regular uppercase text-cyan">Recent articles</h2>
			{#each articles as article}
				<Card>
					<span class="text-00 text-gray-200 monospace uppercase">
						{article.formattedDate}
					</span>
					<h3 class="text-gray-100">
						<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
					</h3>
					<span class="text-00 text-gray-200 mt-000">{article.description}</span>
				</Card>
			{/each}
			<a href="/writing" class="self-end | no-decoration text-0" sveltekit:prefetch>
				View more articles <Crinkle />
			</a>
		</aside>
	</section>

	<div class="rainbow | serif bold italic text-2 text-center maxw-4 py-3">{quote}</div>

	<h2 class="text-0 regular uppercase text-cyan my-0">Recent projects</h2>

	<section class="tiles tiles-w-0 tiles-g-0 | mb-3">
		{#each projects as project}
			<Card>
				<span class="text-00 text-gray-200 monospace">{project.type}</span>
				<h3 class="text-gray-100">
					<a href={project.href} title="Link to {project.title}">
						{project.title}
					</a>
				</h3>
				<span class="text-00 text-gray-200 mt-000">{project.description}</span>
			</Card>
		{/each}
	</section>
</main>

<style>
	.articles {
		--panel-gap: 6rem;
	}
</style>
