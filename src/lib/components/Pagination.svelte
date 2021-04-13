<script>
	export let next = undefined;
	export let previous = undefined;
</script>

<section class="splitter splitter-w-1 splitter-g-1 | p-1 mt-3">
	{#if next}
		<a class="flex-col items-start justify-center" sveltekit:prefetch href={next.url}>
			<span>← {next.title || 'Next'}</span>
			<h3>{next.subtitle}</h3>
		</a>
	{/if}
	{#if previous}
		<a
			class="flex-col items-end justify-center | text-right"
			sveltekit:prefetch
			href={previous.url}
		>
			<span>{previous.title || 'Previous'} →</span>
			<h3>{previous.subtitle}</h3>
		</a>
	{/if}
</section>

<style lang="scss">
	a {
		text-decoration-color: rgba(0, 0, 0, 0);
	}

	a > span {
		color: var(--gray-300);
		font-size: var(--text-00);
		text-transform: uppercase;
	}
</style>
