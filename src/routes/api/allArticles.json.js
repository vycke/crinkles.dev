import { getArticles } from '$lib/process-files';

export async function get() {
	const articles = await getArticles();

	let grouped = {};
	articles.forEach((a) => {
		const year = a.date.toISOString().slice(0, 4);
		if (grouped[year]) grouped[year].push(a);
		else grouped[year] = [a];
	});

	return {
		body: articles
	};
}
