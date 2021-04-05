<script>
	let max = 6;
	let triggered = 0;
	let colors = ['text-blue-200', 'text-red-200', 'text-green-200'];

	function trigger() {
		triggered++;
		colors = [colors[1], colors[2], colors[0]];
		if (triggered === 0 || triggered >= max) return;

		window.setTimeout(() => {
			trigger();
		}, 100);
	}
	$: if (triggered === max) triggered = 0;
</script>

<span on:mouseenter={trigger} class="bold">
	<span class={colors[0]}>›</span><span class={colors[1]}>›</span><span class={colors[2]}>›</span>
</span>

<style>
	span {
		transition: all 50ms ease-in-out;
	}
</style>
