import { promises as fs } from 'fs';
import fm from 'front-matter';
import { resolve } from 'path';
import { renderer } from './renderer';

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

function format(iso) {
	const date = new Date(iso);

	return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function getHeaders(html) {
	const headers = [];
	const elements = html.match(new RegExp('<h2(.*?)</h2>', 'g')) || [];

	elements.forEach((e) => {
		const tokens = e
			.replace('</h2>', '')
			.replace('<h2', '')
			.replace('id="', '')
			.replace('</a>', '')
			.split('">');

		const id = tokens[0].split('>')[0].replace('id=', '').trim();
		const label = tokens[1].replace('<code>', '').replace('</code>', '').trim();

		headers.push({ id, label });
	});

	return headers;
}

export async function getArticle(slug, html = true) {
	const _path = resolve('content', slug + '.md');
	const src = await fs.readFile(_path, 'utf8');
	const { body, ...matter } = fm(src);

	const formattedDate = format(matter.attributes.date);

	if (!html) return { slug, formattedDate, ...matter.attributes };
	const _html = await renderer(body);
	const headers = getHeaders(_html);
	return { slug, html: _html, headers, formattedDate, ...matter.attributes };
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
