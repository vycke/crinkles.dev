<script context="module">
	export const hydrate = false;
	import Page from '$lib/components/Page.svelte';
	import { quote } from '$lib/constants';
</script>

<Page class="stack stack-g-0 | mb-3 text-0" title="Meta | Crinkles">
	<blockquote class="text-1 bold">{quote}</blockquote>

	<p>
		Crinkles studio (cs.) is a creative agency specialized in improving front-end developer
		experience through writing, mentoring and creating tools. It also acts as the digital portfolio
		and playground of its founder, Kevin Pennekamp. The creation of this website is currently build
		using:
	</p>
	<ul>
		<li>A minimal theme inspired by <a href="https://nordtheme.com">Nord theme</a>.</li>
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
		<a href="https://feo.crinkles.io" title="Link to documentation website of Feo CSS">
			(S)CSS framework called Feo CSS</a
		>.
	</p>
</Page>
