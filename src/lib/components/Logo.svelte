<script>
	import { spring } from 'svelte/motion';

	let triggered = false;
	let springyRotation = spring(0, { stiffness: 0.2, damping: 0.15 });
	$: springyRotation.set(triggered ? 10 : 0);
	$: style = `transform: rotate(${$springyRotation}deg)`;

	$: if (triggered)
		window.setTimeout(() => {
			triggered = false;
		}, 200);

	function trigger() {
		triggered = true;
	}

	let klass = undefined;
	export { klass as class };
</script>

<a
	on:mouseenter={trigger}
	on:click={trigger}
	{style}
	href="/"
	aria-label="Logo that redirects to the homepage"
	class={`logo ${klass}`}
>
	<svg width="29" height="35" viewBox="0 0 238 285" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M208.44 25.2809L178.002 7.81481C159.844 -2.60492 137.515 -2.60494 119.357 7.81479L29.56 59.3431C11.2748 69.8357 0 89.2976 0 110.368V174.632C0 195.702 11.2748 215.164 29.56 225.657L119.357 277.185C137.515 287.605 159.844 287.605 178.002 277.185L208.44 259.719C247.853 237.102 247.853 180.286 208.44 157.67L182.004 142.5L208.44 127.33C247.853 104.714 247.853 47.8976 208.44 25.2809ZM160.409 38.4296L190.846 55.8957C206.612 64.9424 206.612 87.6687 190.846 96.7155L48.5606 178.364C42.6724 181.743 35.3298 177.495 35.3298 170.71V110.368C35.3298 101.94 39.8397 94.1549 47.1538 89.9579L136.95 38.4296C144.214 34.2617 153.145 34.2617 160.409 38.4296ZM146.532 162.855L68.7973 207.462L136.95 246.57C144.214 250.738 153.145 250.738 160.409 246.57L190.846 229.104C206.612 220.058 206.612 197.331 190.846 188.285L146.532 162.855Z"
			fill="url(#paint0_linear)"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M208.44 25.2809L178.002 7.81481C159.844 -2.60492 137.515 -2.60494 119.357 7.81479L29.56 59.3431C11.2748 69.8357 0 89.2976 0 110.368V174.632C0 195.702 11.2748 215.164 29.56 225.657L119.357 277.185C137.515 287.605 159.844 287.605 178.002 277.185L208.44 259.719C247.853 237.102 247.853 180.286 208.44 157.67L182.004 142.5L208.44 127.33C247.853 104.714 247.853 47.8976 208.44 25.2809ZM160.409 38.4296L190.846 55.8957C206.612 64.9424 206.612 87.6687 190.846 96.7155L48.5606 178.364C42.6724 181.743 35.3298 177.495 35.3298 170.71V110.368C35.3298 101.94 39.8397 94.1549 47.1538 89.9579L136.95 38.4296C144.214 34.2617 153.145 34.2617 160.409 38.4296ZM146.532 162.855L68.7973 207.462L136.95 246.57C144.214 250.738 153.145 250.738 160.409 246.57L190.846 229.104C206.612 220.058 206.612 197.331 190.846 188.285L146.532 162.855Z"
			fill="url(#paint1_radial)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear"
				x1="236.32"
				y1="208.335"
				x2="-13.153"
				y2="39.4661"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0.229167" stop-color="#FF0056" />
				<stop offset="0.520833" stop-color="#3676F8" />
			</linearGradient>
			<radialGradient
				id="paint1_radial"
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(1.9595e-05 285) rotate(-25.4819) scale(331.221 284.72)"
			>
				<stop offset="0.411458" stop-color="#2EC997" />
				<stop offset="0.661458" stop-color="#2EC997" stop-opacity="0" />
			</radialGradient>
		</defs>
	</svg>
</a>

<style lang="scss">
	.logo {
		padding: var(--spacing-00);
		text-decoration: none;
		border-radius: var(--radius-1);
		transition: background-color ease-in-out 200ms;

		svg {
			display: block;
		}

		&:hover {
			background: var(--gray-400);
		}
	}
</style>
