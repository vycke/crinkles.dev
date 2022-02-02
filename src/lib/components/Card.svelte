<script>
	export let type;
</script>

<div data-type={type} class="card | flex-col | click-area | radius-1 transition-200 p-4">
	<slot />
</div>

<style>
	.card {
    border-left: 5px solid var(--color-grey-4);
    border-right: 5px solid var(--color-grey-4);
		background-color: var(--color-grey-4);
	}
	.card:hover,
	.card[data-type="dark"]:hover {
		border-left: 5px solid var(--color-primary);
		border-right: 5px solid var(--color-primary);
	}

	.card[data-type="dark"] {
    border-left: 5px solid var(--color-grey-5);
    border-right: 5px solid var(--color-grey-5);
		background-color: var(--color-grey-5);
	}
</style>