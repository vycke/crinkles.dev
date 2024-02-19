const anchor = require("markdown-it-anchor");
const container = require("markdown-it-container");

function md(mdit) {
  mdit.use(container, "info").use(anchor, {
    permalink: anchor.permalink.ariaHidden({ symbol: "#" }),
  });
}

module.exports = { md };
