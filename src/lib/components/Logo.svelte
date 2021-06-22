<script>
	import { spring } from 'svelte/motion';

	let triggered = false;
	let springyRotation = spring(0, { stiffness: 0.2, damping: 0.15 });
	$: springyRotation.set(triggered ? -20 : 0);
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
	class={`logo | p-000 no-decoration radius-3 ${klass}`}
>
	<svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0ZM22.7273 7.2081C22.7273 5.85404 21.5447 4.79039 20.2277 5.10515C11.2329 7.25488 4.54545 15.3465 4.54545 25C4.54545 34.6535 11.2329 42.7451 20.2277 44.8949C21.5447 45.2096 22.7273 44.146 22.7273 42.7919V25.0055C22.7273 25.0037 22.7273 25.0018 22.7273 25C22.7273 24.9982 22.7273 24.9963 22.7273 24.9945V7.2081ZM28.5291 4.84877C27.8621 4.73277 27.2727 5.26217 27.2727 5.9392V12.2938C27.2727 13.2761 28.4726 13.8342 29.313 13.3255C31.3703 12.0803 33.7833 11.3636 36.3636 11.3636C37.2539 11.3636 38.1243 11.449 38.967 11.6119C39.5298 11.7206 39.9686 11.0479 39.5661 10.6398C36.6398 7.67178 32.8132 5.59384 28.5291 4.84877ZM27.2727 24.9955C27.2727 24.997 27.2727 24.9985 27.2727 25C27.2727 25.0015 27.2727 25.003 27.2727 25.0045C27.2752 30.0232 31.3444 34.0909 36.3636 34.0909C41.3844 34.0909 45.4545 30.0208 45.4545 25C45.4545 19.9792 41.3844 15.9091 36.3636 15.9091C31.3444 15.9091 27.2752 19.9768 27.2727 24.9955ZM29.313 36.6745C28.4726 36.1658 27.2727 36.7239 27.2727 37.7062V44.0608C27.2727 44.7378 27.8621 45.2672 28.5291 45.1512C32.8132 44.4062 36.6398 42.3282 39.5661 39.3602C39.9685 38.9521 39.5298 38.2793 38.967 38.3881C38.1243 38.551 37.2539 38.6364 36.3636 38.6364C33.7833 38.6364 31.3703 37.9197 29.313 36.6745Z"
			fill="url(#paint0_linear)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear"
				x1="7.5"
				y1="42.5"
				x2="42.5"
				y2="7.5"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="var(--color-green)" />
				<stop offset="0.5" stop-color="var(--color-gray-300)" />
				<stop offset="1" stop-color="var(--color-blue)" />
			</linearGradient>
		</defs>
	</svg>
</a>

<style lang="scss">
	.logo {
		transition: background-color ease-in-out 200ms;

		svg {
			display: block;
		}

		&:hover {
			background: var(--color-gray-400);
		}
	}
</style>
