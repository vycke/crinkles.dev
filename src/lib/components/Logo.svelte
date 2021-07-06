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
	class={`logo | no-decoration radius-3 hover:bg-gray-300 ${klass}`}
>
	<svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0ZM22.3214 7.30071C22.3214 6.36844 21.4966 5.64606 20.5879 5.85461C11.864 7.85685 5.35714 15.6686 5.35714 25C5.35714 34.3314 11.864 42.1431 20.5879 44.1454C21.4966 44.3539 22.3214 43.6316 22.3214 42.6993L22.3214 7.30071ZM27.6786 32.3041C27.6786 31.1198 28.9606 30.3796 29.9863 30.9718L38.9844 36.1669C39.7929 36.6336 40.0053 37.7108 39.3687 38.3935C36.742 41.2102 33.2968 43.2538 29.4121 44.1454C28.5034 44.3539 27.6786 43.6316 27.6786 42.6993V32.3041ZM43.7875 30.7513C43.5147 31.6434 42.4763 31.997 41.6684 31.5306L32.6648 26.3323C31.6392 25.7402 31.6392 24.2598 32.6648 23.6677L41.6684 18.4694C42.4763 18.003 43.5147 18.3566 43.7875 19.2487C44.3436 21.0677 44.6429 22.9989 44.6429 25C44.6429 27.0011 44.3436 28.9323 43.7875 30.7513ZM39.3687 11.6065C40.0053 12.2892 39.7929 13.3664 38.9844 13.8331L29.9863 19.0282C28.9606 19.6204 27.6786 18.8802 27.6786 17.6959V7.30071C27.6786 6.36844 28.5034 5.64606 29.4121 5.85461C33.2968 6.7462 36.742 8.78975 39.3687 11.6065Z"
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
				<!-- <stop offset="0.5" stop-color="var(--color-purple)" /> -->
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
	}
</style>
