<script>
	export let type;
</script>

<div data-type={type} class="card | flex-col | click-area | radius-1 transition-200 p-4">
	<slot />
</div>

<style>
	.card {
		border: 2px solid transparent;
		background-color: var(--color-grey-5);
	}
	.card:hover {
		border: 2px solid var(--color-primary);
	}

	.card[data-type='dark'] {
		background-color: var(--color-grey-4);
	}
</style>
