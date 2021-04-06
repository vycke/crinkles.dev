import fs from 'fs';
import fm from 'front-matter';
import marked from '$lib/utils/marked';

export default function processFiles(location) {
	const files = fs.readdirSync(location);

	let articles = [];
	
	for (let i = 0; i < files.length; i++) {
		const content = fs.readFileSync(`${location}/${files[i]}`, { encoding: 'utf-8' });
		// Use the front-matter library to separate the body from the front matter
		const { body, ...matter } = fm(content);
		// Use the marked library to turn markdown into html
		const html: string = marked(body);
		articles.push({ html, ...(matter.attributes as Record<string, unknown>) });
	}
	
	// Sort articles based on date front-matter attribute
	articles = articles.sort((a, b) => {
		if (a.date < b.date) return -1;
		return 1;
	})

	return articles;
}
