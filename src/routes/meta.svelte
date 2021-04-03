<script context="module">
	import { prefetch } from '$app/navigation';
	import Crinkle from '$lib/components/Crinkle.svelte';

	export const prerender = true;

	const title = 'About this website';
</script>

<svelte:head><title>{title}</title></svelte:head>

<main class="center-layout flow pb-3 text-00">
	<h1 class="flow-b-000">{title}</h1>
	<blockquote>
		"A crinkle (/ˈkrɪŋk(ə)l/) is a wrinkle or crease on a surface. It highlights personality and
		uniqueness."
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
			Small personal touches throughout the website, like <Crinkle />
		</li>
		<li>Boxes to highlight extra information in my writing for those interested.</li>
		<li>
			A <a
				on:mouseover={() => prefetch('/writing/fluid-interfaces-using-css/')}
				href="/writing/fluid-interfaces-using-css/">fluid</a
			> experience across screen sizes, which you will only notice if you actively resize your screen.
		</li>
		<li>
			Modern <a
				on:mouseover={() => prefetch('/writing/css-layout-patterns/')}
				href="/writing/css-layout-patterns/">CSS patterns</a
			> to enhance the responsiveness of the website.
		</li>
	</ul>
	<p>
		The current version of this website is created using <a
			href="https://www.gatsbyjs.com"
			title="Website of Gatsby"
		>
			Gatsby
		</a>
		and my own
		<a href="https://github.com/kevtiq/css-framework" title="Github link for CSS framework">
			(S)CSS framework
		</a>, based on
		<a href="https://cube.fyi" title="Website for the CUBE CSS framework"> CUBE CSS</a>.
	</p>
</main>

<style>
	:root {
		--page-width: 68ch;
	}
</style>
