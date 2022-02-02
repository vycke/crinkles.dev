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
	import Pagination from '$lib/components/Pagination.svelte';
	import Page from '$lib/components/Page.svelte';
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

<div class="sidebar-r sidebar-w-3">
	<Page class="post | stack stack-g-5" title={post.title} description={post.description}>
		<span class="text-grey-2 uppercase text-2">
			<time datetime={date}>{date}</time>
			{` • ${num}`}
		</span>
		<h1 class="stack-g-0">{post.title}</h1>

		{@html post.html}
	</Page>
	<nav class="sticky post-0 stack stack-g-1 px-4 pt-6 self-start">
		<span class="text-2 uppercase sans-serif text-primary">Table of contents</span>
		<ul role="list">
			{#each post.headers as header, i}
				<li class="pb-1" data-active={i === 0}>
					<a href="#{header.id}" class="text-2 no-decoration sans-serif">{header.label}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<Pagination next={pageNext} previous={pagePrevious} />

<style>
	a,
	a:visited {
		color: var(--color-grey-2);
	}

	a:hover {
		color: var(--color-primary);
	}

	:global(.post aside) {
		display: block;
		padding: var(--size-3) var(--size-5);
		background-color: var(--color-grey-5);
		border-radius: var(--size-3);
		border-left: 5px solid var(--color-primary);
		border-right: 5px solid var(--color-primary);
		font-size: var(--size-2);
	}

	:global(.post aside::before) {
		content: 'Note';
		font-weight: bold;
		display: block;
	}

	:global(.post aside a),
	:global(.post aside a:visited) {
		color: var(--color-grey-5);
		text-decoration-color: var(--color-grey-5);
	}

	:global(.post aside a:hover) {
		color: var(--color-grey-3);
		text-decoration-color: var(--color-grey-3);
	}

	:global(.post h2) {
		margin-top: var(--size-6);
	}

	:global(.post h2 + p) {
		margin-top: var(--size-4);
	}

	:global(.post h2 a) {
		text-decoration-line: none;
		color: var(--color-grey-0);
	}

	:global(.post h2:hover a) {
		text-decoration-line: underline;
	}

	:global(.post h2:hover a::after) {
		content: ' #';
		color: var(--color-primary);
	}

	:global(.post img) {
		max-width: min(100%, var(--center-width));
		padding-left: 0;
		padding-right: 0;
	}

	li[data-active='true'] a {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-decoration-color: var(--color-primary);
	}
</style>
