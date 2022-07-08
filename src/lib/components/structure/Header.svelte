<script>
	let klass = '';
	export { klass as class };
	let size = 42;
	export let title = 'Crinkles studio';
</script>

<header class={`text-left mt-1 mb-0 | ${klass}`}>
	<div class="flex-row items-center">
		<a href="/" aria-label="Logo that redirects to the homepage" class="no-decoration">
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
					d="M43.1623 44.4868L28.1623 49.4868C26.1096 50.1711 23.8904 50.1711 21.8377 49.4868L6.83772 44.4868C2.7543 43.1257 0 39.3043 0 35L2.31474e-06 15C2.69103e-06 10.6957 2.7543 6.8743 6.83773 5.51316L21.8377 0.513167C23.8904 -0.171056 26.1096 -0.171055 28.1623 0.513167L43.1623 5.51317C47.2457 6.87431 50 10.6957 50 15L50 35C50 39.3043 47.2457 43.1257 43.1623 44.4868ZM8.41886 10.2566L22.5 5.56287V15.315C18.1869 16.4252 15 20.3404 15 25C15 29.6596 18.1869 33.5748 22.5 34.685V44.4371L8.41886 39.7434C6.37715 39.0628 5 37.1522 5 35L5 15C5 12.8478 6.37715 10.9372 8.41886 10.2566ZM27.5 44.4371L41.5811 39.7434C43.6228 39.0629 45 37.1522 45 35L45 15C45 12.8479 43.6229 10.9372 41.5811 10.2566L27.5 5.56287V15.315C31.8131 16.4252 35 20.3404 35 25C35 29.6596 31.8131 33.5749 27.5 34.685V44.4371ZM25 20C22.2386 20 20 22.2386 20 25C20 27.7614 22.2386 30 25 30C27.7614 30 30 27.7614 30 25C30 22.2386 27.7614 20 25 20Z"
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
