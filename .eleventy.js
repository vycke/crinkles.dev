const pluginRss = require("@11ty/eleventy-plugin-rss");
// Own helpers
const readableDate = require("./11ty/readableDate");
const readTime = require("./11ty/readTime");
const getPostHeaders = require("./11ty/getPostHeaders");
const markdownRenderer = require("./11ty/markdownRenderer");
const groupBy = require("./11ty/groupBy");
const { head } = require("./11ty/lists");
const { getAllTags, getAllTagsWithCount } = require("./11ty/tags");

const IS_PRODUCTION = process.env.ELEVENTY_ENV === "production";
const TEMPLATE_ENGINE = "njk";
const POSTS_PATH = "src/writing/**/*.md";

module.exports = (config) => {
  // Handling assets (images, fonts, etc.)
  config.addPassthroughCopy({ "./public/": "/" });
  // *SS
  config.addPlugin(pluginRss);
  // Custom filters
  config.addFilter("readableDate", readableDate);
  config.addFilter("readtime", readTime);
  config.addFilter("head", head);
  config.addFilter("headers", getPostHeaders);
  config.addFilter("getAllTags", getAllTags);
  config.addFilter("getAllTagsWithCount", getAllTagsWithCount);
  config.addFilter(
    "groupByYear",
    groupBy((post) => post.data.date.getFullYear())
  );
  // Amend markdown renderer
  config.amendLibrary("md", markdownRenderer);

  // Add new collection
  config.addCollection("posts", function (collection) {
    return collection
      .getFilteredByGlob(POSTS_PATH)
      .filter((post) => !(post.data.draft && IS_PRODUCTION));
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
