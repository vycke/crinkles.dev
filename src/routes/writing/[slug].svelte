<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`/writing/${page.params.slug}.json`);
		if (res.ok) return { props: { article: await res.json() } };

		return {
			status: res.status,
			error: new Error(`Could not find article '${page.params.slug}'`)
		};
	}
</script>

<script>
	import Page from '$lib/components/Page.svelte';
	import length from '$lib/utils/length';

	export let article;
	$: date = new Date(article.date).toDateString();
	$: num = length(article.html);
</script>

<svelte:head>
	<meta property="og:type" content="article" />
</svelte:head>

<Page width="4" class="flow pb-3 pt-1" title={article.title} description={article.description}>
	<header class="center-layout flow flow-g-none" role="contentinfo">
		<span class="text-gray-300 uppercase">
			<time datetime={date}>{date}</time>
			{` • ${num}`}
		</span>
		<h1>{article.title}</h1>
	</header>
	<article class="center-layout flow flow-g-2 post">{@html article.html}</article>
</Page>
