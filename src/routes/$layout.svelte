<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../styles/index.scss';

	let title = 'Kevin Pennekamp';
	let url = 'https://crinkle.dev';
	let description =
		'Personal website of Kevin Pennekamp, a Dutch software engineer. I love CSS, front-end architecture, engineering and writing about it!';
	let twitter = '@kevtiq';
	let keywords = [
		'CSS',
		'front-end',
		'web development',
		'software development',
		'web design',
		'architecture',
		'consultant'
	].join(', ');
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0e141e" />
	<meta name="msapplication-TileColor" content="#0e141e" />
	<meta name="theme-color" content="#0e141e" />
	<meta name="twitter:creator" content={twitter} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="content" content={keywords} />
	<meta name="property" content={keywords} />
	<meta property="og:title" content={title} />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<!-- <meta property="og:image" content={seo.image} /> -->
	<!-- <meta property="og:type" content="article" /> -->
	<meta name="twitter:site" content={twitter} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<!-- <meta property="og:type" content="article" /> -->
	<!-- <meta name="twitter:card" content={meta.category ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:image" content={seo.image} /> -->
	<meta name="monetization" content="$ilp.uphold.com/dDdhAM4apdQJ" />
</svelte:head>

<Header />
<slot />
<Footer />
