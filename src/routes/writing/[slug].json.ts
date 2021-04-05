import articles from './_articles';

type Input = { params: Record<string, unknown> }
type Output = void | Record<string, unknown>

const lookup = new Map();
articles.forEach((post) => {
	lookup.set(post.slug, JSON.stringify(post));
});

export function get(req: Input): Output {
	if (lookup.has(req.params.slug)) return { body: lookup.get(req.params.slug) };
}
