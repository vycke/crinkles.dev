<script>
	let max = 6;
	let triggered = 0;
	let colors = ['text-blue', 'text-red', 'text-green'];

	function trigger() {
		triggered++;
		colors = [colors[1], colors[2], colors[0]];
		if (triggered === 0 || triggered >= max) return;

		window.setTimeout(() => {
			trigger();
		}, 200);
	}
	$: if (triggered === max) triggered = 0;
</script>

<span on:mouseenter={trigger} class="bold">
	<span class={colors[0]}>›</span><span class={colors[1]}>›</span><span class={colors[2]}>›</span>
</span>

<style>
	span {
		transition: all 200ms ease-in-out;
	}
</style>
