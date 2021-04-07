<script>
	import Footer from '$lib/components/Footer.svelte';

	import '../styles/index.scss';

	let twitter = '@kevtiq';
	let keywords = 'CSS, front-end, web design, consulting, architecture';
	let img = '/img/logo.png';
</script>

<svelte:head
	><meta name="keywords" content={keywords} />
	<meta name="content" content={keywords} />
	<meta name="property" content={keywords} />

	<meta name="twitter:creator" content={twitter} />
	<meta name="twitter:site" content={twitter} />

	<meta property="og:image" content={img} />
	<meta name="twitter:image" content={img} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<slot />
<Footer />
