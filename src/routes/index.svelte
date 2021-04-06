<script context="module">
	import Crinkle from '$lib/components/Crinkle.svelte';
	import Page from '$lib/components/Page.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export async function load({ fetch }) {
		const res = await fetch('/index.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Card from '$lib/components/Card.svelte';

	export let articles;
</script>

<svelte:head>
	<title>Kevin Pennekamp</title>
</svelte:head>

<Page width="5" class="center-layout flow flow-g-3">
	<section class="splitter splitter-w-2 mt-1 splitter-g-3">
		<div class="flow flow-g-000">
			<h1 class="title">Hi, I'm Kevin.</h1>
			<span>
				<Crinkle /> I'm a Software Engineer working at
				<a href="https://finaps.nl" title="Website of Finaps B.V."> Finaps </a>
				where I lead a small team. I am a big <i>front-end</i> and <i>CSS</i> lover, and
				occasionally <a class="next" href="/writing">write</a> about it.
			</span>
		</div>
		<aside class="flex-col flow">
			<!-- <h2 class="text-1 mb-1">Writing</h2> -->
			{#each articles as article}
				<Card {...article} href="/writing/{article.slug}" />
			{/each}

			<a href="/writing" class="self-end mt-1 text-0" sveltekit:prefetch>View more articles →</a>
		</aside>
	</section>

	<!-- <Pagination previous={{ url: '/writing', title: 'Writing', subtitle: 'View more articles' }} /> -->
</Page>
