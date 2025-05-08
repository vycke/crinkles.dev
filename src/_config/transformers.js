import prettier from "prettier";

export function prettify(content) {
  if ((this.page.outputPath || "").endsWith(".html")) {
    let prettified = prettier.format(content, {
      bracketSameLine: true,
      printWidth: 512,
      parser: "html",
      tabWidth: 2,
    });
    return prettified;
  }

  // If not an HTML output, return content as-is
  return content;
}
