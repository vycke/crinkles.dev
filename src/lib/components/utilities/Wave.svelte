<script>
	let klass = '';
	export { klass as class };
	export let scale = 1;

	$: transform = (100 * ((1 - scale) / 2)) / scale;
</script>

<div class="wave {klass}" style="transform: scale({scale}) translateX(-{transform}%);" />

<style>
	.wave {
		background: var(--color-primary);
		min-height: 40px;
		width: 100%;

		--mask: radial-gradient(
					30.62px at 50% calc(100% + 15.6px),
					#0000 calc(99% - 4px),
					#000 calc(101% - 4px) 99%,
					#0000 101%
				)
				calc(50% - 48px) calc(50% - 14px + 0.5px) / 96px 28px repeat-x,
			radial-gradient(
					30.62px at 50% -15.6px,
					#0000 calc(99% - 4px),
					#000 calc(101% - 4px) 99%,
					#0000 101%
				)
				50% calc(50% + 14px) / 96px 28px repeat-x;
		-webkit-mask: var(--mask);
		mask: var(--mask);
	}
</style>
