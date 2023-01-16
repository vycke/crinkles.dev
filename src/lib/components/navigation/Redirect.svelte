<script>
	export let href;
	let klass = '';
	export { klass as class };
</script>

<a {href} class="view-more | {klass}" sveltekit:prefetch><slot /></a>

<style>
	.view-more,
	.view-more:active {
		color: var(--color-fg-0);
		transition: all 0.25s;
		position: relative;
		padding: 0 var(--size-000);
		margin-right: var(--size-1);
	}

	.view-more:hover {
		color: var(--color-primary);
	}

	.view-more:after {
		content: '→';
		display: inline-block;
		position: absolute;
		right: -12px;
		top: 0.1em;
		transition: all 0.25s;
	}

	.view-more:hover:after {
		right: -24px;
		font-weight: 600;
	}
</style>
