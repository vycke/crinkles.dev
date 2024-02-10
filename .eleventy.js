const pluginRss = require("@11ty/eleventy-plugin-rss");
// Own configuration
const { TEMPLATE_ENGINE } = require("./config/constants.js");
const filters = require("./config/filters.js");
const collections = require("./config/collections.js");
const libraries = require("./config/libraries");
const shortcodes = require("./config/shortcodes");

module.exports = (config) => {
  // Handling assets (images, fonts, etc.)
  config.addPassthroughCopy({ "./public/": "/" });
  config.addPlugin(pluginRss);
  // filters
  Object.keys(filters).forEach((name) => {
    config.addFilter(name, filters[name]);
  });

  // collections
  Object.keys(collections).forEach((name) => {
    config.addCollection(name, collections[name]);
  });

  // amending libraries
  Object.keys(libraries).forEach((name) => {
    config.amendLibrary(name, libraries[name]);
  });

  // shortcodes
  Object.keys(shortcodes).forEach((name) => {
    config.addShortcode(name, shortcodes[name]);
  });

  return {
    markdownTemplateEngine: TEMPLATE_ENGINE,
    dataTemplateEngine: TEMPLATE_ENGINE,
    htmlTemplateEngine: TEMPLATE_ENGINE,
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
