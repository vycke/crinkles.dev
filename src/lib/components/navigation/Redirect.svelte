<script>
	export let href;
	let klass = '';
	export { klass as class };
</script>

<a {href} class="redirect | {klass}" sveltekit:prefetch><slot /></a>

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

	.redirect:after {
		content: '→';
		display: inline-block;
		position: absolute;
		right: -18px;
		top: 0.1em;
		transition: all 0.25s;
	}

	.redirect:hover:after {
		right: -30px;
		font-weight: 600;
	}
</style>
