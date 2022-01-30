<script context="module">
	export const hydrate = false;
	import Page from '$lib/components/Page.svelte';
	import { quote } from '$lib/constants';
</script>

<Page class="stack stack-g-3 | mb-6 text-3" title="Meta | Crinkles">
	<blockquote class="text-1 bold">{quote}</blockquote>

	<p>
		Crinkles is a digital UI development studio. But this website is also the personal playground of
		Kevin Pennekamp. When you visit this website often, you will find changes almost every time. I
		also take extra care to ensure this is <i>my</i> website, by adding some personal favorite
		<i>crinkles</i>.
	</p>
	<ul>
		<li>
			A minimal & vibrant CMYK color-scheme based on <a
				href="https://www.notion.so/revolverds/The-Dutch-DS-Two-FACE-319cac25871d467b9261610ff7fce76e"
				alt="Article explaining two-face">Two-FACE</a
			>
			themed system by
			<a href="https://twitter.com/Bliepjes" alt="Twitter page of Guus">Guus Hoeve</a>, called BACE
			(very original, I know).
		</li>
		<li>Carefully selected typography around readability of text and code examples.</li>
		<li>
			A <a sveltekit:prefetch href="/writing/fluid-interfaces-using-css">fluid</a> experience across
			screen sizes, which you will only notice if you actively resize your screen.
		</li>
		<li>
			Modern <a sveltekit:prefetch href="/writing/css-layout-patterns">CSS patterns</a> to enhance the
			responsiveness of the website.
		</li>
	</ul>

	<p>
		The current version of this website is created using <a
			href="https://kit.svelte.dev"
			title="Website of SvelteKit"
		>
			SvelteKit
		</a>
		and my own
		<a href="https://bace.crinkles.io" title="Link to documentation website of Bace CSS">
			(S)CSS framework called Bace CSS</a
		>.
	</p>
</Page>
