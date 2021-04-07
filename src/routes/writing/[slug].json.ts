import {articles} from './_articles';

type Input = { params: Record<string, unknown> }
type Output = void | Record<string, unknown>



const lookup = new Map();
articles.forEach((post) => {
	lookup.set(post.slug, JSON.stringify(post));
});

function getSummary(index) {
	if (index >= 0 && index <= articles.length - 1) {
		const { title, slug } = articles[index];
		return { title, slug }
	}

	return;
}

export function get(req: Input): Output {
	const index = articles.findIndex(a => a.slug === req.params.slug);

	if (index < 0) return;

	const post = articles[index];
	const prev = getSummary(index + 1);
	const next = getSummary(index - 1)
	
	return { body: JSON.stringify({ prev, next, post })}
}
