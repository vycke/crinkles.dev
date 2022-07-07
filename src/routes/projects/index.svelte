<script>
	import Header from '$lib/components/structure/Header.svelte';
	import ListGroup from '$lib/components/structure/ListGroup.svelte';
	import Main from '$lib/components/structure/Main.svelte';
	import Page from '$lib/components/structure/Page.svelte';
	import Dotted from '$lib/components/utilities/Dotted.svelte';
	import { projects } from '$lib/constants';
</script>

<Page title="Articles">
	<Header class="center center-w-3 center-g-1 mb-3">
		<h1 class="text-1 ml-1 serif italic">Projects</h1>
	</Header>
	<Main>
		<ListGroup class="flex-col gap-2 | mb-3">
			{#each projects as project}
				<div class="flex-col click-area transition-300">
					<div class="flex-row items-center">
						<a href={project.href} class="bold no-decoration">{project.title}</a>
						<Dotted class="flex-grow" />
						<span class="text-fg-1">{project.type}</span>
					</div>
					<span class="text-fg-1">{project.description}</span>
				</div>
			{/each}
		</ListGroup>
	</Main>
</Page>
