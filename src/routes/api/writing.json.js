import { getArticles } from '$lib/process-files';
import groupByYear from '$lib/utils/groupByYear';

export async function get() {
	const articles = await getArticles();
	return {
		body: groupByYear(articles)
	};
}
