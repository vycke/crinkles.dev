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

<div class="sidebar-r sidebar-w-0 sidebar-c-70">
	<Page class="post | stack stack-g-2" title={post.title} description={post.description}>
		<span class="bold uppercase text-00">
			<time datetime={date}>{date}</time>
			{` • ${num}`}
		</span>
		<h1 class="stack-g-none">{post.title}</h1>

		{@html post.html}
	</Page>
	<nav class="sticky post-0 stack stack-g-000 px-1 pt-3 self-start">
		<span class="text-00 uppercase sans-serif text-primary">Table of contents</span>
		<ul class="content-table">
			{#each post.headers as header, i}
				<li class="pb-000" data-active={i === 0}>
					<a href="#{header.id}" class="text-00 no-decoration sans-serif">{header.label}</a>
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
		padding: var(--size-0) var(--size-1);
		background-color: var(--color-alt);
		font-size: var(--size-00);
		color: var(--color-grey-1);
	}

	:global(.post aside::before) {
		content: 'NOTE';
		font-weight: bold;
		color: var(--color-primary);
		display: block;
	}

	:global(.post aside a),
	:global(.post aside a:visited) {
		color: var(--color-grey-1);
		text-decoration-color: var(--color-grey-1);
	}

	:global(.post aside a:hover) {
		color: var(--color-alt);
		text-decoration-color: var(--color-alt);
	}

	:global(.post h2) {
		margin-top: var(--size-3);
	}

	:global(.post h2 + p) {
		margin-top: var(--size-1);
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

	li[data-active='true'] a {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-decoration-color: var(--color-primary);
	}
</style>
