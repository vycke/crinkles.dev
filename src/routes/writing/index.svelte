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
	export let articles;
</script>

<ul>
	{#each articles as article}
		<li><a href="/writing/{article.slug}">{article.title}</a></li>
	{/each}
</ul>
