const { POSTS_PATH, IS_PRODUCTION } = require("./constants");

// collection for all posts, incl. drafts option
function posts(collection) {
  return collection
    .getFilteredByGlob(POSTS_PATH)
    .filter((post) => !post.data.archived)
    .filter((post) => !(post.data.draft && IS_PRODUCTION));
}

// collection for all posts, incl. drafts option
function archived(collection) {
  return collection
    .getFilteredByGlob(POSTS_PATH)
    .filter((post) => post.data.archived);
}


module.exports = { posts, archived };
