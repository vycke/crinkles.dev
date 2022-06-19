<script context="module">
	export const prerender = true;
	export async function load({ error, status, fetch }) {
		return { props: { status, error } };
	}
</script>

<script>
	import Header from '$lib/components/structure/Header.svelte';
	import Main from '$lib/components/structure/Main.svelte';
	import Page from '$lib/components/structure/Page.svelte';
	export let status;
	export let error;

	$: console.log({ error });
</script>

<svelte:head>
	<title>🙈🙉🙊</title>
</svelte:head>

<Page>
	<Header class="center center-w-3 center-g-1"
		><span class="text-2 ml-2 bold">Code: {status}</span></Header
	>
	<Main class="stack | mb-3 text-00">
		<h1 class="mb-00 text-center">
			<span role="img" aria-label="Sorry emoji" aria-labelledby=""> 🙈🙉🙊 </span>
		</h1>
		<h2 class="text-center">Something went wrong...</h2>
		<p class="text-grey-2 mb-2 text-0 text-center">
			The page you were looking for probably does not exist (anymore) or has moved. But feel free to
			look at one of my latest articles!
		</p>

		<p>{error.message}</p>
	</Main>
</Page>
