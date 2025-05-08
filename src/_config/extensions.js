import browserslist from "browserslist";
import { bundleAsync, browserslistToTargets } from "lightningcss";

const targets = browserslistToTargets(browserslist("> 0.25% and not dead"));

export function css(config) {
  config.addTemplateFormats("css");
  config.addExtension("css", {
    outputFileExtension: "css",
    compile: async (_, inputPath) => {
      if (inputPath !== "./src/styles/index.css") return;

      return async () => {
        let { code } = await bundleAsync({
          filename: inputPath,
          minify: true,
          nesting: true,
          targets,
        });
        return code;
      };
    },
  });
}
