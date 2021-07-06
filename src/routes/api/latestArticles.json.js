import { getArticles } from '$lib/process-files';

export async function get() {
	const articles = await getArticles(3);
	return {
		body: articles
	};
}
