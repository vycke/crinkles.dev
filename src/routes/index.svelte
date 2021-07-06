<script context="module">
	export const prerender = true;
	import Crinkle from '$lib/components/Crinkle.svelte';

	export async function load({ fetch }) {
		const res = await fetch('/api/latestArticles.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Logo from '$lib/components/Logo.svelte';
	import Card from '$lib/components/Card.svelte';

	export let articles;

	let projects = [
		{
			type: '(S)CSS',
			title: 'Feo',
			href: 'https://feo.crinkles.io',
			description: 'Layout and utility based CSS framework'
		},
		{
			type: 'SvelteKit project',
			title: 'DocKit',
			href: 'https://github.com/crinklesio/dockit',
			description: 'Markdown based document website template'
		},
		{
			type: 'React project',
			title: 'State machine editor',
			href: 'https://fsm.crinkles.io',
			description: 'Visual editor for finite state machines'
		}
	];

	let title = 'Kevin Pennekamp | Crinkles';
	let description =
		'Personal website of Kevin Pennekamp, a Dutch software engineer. I love CSS, front-end architecture, engineering and writing about it!';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:title" content={title} />
	<meta property="og:title" content={title} />

	<meta name="description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:description" content={description} />
</svelte:head>

<main class="center center-w-5 center-g-1 | mt-2">
	<section class="panel-l panel-w-3 panel-g-3">
		<div class="flow-y flow-g-0 mt-000">
			<Logo class="self-start flow-next-2" />
			<h1>Hi, I'm Kevin.</h1>
			<span class="text-00 text-gray-200">
				<Crinkle /> I'm a creative software engineer that loves <i>front-end</i> and <i>CSS</i>. I
				research and dgive advise about scalable and maintainable user interfaces and (enterprise)
				to others. I occasionally
				<a href="/writing">write</a> about what I find, feel and think. Currently writing code at
				<a href="https://finaps.nl" title="Website of Finaps B.V.">Finaps</a>.
			</span>

			<i class="rainbow | flow-self-2 | text-00 text-center px-3">
				"A crinkle (/ˈkrɪŋk(ə)l/) is a wrinkle or crease on a surface. It highlights personality and
				uniqueness."
			</i>
		</div>
		<aside class="flow-y flow-g-0">
			{#each articles as article}
				<Card>
					<span class="text-000 text-gray-200 monospace uppercase">
						{article.formattedDate}
					</span>
					<h2 class="text-0 text-gray-100">
						<a href="/writing/{article.slug}">{article.title}</a>
					</h2>
					<!-- <span class="text-00 text-gray-200 mt-000">{article.description}</span> -->
				</Card>
			{/each}
			<a href="/writing" class="self-end | no-decoration mt-1 mb-3 text-0 bold" sveltekit:prefetch>
				View more articles →
			</a>
		</aside>
	</section>

	<div class="self-end | no-decoration text-0 bold">Projects</div>
	<section class="tiles tiles-w-1 tiles-g-0 | mt-1 mb-3">
		{#each projects as project}
			<Card>
				<span class="text-000 text-gray-200 monospace">{project.type}</span>
				<h2 class="text-0 text-gray-100">
					<a href={project.href} title="Link to {project.title}">
						{project.title}
					</a>
				</h2>
				<span class="text-00 text-gray-200 mt-000">{project.description}</span>
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
</style>
