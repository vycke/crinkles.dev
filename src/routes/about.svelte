<script context="module">
	export const hydrate = false;
	import Header from '$lib/components/structure/Header.svelte';
	import Main from '$lib/components/structure/Main.svelte';
	import Page from '$lib/components/structure/Page.svelte';
</script>

<Page title="About | Crinkles">
	<Header class="center center-w-3 center-g-1" />
	<Main class="flex-grow stack stack-g-0 | my-3 text-0">
		<h1>About</h1>
		<p>
			A crinkle crankle wall is an unusual type of structural or garden wall built in a serpentine
			shape with alternating curves. Its structure helps to resist lateral forces, leading to
			greather strength to normal straight walls. They use less bricks than multi-layer walls to
			gain the same strength.
		</p>
		<p>
			Crinkles Studio creates UI solutions for users and developers with this same <i
				>anti-fragile</i
			>
			mindset. Software solutions should be of high quality, but implemented with effective patterns
			and methods.
		</p>
	</Main>
</Page>
