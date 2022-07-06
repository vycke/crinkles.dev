<script>
	let klass = '';
	export { klass as class };
</script>

<div class="list-group {klass}" role="list">
	<slot />
</div>

<style global>
	.list-group:hover > *:not(:hover) {
		opacity: 0.4;
	}

	.list-group > * {
		transition: all 0.25s;
	}

	.list-group > *:hover {
		transform: matrix(1.075, 0, 0, 1.075, 0, 0);
	}
</style>
