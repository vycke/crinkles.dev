<script>
	let klass = '';
	export { klass as class };
</script>

<div class="dotted mx-0 {klass}" />

<style>
	.dotted {
		border-bottom: 1px dashed var(--color-fg-1);
	}
</style>
