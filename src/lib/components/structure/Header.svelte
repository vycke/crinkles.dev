<script>
	let klass = '';
	export { klass as class };
	let size = 38;
	export let title = 'Crinkles studio';
</script>

<header class={`text-left mt-1 mb-0 | ${klass}`}>
	<div class="flex-row items-center">
		<a href="/" aria-label="Logo that redirects to the homepage" class="no-decoration">
			<svg height={size} viewBox="0 0 40 54" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M21.6967 36.1231L27 30.8198L32.3033 36.1231C35.2322 39.052 35.2322 43.8008 32.3033 46.7297C29.3744 49.6586 24.6256 49.6586 21.6967 46.7297C18.7678 43.8008 18.7678 39.052 21.6967 36.1231ZM23.4645 27.2843L18.1612 21.981C16.1714 19.9912 14.9926 17.4974 14.625 14.9105L7.55455 21.981C4.62562 24.9099 4.62562 29.6586 7.55455 32.5876L14.625 39.658C14.9926 37.0711 16.1713 34.5774 18.1612 32.5876L23.4645 27.2843ZM18.1612 50.2652C23.0427 55.1468 30.9573 55.1468 35.8388 50.2652C40.7204 45.3837 40.7204 37.4691 35.8388 32.5876L30.5355 27.2843L35.8388 21.981C40.7204 17.0994 40.7204 9.18485 35.8388 4.3033C30.9573 -0.578256 23.0427 -0.578255 18.1612 4.3033L4.01902 18.4454C-0.862537 23.327 -0.862538 31.2416 4.01902 36.1231L18.1612 50.2652ZM32.3033 18.4454L27 23.7487L21.6967 18.4454C18.7678 15.5165 18.7678 10.7678 21.6967 7.83883C24.6256 4.9099 29.3744 4.9099 32.3033 7.83883C35.2322 10.7678 35.2322 15.5165 32.3033 18.4454Z"
					fill="var(--color-fg-0)"
				/>
			</svg>
		</a>
		<div class="flex-col ml-1 items-start">
			<h1 class="text-1 bold text-nowrap lh-0">{title}</h1>
			<span class="serif bold italic text-primary lh-0">Crafting interfaces</span>
		</div>
	</div>
</header>

<style>
	a {
		display: block;
	}
	svg {
		transition: all 300ms;
	}
	svg:hover {
		transform: rotate(360deg);
	}
</style>
