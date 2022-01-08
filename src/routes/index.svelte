<script context="module">
	export const hydrate = false;
	import Crinkle from '$lib/components/Crinkle.svelte';

	export async function load({ fetch }) {
		const res = await fetch('/api/latestArticles.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Card from '$lib/components/Card.svelte';
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

<main class="center center-w-5 center-g-1 | mb-3">
	<section class="panel-l panel-w-2 panel-g-3 my-2 items-center">
		<div class="flow-y flow-g-0">
			<h1>Hi, I'm Kevin.</h1>
			<span class="text-0 text-gray-300 maxw-2">
				I'm a creative front-end engineer and <i>crinkles</i> is my UI development studio. I love
				<i>CSS</i> and live by some basic engineering principles: be <i>artistic</i>, be
				<i>pragmatic</i>
				and always <i>learn</i>.
			</span>

			<div class="text-gray-200 | serif bold italic text-1 text-center pt-3 maxw-2">
				{quote}
			</div>
		</div>
		<aside class="flow-y flow-g-0">
			<h2 class="text-0 regular uppercase text-primary-0 visually-hidden">Recent articles</h2>

			{#each articles as article}
				<Card>
					<span class="text-00 text-gray-300 uppercase">
						{article.formattedDate}
					</span>
					<h3 class="text-gray-100">
						<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
					</h3>
					<span class="text-00 text-gray-300 mt-000">{article.description}</span>
				</Card>
			{/each}
			<a href="/writing" class="self-end | no-decoration text-0" sveltekit:prefetch>
				View more articles <Crinkle />
			</a>
		</aside>
	</section>

	<h2 class="text-0 sans-serif uppercase mb-0 mt-2">Recent projects</h2>

	<section class="tiles tiles-w-0 tiles-g-0 | mb-3">
		{#each projects as project}
			<Card>
				<span class="text-00 text-gray-300">{project.type}</span>
				<h3 class="text-gray-100">
					<a href={project.href} title="Link to {project.title}">
						{project.title}
					</a>
				</h3>
				<span class="text-00 text-gray-300 mt-000">{project.description}</span>
			</Card>
		{/each}
	</section>
</main>
