<script>
	import Page from '$lib/components/Page.svelte';

	export let error;
	export let status;
</script>

<svelte:head>
	<title>🙈🙉🙊</title>
</svelte:head>

<Page class="text-center self-center">
	{#if status && error}
		<h1>{status} • {error?.message}</h1>
	{/if}
	{#if !(status && error)}
		<h1>Something went wrong</h1>
	{/if}
	<h2>
		<span role="img" aria-label="Sorry emoji" aria-labelledby=""> 🙈🙉🙊 </span>
	</h2>
</Page>
