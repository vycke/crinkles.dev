<script context="module">
	export async function load({ params, fetch }) {
		const res = await fetch(`/api/${params.slug}.json`);

		if (res.ok) {
			const { post, next, prev } = await res.json();
			return { props: { post, next, prev } };
		}

		return {
			status: res.status,
			error: new Error(`Could not find article '${params.slug}'`)
		};
	}
</script>

<script>
	import Pagination from '$lib/components/navigation/Pagination.svelte';
	import Header from '$lib/components/structure/Header.svelte';
	import Main from '$lib/components/structure/Main.svelte';
	import Page from '$lib/components/structure/Page.svelte';
	import Wave from '$lib/components/utilities/Wave.svelte';
	import { onMount } from 'svelte';

	function handler() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const id = entry.target.getAttribute('id');
				const el = document.querySelector(`nav li a[href="#${id}"]`);
				if (!el) return;
				if (entry.intersectionRatio > 0) el.parentElement.dataset.active = true;
				else el.parentElement.dataset.active = false;
			});
		});

		// Track all sections that have an `id` applied
		document.querySelectorAll('h2[id]').forEach((header) => {
			observer.observe(header);
		});
	}

	onMount(handler);
	export let post;
	export let next;
	export let prev;

	$: pagePrevious = prev ? { url: `/writing/${prev.slug}`, subtitle: prev.title } : undefined;
	$: pageNext = next ? { url: `/writing/${next.slug}`, subtitle: next.title } : undefined;

	$: date = post.formattedDate;
	$: num = `${Math.ceil(post.html.split(' ').length / 200)} min read`;
</script>

<svelte:head>
	<meta property="og:type" content="article" />
</svelte:head>

<Page title={post.title} description={post.description}>
	<Main width={4}>
		<Header />
		<div class="bold uppercase text-00 mt-4">
			<time datetime={date}>{date}</time>
			{` • ${num}`}
		</div>
		<h1 class="stack-g-00">{post.title}</h1>
		<div class="relative sidebar-r sidebar-w-00 sidebar-c-70 gap-2 mt-2">
			<article class="post | text-0 stack stack-g-2">
				{@html post.html}
				<Wave height={30} class="mt-3" />
			</article>
			{#if post.headers.length > 0}
				<nav class="sticky stack stack-g-000 self-start minw-000">
					<span class="text-00 uppercase sans-serif text-primary">On this page</span>
					<ul class="content-table" role="list">
						{#each post.headers as header, i}
							<li class="pb-00 lh-0" data-active={i === 0}>
								<a href="#{header.id}" class="text-00 no-decoration sans-serif">{header.label}</a>
							</li>
						{/each}
					</ul>
				</nav>
			{/if}
		</div>
	</Main>

	<Pagination next={pageNext} previous={pagePrevious} />
</Page>

<style>
	a,
	a:visited {
		color: var(--color-fg-1);
	}

	a:hover {
		color: var(--color-primary);
	}

	:global(.post) {
		flex-grow: 5;
	}

	:global(.post aside) {
		display: block;
		padding: var(--size-0) var(--size-1);
		background-color: var(--color-bg-1);
		border: 3px solid var(--color-primary);
		border-radius: var(--size-00);
		font-size: var(--size-00);
		position: relative;
	}

	:global(.post aside::before) {
		content: 'Note 🧐';
		position: absolute;
		display: block;
		top: -18px;
		left: 20px;
		height: 32px;
		font-size: 16px;
		line-height: 32px;
		color: var(--color-bg-0);
		background-color: var(--color-primary);
		border-radius: var(--size-000);
		padding: 0 var(--size-000);
	}

	:global(.post aside a),
	:global(.post aside a:visited) {
		color: var(--color-fg-0);
		text-decoration-color: var(--color-fg-0);
	}

	:global(.post aside a:hover) {
		color: var(--color-primary);
		text-decoration-color: var(--color-primary);
	}

	:global(.post h2) {
		transition: all 0.25s;
		margin-top: var(--size-3);
	}

	:global(.post h2 + p) {
		margin-top: var(--size-1);
	}

	:global(.post h2 a) {
		text-decoration-line: none;
		color: var(--color-fg-0);
	}

	:global(.post h2:hover a) {
		text-decoration-line: underline;
	}

	:global(.post h2:hover a::after) {
		content: ' #';
		color: var(--color-primary);
	}

	:global(.post img),
	:global(.post aside),
	:global(.post pre) {
		--center-gutter: 0px;
		--center-width: calc(var(--bp-3) + 2 * var(--size-1));
	}

	.content-table {
		list-style: none;
		padding-left: 0;
	}

	nav {
		top: var(--size-2);
	}

	li[data-active='true'] a {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-decoration-color: var(--color-primary);
	}
</style>
