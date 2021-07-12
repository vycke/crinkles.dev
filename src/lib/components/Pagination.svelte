<script>
	export let next = undefined;
	export let previous = undefined;
</script>

<section class="panel-l panel-w-3 panel-g-1 | p-1 my-4">
	{#if next}
		<a class="flex-col items-start justify-center no-decoration" sveltekit:prefetch href={next.url}>
			<span class="text-gray-200 text-00 uppercase monospace">← Next</span>
			<h3>{next.subtitle}</h3>
		</a>
	{/if}
	{#if previous}
		<a
			class="flex-col items-end justify-center | text-right no-decoration"
			sveltekit:prefetch
			href={previous.url}
		>
			<span class="text-gray-200 text-00 uppercase monospace">Previous →</span>
			<h3>{previous.subtitle}</h3>
		</a>
	{/if}
</section>
