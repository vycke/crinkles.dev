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
	export let articles;
</script>

<svelte:head>
	<title>Kevin Pennekamp</title>
</svelte:head>

<Page width="5" class="center-layout flow flow-g-3">
	<section class="splitter splitter-w-1 mt-1">
		<div class="flow flow-g-000">
			<h1 class="title">Hi, I'm Kevin.</h1>
			<span>
				<Crinkle /> I'm a Software Engineer working at
				<a href="https://finaps.nl" title="Website of Finaps B.V."> Finaps </a>
				where I lead a small team. I am a big <i>front-end</i> and <i>CSS</i> lover, and
				occasionally <a class="next" href="/writing">write</a> about it.
			</span>
		</div>
		<aside>
			<ul>
				{#each articles as article}
					<li><a href="/writing/{article.slug}">{article.title}</a></li>
				{/each}
			</ul>
		</aside>
	</section>

	<Pagination previous={{ url: '/writing', title: 'Writing', subtitle: 'View more articles' }} />
</Page>
