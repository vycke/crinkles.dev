import { getArticles } from '$lib/features/process-files';

export async function get() {
	const articles = await getArticles(4);
	return {
		body: articles
	};
}
