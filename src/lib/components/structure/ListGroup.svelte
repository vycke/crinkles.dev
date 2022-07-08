<script>
	let klass = '';
	export { klass as class };
	export let fade = false;
</script>

<div class="list-group {klass}" class:fade role="list">
	<slot />
</div>

<style global>
	.list-group:hover.fade > *:not(:hover) {
		opacity: 0.4;
	}

	.list-group > * {
		transition: all 0.25s;
	}

	.list-group > *:hover {
		transform: matrix(1.075, 0, 0, 1.075, 0, 0);
	}
</style>
