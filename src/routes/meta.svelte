<script context="module">
	export const hydrate = false;
	import Header from '$lib/components/structure/Header.svelte';
	import Main from '$lib/components/structure/Main.svelte';
	import Page from '$lib/components/structure/Page.svelte';
	import { quote } from '$lib/constants';
</script>

<Page title="Meta | Crinkles">
	<Header class="center center-w-3 center-g-1"><h1 class="text-1 ml-1">About</h1></Header>
	<Main class="flex-grow stack stack-g-0 | mb-3 text-0">
		<blockquote class="text-1 bold">{quote}</blockquote>

		<p>
			Crinkles studio is a creative agency specialized in improving front-end developer experience
			through writing, mentoring and creating tools. It also acts as the digital portfolio and
			playground of its founder, Kevin Pennekamp. The creation of this website is currently build
			using:
		</p>
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
