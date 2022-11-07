<script context="module">
	export const hydrate = false;
	import Header from '$lib/components/structure/Header.svelte';
	import Main from '$lib/components/structure/Main.svelte';
	import Page from '$lib/components/structure/Page.svelte';
	import { quote } from '$lib/constants';
</script>

<Page title="Meta | Crinkles">
	<Header class="center center-w-3 center-g-1" />
	<Main class="flex-grow stack stack-g-0 | my-3 text-0">
		<h1>Meta</h1>
		<p>The creation of this website is currently build using:</p>
		<ul>
			<li>
				Crinkles studio's own
				<a href="https://feo.crinkles.io" title="Link to documentation website of Feo CSS">
					(S)CSS framework called Feo CSS
				</a>.
			</li>
			<li>
				Statically build using <a href="https://kit.svelte.dev" title="Website of SvelteKit">
					SvelteKit
				</a>.
			</li>
			<li>
				Hosted on <a href="https://netlify.com" title="Website of netlify"> Netlify </a>.
			</li>
		</ul>
	</Main>
</Page>
