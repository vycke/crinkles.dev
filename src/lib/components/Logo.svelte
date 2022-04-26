<script>
	let klass = undefined;
	export { klass as class };
	export let size = 42;
</script>

<a
	href="/"
	aria-label="Logo that redirects to the homepage"
	class="logo | transition-300 no-decoration {klass}"
>
	<svg
		width={size}
		height={size}
		viewBox="0 0 50 50"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M28.1623 49.4868L43.1623 44.4868C47.2457 43.1257 50 39.3043 50 35L50 15C50 10.6957 47.2457 6.87432 43.1623 5.51318L28.1623 0.513178C26.1096 -0.171045 23.8904 -0.171046 21.8377 0.513177L6.83773 5.51317C2.7543 6.87431 -3.78606e-07 10.6957 -7.549e-07 15L-6.31805e-06 35C-6.69435e-06 39.3043 2.75429 43.1257 6.83772 44.4868L21.8377 49.4868C23.8904 50.1711 26.1096 50.1711 28.1623 49.4868ZM23.4189 5.25659C23.932 5.08554 24.466 5.00001 25 5.00001L25 15C19.4772 15 15 19.4772 15 25C15 30.5229 19.4772 35 25 35L25 45C24.466 45 23.932 44.9145 23.4189 44.7434L8.41885 39.7434C6.37714 39.0629 4.99999 37.1522 4.99999 35L5 15C5 12.8479 6.37715 10.9372 8.41886 10.2566L23.4189 5.25659ZM20 25C20 22.2386 22.2386 20 25 20C27.7614 20 30 22.2386 30 25C30 27.7614 27.7614 30 25 30C22.2386 30 20 27.7614 20 25Z"
			fill="var(--color-primary)"
		/>
	</svg>
</a>

<style>
	.logo:hover {
		transform: rotate(360deg);
	}

	.logo svg {
		display: block;
	}
</style>
