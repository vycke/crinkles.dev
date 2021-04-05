<!-- src/component/PageTransitions.svelte -->
<script>
	import { fly } from 'svelte/transition';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';

	$: widthClass = `page-width-${width}`;
	$: classes = `${widthClass} ${styles}`;

	let styles;
	export { styles as class };
	export let width = '4';
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

<Header class={widthClass} />
<main class={classes} in:fly={{ y: 50, duration: 250 }}>
	<slot />
</main>
<Footer />
