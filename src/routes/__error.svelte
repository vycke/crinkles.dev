<script context="module">
	export async function load({ error, status, fetch }) {
		// const res = await fetch('/api/latestArticles.json');
		return {
			props: { status, error }
		};
	}
</script>

<script>
	import Page from '$lib/components/Page.svelte';
	import Card from '$lib/components/Card.svelte';

	export let status;
	// export let articles;
</script>

<svelte:head>
	<title>🙈🙉🙊</title>
</svelte:head>

<Page class="flow-y | mb-3 text-00" headerTitle={status}>
	<h1 class="mb-00 text-center">
		<span role="img" aria-label="Sorry emoji" aria-labelledby=""> 🙈🙉🙊 </span>
	</h1>
	<h2 class="text-center">Something went wrong...</h2>
	<span class="text-gray-300 mb-2 text-0 text-center">
		The page you were looking for probably does not exist (anymore) or has moved. But feel free to
		look at one of my latest articles!
	</span>
	<!-- <aside class="flow-y flow-g-0">
		{#each articles as article}
			<Card>
				<span class="text-000 text-gray-300 monospace uppercase">
					{article.formattedDate}
				</span>
				<h2 class="text-0 text-gray-100">
					<a href="/writing/{article.slug}">{article.title}</a>
				</h2>
			</Card>
		{/each}
	</aside> -->
	<a href="/writing" class="self-end | no-decoration mt-1 mb-3 text-0 bold" sveltekit:prefetch>
		View more articles →
	</a>
</Page>
