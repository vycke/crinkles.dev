<script>
	let max = 6;
	let triggered = 0;
	let className = '';
	export { className as class };
	let colors = ['secondary-0', 'primary-0', 'tertiary-0'];

	function trigger() {
		triggered++;
		colors = [colors[2], colors[0], colors[1]];
		if (triggered === 0 || triggered >= max) return;

		window.setTimeout(() => {
			trigger();
		}, 200);
	}
	$: if (triggered === max) triggered = 0;
</script>

<span on:mouseenter={trigger} class={`bold ${className}`}>
	<span class="transition-200 text-{colors[0]}">›</span><span
		class="transition-200 text-{colors[1]}">›</span
	><span class="transition-200 text-{colors[2]}">›</span>
</span>
