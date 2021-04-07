<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/writing.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Card from '$lib/components/Card.svelte';
	import Page from '$lib/components/Page.svelte';

	export let articles;
</script>

<svelte:head>
	<title>Writing • Kevin Pennekamp</title>
</svelte:head>

<Page class="center-layout flow flow-g-2 mb-3">
	<h1>Writing.</h1>
	{#each articles as article}
		<Card
			date={article.date}
			title={article.title}
			description={article.description}
			href="/writing/{article.slug}/"
		/>
	{/each}
</Page>
