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
	class={`logo ${klass}`}
>
	<svg width="32" height="32" viewBox="0 0 283 283" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g filter="url(#filter0_d)">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M141.5 0C65.5608 0 4 61.5608 4 137.5C4 213.439 65.5608 275 141.5 275C217.439 275 279 213.439 279 137.5C279 61.5608 217.439 0 141.5 0ZM126.768 40.1539C126.768 35.0264 122.231 31.0534 117.234 32.2004C69.2518 43.2127 33.4643 86.177 33.4643 137.5C33.4643 188.823 69.2518 231.787 117.234 242.8C122.231 243.947 126.768 239.974 126.768 234.846L126.768 40.1539ZM156.232 177.673C156.232 171.159 163.283 167.088 168.924 170.345L218.414 198.918C222.861 201.485 224.029 207.409 220.528 211.164C206.081 226.656 187.133 237.896 165.766 242.8C160.769 243.947 156.232 239.974 156.232 234.846V177.673ZM244.831 169.132C243.331 174.038 237.619 175.983 233.176 173.418L183.657 144.828C178.016 141.571 178.016 133.429 183.657 130.172L233.176 101.582C237.619 99.0166 243.331 100.962 244.831 105.868C247.89 115.872 249.536 126.494 249.536 137.5C249.536 148.506 247.89 159.128 244.831 169.132ZM220.528 63.8357C224.029 67.5906 222.861 73.5151 218.414 76.0822L168.924 104.655C163.283 107.912 156.232 103.841 156.232 97.3274L156.232 40.1539C156.232 35.0264 160.769 31.0533 165.766 32.2003C187.133 37.1041 206.081 48.3436 220.528 63.8357Z"
				fill="url(#paint0_linear)"
			/>
		</g>
		<defs>
			<filter
				id="filter0_d"
				x="0"
				y="0"
				width="283"
				height="283"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				/>
				<feOffset dy="4" />
				<feGaussianBlur stdDeviation="2" />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
			</filter>
			<linearGradient
				id="paint0_linear"
				x1="25"
				y1="238"
				x2="239.5"
				y2="23.5"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#E8D9AC" />
				<stop offset="0.516994" stop-color="#A7B1BC" />
				<stop offset="1" stop-color="#5467FF" />
			</linearGradient>
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
			background: var(--color-gray-400);
		}
	}
</style>
