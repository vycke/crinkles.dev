const anchor = require("markdown-it-anchor");
const shiki = require("markdown-it-shiki").default;
const container = require("markdown-it-container");

module.exports = (md) =>
  md
    .use(container, "info")
    .use(anchor, {
      permalink: anchor.permalink.ariaHidden({ symbol: "#" }),
    })
    .use(shiki, { theme: "poimandres" });
