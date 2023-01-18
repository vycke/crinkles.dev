<script>
	let klass = '';
	export { klass as class };
	export let fade = true;
	export let scale = false;
</script>

<div class="list-group {klass}" class:fade class:scale role="list">
	<slot />
</div>

<style global>
	.list-group > * {
		transition: all 0.25s;
	}

	@media (hover: hover) {
		.list-group:hover.fade > *:not(:hover) {
			opacity: 0.4;
		}

		.list-group.scale > *:hover {
			transform: matrix(1.075, 0, 0, 1.075, 0, 0);
		}
	}
</style>
