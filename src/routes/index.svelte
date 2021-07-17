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
	import { description, principles, projects, title } from '$lib/constants';

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
				I'm a creative front-end engineer and an engineering manager. I love <i>CSS</i> and
				<a href="/writing" sveltekit:prefetch>writing</a>. As an engineer, I live a some basic
				principles.
			</span>
			{#each principles as principle, index}
				<div class="flex-row items-start">
					<span class="italic serif text-1 text-green mr-0 bold">{index + 1}.</span>
					<div class="flex-col">
						<span class="rainbow text-1 italic bold serif text-left">{principle.title}</span>
						<span class="text-gray-200 text-0">{principle.description}</span>
					</div>
				</div>
			{/each}
		</div>
		<aside class="flow-y flow-g-0">
			<h2 class="text-1"><Crinkle /> Recent articles</h2>
			{#each articles as article}
				<Card>
					<span class="text-00 text-gray-200 monospace uppercase">
						{article.formattedDate}
					</span>
					<h2 class="text-0 text-gray-100">
						<a href="/writing/{article.slug}" sveltekit:prefetch>{article.title}</a>
					</h2>
					<span class="text-00 text-gray-200 mt-000">{article.description}</span>
				</Card>
			{/each}
			<a href="/writing" class="self-end | no-decoration text-0 bold" sveltekit:prefetch>
				View more articles <Crinkle />
			</a>
		</aside>
	</section>

	<div class="rainbow | serif italic text-2 text-center maxw-3 py-3">
		"A crinkle (/ˈkrɪŋk(ə)l/) is a wrinkle or crease on a surface. It highlights personality and
		uniqueness."
	</div>

	<h2 class="text-1 my-0"><Crinkle /> Recent projects</h2>

	<section class="tiles tiles-w-0 tiles-g-0 | mb-3">
		{#each projects as project}
			<Card>
				<span class="text-00 text-gray-200 monospace">{project.type}</span>
				<h2 class="text-1 text-gray-100">
					<a href={project.href} title="Link to {project.title}">
						{project.title}
					</a>
				</h2>
				<span class="text-00 text-gray-200 mt-000">{project.description}</span>
			</Card>
		{/each}
	</section>
</main>

<style>
	.rainbow {
		background: var(--gradient);
		width: fit-content;
		background-clip: text;
		color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.rainbow::selection {
		color: var(--color-gray-400);
		background-clip: none;
		-webkit-background-clip: none;
		-webkit-text-fill-color: var(--color-gray-400);
	}

	.articles {
		--panel-gap: 6rem;
	}
</style>
