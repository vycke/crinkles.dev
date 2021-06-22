<script context="module">
	import Crinkle from '$lib/components/Crinkle.svelte';

	export async function load({ fetch }) {
		const res = await fetch('/index.json');

		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Logo from '$lib/components/Logo.svelte';
	import Card from '$lib/components/Card.svelte';
	import formatDate from '$lib/utils/date';
	import { DESCRIPTION, TITLE } from '$lib/constants';

	export let articles;

	export let projects = [
		{
			type: 'Project',
			title: 'State machine editor',
			href: 'https://fsm.crinkles.io',
			description: 'Visual editor for finite state machines'
		},
		{
			type: '(S)CSS',
			title: 'Feo CSS',
			href: 'https://github.com/crinklesio/feo-css',
			description: 'Layout and utility based CSS framework'
		},
		{
			type: 'JavaScript',
			title: 'DIGL',
			href: 'https://github.com/crinklesio/digl',
			description: 'Directed graph Layout algorithm'
		}
	];
</script>

<svelte:head>
	<title>Kevin Pennekamp</title>

	<title>{TITLE}</title>
	<meta name="twitter:title" content={TITLE} />
	<meta property="og:title" content={TITLE} />

	<meta name="description" content={DESCRIPTION} />
	<meta name="twitter:description" content={DESCRIPTION} />
	<meta property="og:description" content={DESCRIPTION} />
</svelte:head>

<main class="center center-w-5 center-g-1 | mt-1">
	<section class="split-left split-min-w-1 split-g-3 | my-1">
		<div class="flow-y flow-g-0 pt-3">
			<Logo class="self-start correction flow-next-1" />
			<h1>Hi, I'm Kevin.</h1>
			<span class="text-00 text-gray-200">
				<Crinkle /> I'm a Software Engineer working at
				<a href="https://finaps.nl" title="Website of Finaps B.V."> Finaps</a>, where I mostly do
				front-end and lead a small team. I am a big <i>front-end</i> and <i>CSS</i> nerd, and love
				to try new things on this personal playgroud. I occasionally
				<a href="/writing">write</a> about my front-end journeys and opinions.
			</span>

			<i class="rainbow | flow-self-3 | text-00 text-center">
				"A crinkle (/ˈkrɪŋk(ə)l/) is a wrinkle or crease on a surface. It highlights personality and
				uniqueness."
			</i>
		</div>
		<aside class="flow-y flow-g-0">
			{#each articles as article}
				<Card>
					<span class="text-000 text-gray-300 monospace uppercase">
						{formatDate(article.date)}
					</span>
					<h2 class="text-0 text-gray-100">
						<a href="/writing/{article.slug}">{article.title}</a>
					</h2>
					<!-- <span class="text-00 text-gray-300 mt-000">{article.description}</span> -->
				</Card>
			{/each}
			<a href="/writing" class="self-end | no-decoration mt-1 mb-3 text-0 bold" sveltekit:prefetch>
				View more articles →
			</a>
		</aside>
	</section>
	<section class="tiles tiles-w-1 tiles-g-0 | mb-3">
		{#each projects as project}
			<Card>
				<span class="text-000 text-gray-300 monospace uppercase">{project.type}</span>
				<h2 class="text-0 text-gray-100">
					<a href={project.href} title="Link to {project.title}">
						{project.title}
					</a>
				</h2>
				<span class="text-00 text-gray-300 mt-000">{project.description}</span>
			</Card>
		{/each}
	</section>
</main>

<!-- Hacker div for the pancake class -->
<div />

<style>
	.rainbow {
		background: var(--gradient);
		align-self: center;
		max-width: 30rem;
		width: fit-content;
		background-clip: text;
		color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.rainbow::selection {
		color: var(--color-gray-500);
		background-clip: none;
		-webkit-background-clip: none;
		-webkit-text-fill-color: var(--color-gray-500);
	}

	:global(.correction) {
		margin-left: calc(-1 * var(--spacing-000));
	}
</style>
