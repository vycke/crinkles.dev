<script context="module">
	export const hydrate = false;
	export async function load({ fetch }) {
		const res = await fetch('/api/projects.json');
		const { projects } = await res.json();
		return { props: { groupedProjects: Object.entries(projects) } };
	}
</script>

<script>
	import Header from '$lib/components/structure/Header.svelte';
	import ListGroup from '$lib/components/structure/ListGroup.svelte';
	import Main from '$lib/components/structure/Main.svelte';
	import Meta from '$lib/components/structure/Meta.svelte';
	import Page from '$lib/components/structure/Page.svelte';

	export let groupedProjects;
</script>

<Page title="My work">
	<Header class="center center-w-4 center-g-1">
		<h1>My work</h1>
	</Header>
	<Main class="flex-grow mt-1" width={4}>
		<ListGroup>
			{#each groupedProjects as [tech, projects], i}
				<div
					class="sidebar-l sidebar-w-000 sidebar-c-80 gap-0 mb-1"
					class:border-b-bg-1={i < groupedProjects.length - 1}
				>
					<span class="text-primary">{tech}</span>
					<ListGroup class="flex-col gap-2 mb-1">
						{#each projects as project}
							<div class="flex-col click-area" role="listitem">
								<Meta>{project.type}</Meta>
								<a href={project.href} class="bold no-decoration">{project.title}</a>
								<span class="text-fg-1">{project.description}</span>
							</div>
						{/each}
					</ListGroup>
				</div>
			{/each}
		</ListGroup>
	</Main>
</Page>
