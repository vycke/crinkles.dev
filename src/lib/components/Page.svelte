<!-- src/component/PageTransitions.svelte -->
<script>
	import { description as _desc, title as _title } from '$lib/constants';
	import { fly } from 'svelte/transition';
	import Logo from './Logo.svelte';

	let styles = '';
	export { styles as class };
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

<div class="flex-grow text-0 relative">
	<header class="center center-w-3 center-g-1 | mt-1 mb-0">
		<div class="flex-row gap-0 items-center py-000">
			<Logo />
			<!-- <a href="/" sveltekit:prefetch class="text-3 bold italic serif no-decoration">crinkles</a> -->
		</div>
	</header>

	<main class={`center center-w-3 center-g-1 ${styles}`} in:fly={{ y: 50, duration: 250 }}>
		<slot />
	</main>
</div>
