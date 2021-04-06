import {articles} from './_articles';

const render = (items) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
	<title>Crinkle.dev RSS Feed</title>
	${items.map(item => `
		<item>
			<title>${item.title}</title>
			<link>https://crinkle.dev/writing/${item.slug}</link>
			<description>${item.description}</description>
			<pubDate>${new Date(item.date).toUTCString()}</pubDate>
		</item>
	`).join('\n')}
</channel>
</rss>`;

export function get() {
  const feed = render(articles);
	return {
    body: feed,
    headers: {
      'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
      'Content-Type': 'application/rss+xml'
    }
  }; 
}