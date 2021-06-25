/* eslint-disable @typescript-eslint/ban-types */
import { promises as fs } from 'fs';
import fm from 'front-matter';
import { resolve } from 'path';
import renderer from '$lib/marked';

export async function getArticle(slug, html = true) {
	const _path = resolve('content', slug + '.md');
	const src = await fs.readFile(_path, 'utf8');
	const { body, ...matter } = fm(src);

	if (!html) return { slug, ...matter.attributes };
	return { slug, html: renderer(body), ...matter.attributes };
}

export async function getArticles(length) {
	const _path = resolve('content');
	const files = await fs.readdir(_path);

	let articles = [];

	for (let i = 0; i < files.length; i++) {
		articles.push(await getArticle(files[i].split('.md')[0], false));
	}

	articles = articles.sort((a, b) => (a.date < b.date ? 1 : -1));

	if (!length) return articles;
	return articles.slice(0, length);
}

export async function getSiblingArticles(slug) {
	const articles = await getArticles();
	const index = articles.findIndex((a) => a.slug === slug);

	let prev, next;
	if (index - 1 >= 0) next = articles[index - 1];
	if (index + 1 <= articles.length - 1) prev = articles[index + 1];

	return { prev, next };
}
