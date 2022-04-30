<script context="module">
	export const prerender = true;
	export async function load({ error, status, fetch }) {
		return { props: { status, error } };
	}
</script>

<script>
	import Page from '$lib/components/structure/Page.svelte';
	export let status;
</script>

<svelte:head>
	<title>🙈🙉🙊</title>
</svelte:head>

<Page class="stack | mb-3 text-00" headerTitle={status}>
	<h1 class="mb-00 text-center">
		<span role="img" aria-label="Sorry emoji" aria-labelledby=""> 🙈🙉🙊 </span>
	</h1>
	<h2 class="text-center">Something went wrong...</h2>
	<span class="text-grey-2 mb-2 text-0 text-center">
		The page you were looking for probably does not exist (anymore) or has moved. But feel free to
		look at one of my latest articles!
	</span>
</Page>
