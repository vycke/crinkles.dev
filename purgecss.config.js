// purgecss.config.js

module.exports = {
  // Content files referencing CSS classes
  content: ["./_site/**/*.html"],

  // CSS files to be purged in-place
  css: ["./_site/**/*.css"],
};
