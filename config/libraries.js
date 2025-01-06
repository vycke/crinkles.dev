import anchor from "markdown-it-anchor";
import container from "markdown-it-container";

export function md(mdit) {
  mdit.use(container, "info").use(anchor, {
    permalink: anchor.permalink.ariaHidden({ symbol: "#" }),
  });
}
