import fs from 'fs';
import fm from 'front-matter';
import marked from 'marked';
import prism from 'prismjs';

type Result = {
	html: string,
	[key: string]: unknown
}

// Hack to ensure images are not wrapped in a paragraph tag
marked.Renderer.prototype.paragraph = function (text) {
	if (text.startsWith('<img')) return text;
	 return  '<p>' + text + '</p>';
}

// lazy loading images
marked.Renderer.prototype.image = function (href, title, text) {
	return `<img src="${href}" loading=lazy alt="${text}">`;
}

// Hack to add autolink heading
marked.Renderer.prototype.heading = function (text, level, raw) {
	const id = raw.toLowerCase().replace(/[^\w]+/g, '-');
	return `<h${level} id=${id}><a href="#${id}" aria-label="${raw} permalink">${text}</a></h${level}>`;
}

export default function process(location: string): Result[] {
	const files = fs.readdirSync(location);

	// Use highlight.js as the highlighter for the marked library
	marked.setOptions({
		highlight: function (code, lang) {
			if (prism.languages[lang]) {
				return prism.highlight(code, prism.languages[lang], lang);
			} else {
				return code;
			}
		},
	});

	const articles: Result[] = [];

	for (let i = 0; i < files.length; i++) {
		const content = fs.readFileSync(`${location}/${files[i]}`, { encoding: 'utf-8' });
		// Use the front-matter library to separate the body from the front matter
		const { body, ...matter } = fm(content);
		// Use the marked library to turn markdown into html
		const html: string = marked(body);
		articles.push({ html, ...(matter.attributes as Record<string, unknown>) });
	}

	return articles;
}
