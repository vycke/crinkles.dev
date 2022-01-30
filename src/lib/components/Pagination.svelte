<script>
	export let next = undefined;
	export let previous = undefined;
</script>

<section class="sidebar-l sidebar-w-5 gap-4 | p-4 my-6">
	{#if next}
		<a class="flex-col items-start justify-center no-decoration" sveltekit:prefetch href={next.url}>
			<span class="text-grey-2 text-2 uppercase">← Next</span>
			<h3>{next.subtitle}</h3>
		</a>
	{/if}
	{#if previous}
		<a
			class="flex-col items-end justify-center | text-right no-decoration"
			sveltekit:prefetch
			href={previous.url}
		>
			<span class="text-grey-2 text-2 uppercase">Previous →</span>
			<h3>{previous.subtitle}</h3>
		</a>
	{/if}
</section>
