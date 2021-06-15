<script context="module">
	export async function load({ page, fetch }) {
		const res = await fetch(`/writing/${page.params.slug}.json`);
		if (res.ok) {
			const { post, next, prev } = await res.json();
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
	import formatDate from '$lib/utils/date';
	import length from '$lib/utils/length';
	import Page from '$lib/components/Page.svelte';
	import Header from '$lib/components/Header.svelte';

	export let post;
	export let next;
	export let prev;

	$: pagePrevious = prev ? { url: `/writing/${prev.slug}`, subtitle: prev.title } : undefined;
	$: pageNext = next ? { url: `/writing/${next.slug}`, subtitle: next.title } : undefined;

	$: date = formatDate(post.date);
	$: num = length(post.html);
</script>

<svelte:head>
	<meta property="og:type" content="article" />
</svelte:head>

<Page class="post | flow-y flow-g-2" title={post.title} description={post.description}>
	<aside class="flow-y flow-g-none | flow-next-0" role="contentinfo">
		<div class="text-gray-300 uppercase">
			<time datetime={date}>{date}</time>
			{` • ${num}`}
		</div>
		<h1>{post.title}</h1>
	</aside>

	{@html post.html}
</Page>
<Pagination next={pageNext} previous={pagePrevious} slot="pagination" />

<style lang="scss">
	h1 {
		background: var(--gradient);
		background-clip: text;
		color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	h1::selection {
		color: var(--color-gray-500);
		background: none;
		background-clip: none;
		-webkit-background-clip: none;
		-webkit-text-fill-color: var(--color-gray-500);
	}

	:global(.post h2 + p) {
		margin-top: var(--spacing-00);
	}

	:global(.post h2 a) {
		text-decoration-line: none;
		color: var(--color-gray-100);
	}

	:global(.post h2:hover a) {
		text-decoration-line: underline;
		&::after {
			content: ' #';
			color: var(--color-gold);
		}
	}

	:global(.post img) {
		max-width: min(100%, var(--center-width));
		padding-left: 0;
		padding-right: 0;
	}
</style>
