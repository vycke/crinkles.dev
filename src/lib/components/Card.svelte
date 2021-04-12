<script>
	import formatDate from '$lib/utils/date';

	export let href;
	export let title;
	export let description;
	export let date;

	let klass;
	export { klass as class };

	$: formattedDate = formatDate(date);
</script>

<div class="flex-col | click-area | {klass}">
	<span class="text-00 text-gray-300 uppercase">{formattedDate}</span>
	<h2 class="text-0 text-gray-100">
		<a {href} class="hover:text-green">{title}</a>
	</h2>
	<span class="text-00 text-gray-300 mt-000">{description}</span>
</div>

<style lang="scss">
	h2 a {
		text-decoration: none;
	}
</style>
