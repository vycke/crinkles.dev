import { getArticles } from '$lib/features/process-files';

export async function get() {
	const articles = await getArticles();

	const groupedByYear = {};
	articles.forEach((a) => {
		const year = a.date.toISOString().slice(0, 4);
		if (groupedByYear[year]) groupedByYear[year].push(a);
		else groupedByYear[year] = [a];
	});

	return {
		body: { articles, groupedByYear: Object.entries(groupedByYear).sort((a, b) => b[0] - a[0]) }
	};
}
