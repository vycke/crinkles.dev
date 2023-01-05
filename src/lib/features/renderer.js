import { marked } from 'marked';
import shiki from 'shiki';

// Hack to ensure images are not wrapped in a paragraph tag
marked.Renderer.prototype.paragraph = function (text) {
	if (text.startsWith('<img')) return text;
	return '<p>' + text + '</p>';
};

// lazy loading images
marked.Renderer.prototype.image = function (href, title, text) {
	return `<img src="${href}" loading=lazy alt="${text}">`;
};

// Hack to add autolink heading
marked.Renderer.prototype.heading = function (text, level, raw) {
	const id = raw.toLowerCase().replace(/[^\w]+/g, '-');
	return `<h${level} id=${id}><a href="#${id}" aria-label="${raw} permalink">${text}</a></h${level}>`;
};

const infoblock = {
	name: 'infoBlock',
	level: 'block',
	start(src) {
		return src.match(/^ {0,3}:{3,}\n/)?.index;
	}, // Hint to Marked.js to stop and check for a match
	tokenizer(src) {
		const rule = /^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?:\n+|$)|$)/; // Regex for the complete token
		const match = rule.exec(src);

		if (match) {
			return {
				type: 'infoBlock',
				raw: match[0],
				tokens: this.lexer.inlineTokens(
					match[0]
						.replace(/:{3,}\n/, '')
						.replace(/\n:{3,}/, '')
						.trim()
				)
			};
		}
	},
	renderer(token) {
		return `<aside>${this.parser.parseInline(token.tokens)}\n</aside>`;
	}
};

marked.use({ extensions: [infoblock] });

// The main rendering function
export async function renderer(md) {
	const highlighter = await shiki.getHighlighter({ theme: 'monokai' });
	marked.Renderer.prototype.code = function (code, lang) {
		return highlighter.codeToHtml(code, lang);
	};
	return marked.parse(md);
}
