<script>
	import { fly } from 'svelte/transition';

	let styles = '';
	export { styles as class };
	export let width = 3;
</script>

<main
	class={`center center-w-${width} center-g-1 | flex-grow ${styles}`}
	in:fly={{ y: 50, duration: 250 }}
>
	<slot />
</main>
