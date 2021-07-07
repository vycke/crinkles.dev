<script context="module">
	export const prerender = true;
	import Crinkle from '$lib/components/Crinkle.svelte';
	import Page from '$lib/components/Page.svelte';
</script>

<Page class="flow-y flow-g-0 | mb-3 text-0" title="Meta | Crinkles" headerTitle="meta.">
	<blockquote>
		A crinkle (/ˈkrɪŋk(ə)l/) is a wrinkle or crease on a surface. It highlights personality and
		uniqueness.
	</blockquote>

	<p>
		<Crinkle /> Welcome to my playground! As a Front-end Engineer I love tinkering around. If you regularly
		visit, you will see many small things change. I am always trying new things to improve this website.
		I also take extra care to ensure this is <i>my</i> website, by adding some personal favorite
		<i>crinkles</i>. Some of my favorite that currently can be found on this website are:
	</p>
	<ul>
		<li>A vibrant color-scheme on top of a dark-mode only website applied in different ways.</li>
		<li>Carefully selected typography around readability of text and code examples.</li>
		<li>
			Small personal touches throughout the website, like the <Crinkle />, or page transitions
		</li>
		<li>Boxes to highlight extra information in my writing for those interested.</li>
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
		<a href="https://feo.crinkles.io" title="Link to documentation website of Feo">
			(S)CSS framework called Feo</a
		>, based on
		<a href="https://cube.fyi" title="Website for the CUBE CSS framework"> CUBE CSS</a>.
	</p>
</Page>
