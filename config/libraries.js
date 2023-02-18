const anchor = require("markdown-it-anchor");
const shiki = require("markdown-it-shiki").default;
const container = require("markdown-it-container");

// Use shiki as the highlighter and aadd anchor tags
function md(mdit) {
  mdit
    .use(container, "info")
    .use(anchor, {
      permalink: anchor.permalink.ariaHidden({ symbol: "#" }),
    })
    .use(shiki, { theme: "dracula" });
}

module.exports = { md };
