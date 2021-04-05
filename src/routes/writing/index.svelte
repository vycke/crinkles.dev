<script context="module">
	// this is runned on load (check svelKit doc)
	export async function load({ fetch }) {
		let articles;

		try {
			// here you should type your dev.to username
			articles = await fetch(`https://dev.to/api/articles?username=ladvace`);
			articles = await articles.json();
		} catch (e) {
			console.log(e);
		}
		// you can pass the `articles` via props like that
		return {
			props: {
				articles
			}
		};
	}
</script>

<script>
	export let articles;
</script>

<div>
	{#each articles as article}
		<h2>{article.title}</h2>
	{/each}
</div>
