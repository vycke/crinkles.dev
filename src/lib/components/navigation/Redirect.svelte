<script>
	export let href;
	let klass = '';
	export { klass as class };
</script>

<a {href} class="redirect | {klass}" sveltekit:prefetch><slot /><span class="arrow">→</span></a>

<style>
	.redirect,
	.redirect:active {
		color: var(--color-fg-0);
		transition: all 0.25s;
		position: relative;
		padding: 0;
		margin-right: var(--size-1);
	}

	.redirect:hover {
		color: var(--color-primary);
	}

	.arrow {
		display: inline-block;
		position: absolute;
		right: -20px;
		top: 0.05em;
		transition: all 0.25s;
	}

	.redirect:hover .arrow {
		right: -28px;
		font-weight: 600;
	}
</style>
