<script>
	import Logo from './Logo.svelte';
</script>

<header class="center center-w-4 center-g-000 | mt-2 mb-0">
	<div class="flex-row items-center py-000">
		<Logo />
	</div>
</header>

<style lang="scss">
	header {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 100;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}
</style>
