<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		const res = await fetch('/writing.json');
		return {
			props: {
				articles: await res.json()
			}
		};
	}
</script>

<script>
	import Page from '$lib/components/Page.svelte';

	export let articles;
</script>

<Page width="4" class="center-layout">
	<ul>
		{#each articles as article}
			<li><a href="/writing/{article.slug}">{article.title}</a></li>
		{/each}
	</ul>
</Page>
