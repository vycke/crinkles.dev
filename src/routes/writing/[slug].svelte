<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`/api/${page.params.slug}.json`);

		if (res.ok) {
			const { post, next, prev, headers } = await res.json();
			return { props: { post, next, prev } };
		}

		return {
			status: res.status,
			error: new Error(`Could not find article '${page.params.slug}'`)
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

	onMount(() => {
		const readyState = document.readyState;
		handler();
	});
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

<div class="panel-r panel-f-0 panel-w-3">
	<Page class="post | flow-y flow-g-2" title={post.title} description={post.description}>
		<span class="text-gray-300 uppercase monospace text-00">
			<time datetime={date}>{date}</time>
			{` • ${num}`}
		</span>
		<h1 class="flow-self-none">{post.title}</h1>

		{@html post.html}
	</Page>
	<nav class="sticky post-0 flow-y flow-g-000 px-1 pt-3 self-start">
		<span class="text-00 uppercase sans-serif text-primary-0">Table of contents</span>
		<ul role="list">
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
		color: var(--color-gray-300);
	}

	a:hover {
		color: var(--color-primary-0);
	}

	h1 {
		color: var(--color-primary-0);
	}

	:global(.post aside) {
		display: block;
		padding: var(--size-0) var(--size-2);
		background-color: var(--color-primary-0);
		color: var(--color-gray-500);
		border-radius: var(--size-000);
		border: 2px solid var(--color-gray-100);
		font-size: var(--size-00);
	}

	:global(.post aside::before) {
		content: 'Note';
		font-weight: bold;
		display: block;
	}

	:global(.post aside a) {
		text-decoration-color: var(--color-gray-600);
	}
	:global(.post aside a:hover) {
		color: var(--color-gray-400);
		text-decoration-color: var(--color-gray-400);
	}

	:global(.post h2) {
		margin-top: var(--size-3);
	}

	:global(.post h2 + p) {
		margin-top: var(--size-1);
	}

	:global(.post h2 a) {
		text-decoration-line: none;
		color: var(--color-gray-100);
	}

	:global(.post h2:hover a) {
		text-decoration-line: underline;
	}

	:global(.post h2:hover a::after) {
		content: ' #';
		color: var(--color-primary-0);
	}

	:global(.post img) {
		max-width: min(100%, var(--center-width));
		padding-left: 0;
		padding-right: 0;
	}

	li[data-active='true'] a {
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-decoration-color: var(--color-primary-0);
	}
</style>
