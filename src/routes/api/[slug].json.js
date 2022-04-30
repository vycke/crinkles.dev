import { getArticle, getSiblingArticles } from '$lib/features/process-files';

export async function get({ params }) {
	const post = await getArticle(params.slug);
	const { prev, next } = await getSiblingArticles(params.slug);
	return { body: JSON.stringify({ prev, next, post }) };
}
