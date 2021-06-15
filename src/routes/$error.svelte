<script>
	import Header from '$lib/components/Header.svelte';
	import Page from '$lib/components/Page.svelte';

	export let error;
	export let status;
</script>

<svelte:head>
	<title>🙈🙉🙊</title>
</svelte:head>

<Page class="place-center flow-y">
	<Header />
	<h1>{status} • {error.message}</h1>
	<h2>
		<span role="img" aria-label="Sorry emoji" aria-labelledby=""> 🙈🙉🙊 </span>
	</h2>
</Page>
