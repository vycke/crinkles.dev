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
	import Page from '$lib/components/Page.svelte';

	export let articles;

	export let title = 'Kevin Pennekamp';
	export let description =
		'Personal website of Kevin Pennekamp, a Dutch software engineer. I love CSS, front-end architecture, engineering and writing about it!';
</script>

<svelte:head>
	<title>Kevin Pennekamp</title>

	<title>{title}</title>
	<meta name="twitter:title" content={title} />
	<meta property="og:title" content={title} />

	<meta name="description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:description" content={description} />
</svelte:head>
<main class="center center-w-5 center-g-0 | mt-1">
	<section class="split-left split-min-w-1 split-g-3 | my-1">
		<div class="flow-y flow-g-0">
			<Logo class="self-start" />
			<h1 class="px-0">Hi, I'm Kevin.</h1>
			<span class="px-0 text-00 text-gray-200">
				<Crinkle /> I'm a Software Engineer working at
				<a href="https://finaps.nl" title="Website of Finaps B.V."> Finaps</a>, where I mostly do
				front-end and lead a small team. I am a big <i>front-end</i> and <i>CSS</i> nerd, and love
				to try new things on this personal playgroud. I occasionally
				<a href="/writing">write</a> about my front-end journeys and opinions.
			</span>

			<i class="rainbow | flow-self-3 | px-0 text-00 text-center">
				"A crinkle (/ˈkrɪŋk(ə)l/) is a wrinkle or crease on a surface. It highlights personality and
				uniqueness."
			</i>
		</div>
		<aside class="flow-y flow-g-0">
			{#each articles as article}
				<Card
					date={article.date}
					class="scale bg-gray-400 p-1"
					title={article.title}
					description={article.description}
					href="/writing/{article.slug}"
				/>
			{/each}
			<a href="/writing" class="self-end | mt-1 mb-3 text-0 bold" sveltekit:prefetch
				>View more articles →</a
			>
		</aside>
	</section>
</main>

<!-- Hacker div for the pancake class -->
<div />

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
		color: var(--color-gray-500);
		background-clip: none;
		-webkit-background-clip: none;
		-webkit-text-fill-color: var(--color-gray-500);
	}
</style>
