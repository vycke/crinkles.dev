<script>
	import Logo from './Logo.svelte';

	let styles;
	export { styles as class };
</script>

<header class={styles}>
	<div class="inner flex-row items-center justify-between mb-0">
		<Logo />
	</div>
</header>

<style lang="scss">
	header {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 100;
		width: 100%;
		margin: var(--spacing-2) auto var(--spacing-0);
		-webkit-backdrop-filter: blur(20px);
		backdrop-filter: blur(20px);

		.inner {
			width: 100%;
			max-width: calc(var(--page-width) + 2 * var(--spacing-1));
			margin: 0 auto;
			padding: var(--spacing-000) calc(var(--spacing-1) - var(--spacing-00));
		}
	}
</style>
