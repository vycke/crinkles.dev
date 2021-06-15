<!-- src/component/PageTransitions.svelte -->
<script>
	import { fly } from 'svelte/transition';
	import Header from './Header.svelte';

	let styles;
	export { styles as class };
	export let title = 'Kevin Pennekamp';
	export let description =
		'Personal website of Kevin Pennekamp, a Dutch software engineer. I love CSS, front-end architecture, engineering and writing about it!';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="twitter:title" content={title} />
	<meta property="og:title" content={title} />

	<meta name="description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:description" content={description} />
</svelte:head>

<Header />

<main class={`center center-w-4 center-g-1 ${styles}`} in:fly={{ y: 50, duration: 250 }}>
	<slot />
</main>
<slot name="pagination" />
