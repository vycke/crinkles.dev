<script>
	import Logo from './Logo.svelte';

	export let title = undefined;
</script>

<header class="center center-w-4 center-g-000 | mt-2 mb-0">
	<div class="flex-row items-center py-000 px-1">
		<Logo />
		{#if title}
			<h1 class="text-1 ml-1 normal monospace">/{title}</h1>
		{/if}
	</div>
</header>

<style lang="scss">
	header {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 100;
		-webkit-backdrop-filter: blur(15px);
		backdrop-filter: blur(15px);
	}
</style>
