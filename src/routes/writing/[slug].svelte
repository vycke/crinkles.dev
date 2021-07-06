<script context="module">
	export const prerender = true;
	export async function load({ page, fetch }) {
		const res = await fetch(`/api/${page.params.slug}.json`);
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
	import Page from '$lib/components/Page.svelte';

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

<Page class="post | flow-y flow-g-2" title={post.title} description={post.description}>
	<span class="text-gray-200 uppercase flow-next-none monospace text-00">
		<time datetime={date}>{date}</time>
		{` • ${num}`}
	</span>
	<h1>{post.title}</h1>

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
		color: var(--color-gray-400);
		background: none;
		background-clip: none;
		-webkit-background-clip: none;
		-webkit-text-fill-color: var(--color-gray-400);
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
			color: var(--color-green);
		}
	}

	:global(.post img) {
		max-width: min(100%, var(--center-width));
		padding-left: 0;
		padding-right: 0;
	}
</style>
