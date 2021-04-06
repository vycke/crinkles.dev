<script>
	export let title;
	// export let description;
	export let href;
	export let date;

	$: formattedDate = new Date(date).toDateString();
</script>

<div class="flex-col flex-g-000 click-area bg-gray-400 p-1">
	<h2 class="text-0 text-gray-100"><a {href}>{title}</a></h2>
	<span class="text-00 text-gray-300">{formattedDate}</span>
	<!-- <span class="text-00 text-gray-300">{description}</span> -->
</div>

<style>
	h2 a {
		text-decoration-color: rgba(0, 0, 0, 0);
	}
</style>
