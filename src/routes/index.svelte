<script context="module">
	export const hydrate = false;

	export async function load({ fetch }) {
		const res = await fetch('/api/latestArticles.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Card from '$lib/components/Card.svelte';
	import Logo from '$lib/components/Logo.svelte';
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

<main class="center center-w-5 center-g-1 | flex-grow mt-1 mb-3">
	<section class="switcher switcher-w-3 gap-5 items-center">
		<div class="stack">
			<h1 class="flex-row items-center">Hi, I'm Kevin</h1>
			<h2 class="text-primary text-1 mb-3">I'm a front-end engineer.</h2>
			<span class="text-0 text-grey-2">
				I m a front-end engineer and engineering manager specialized in <i>CSS</i>, <i>Svelte</i>,
				<i>React</i>, and
				<i>TypeScript</i>. <i>Crinkles</i> focuses on building front-end developer experience and tooling.
			</span>

			<span class="serif bold italic text-1 text-center pt-3 text-grey-2"
				>"A good developer experience is energising and motivating"
			</span>
		</div>

		<aside class="stack gap-0">
			<h2 class="visually-hidden">Recent articles</h2>

			{#each articles as article}
				<Card type="dark">
					<span class="text-00 text-grey-2 uppercase"> {article.formattedDate} </span>
					<h3 class="text-grey-0">
						<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
					</h3>
					<span class="text-00 text-grey-2 mt-000">{article.description}</span>
				</Card>
			{/each}
			<a href="/writing" class="self-end | text-0" data-type="section" sveltekit:prefetch>
				View more articles
			</a>
		</aside>
	</section>

	<h2 class="text-3 text-center mb-0 mt-5">Recent projects</h2>

	<aside class="switcher switcher-w-000 gap-0 | mb-3">
		{#each projects as project}
			<Card type="dark">
				<span class="text-00 text-grey-2 uppercase">{project.type}</span>
				<h3 class="text-grey-0">
					<a href={project.href} title="Link to {project.title}"> {project.title} </a>
				</h3>
				<span class="text-00 text-grey-2 mt-000">{project.description}</span>
			</Card>
		{/each}
	</aside>
</main>
