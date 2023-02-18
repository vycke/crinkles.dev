const IS_PRODUCTION = process.env.ELEVENTY_RUN_MODE === "build";
const TEMPLATE_ENGINE = "njk";
const POSTS_PATH = "src/writing/**/*.md";

module.exports = { IS_PRODUCTION, TEMPLATE_ENGINE, POSTS_PATH };
