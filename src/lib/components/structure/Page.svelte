<script>
	import { description as _desc, title as _title } from '$lib/constants';

	export let title = _title;
	export let description = _desc;
</script>

<svelte:head>
	<title>{title} • Crinkles</title>
	<meta name="twitter:title" content={title} />
	<meta property="og:title" content={title} />

	<meta name="description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:description" content={description} />
</svelte:head>

<slot />
