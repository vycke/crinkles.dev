import { groupBy } from '$lib/features/groupby';
import { getArticles } from '$lib/features/process-files';

export async function get() {
	const articles = await getArticles();
	const groupedByYear = groupBy(articles, 'date', (d) => d.toISOString().slice(0, 4));

	return {
		body: { articles, groupedByYear: Object.entries(groupedByYear).sort((a, b) => b[0] - a[0]) }
	};
}
