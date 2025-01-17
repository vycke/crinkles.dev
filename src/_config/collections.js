import { POSTS_PATH } from "./constants.js";

// collection for all posts, incl. drafts option
export function posts(collection) {
  return collection
    .getFilteredByGlob(POSTS_PATH)
    .filter((post) => !post.data.archived)
    .sort((a, b) => {
      const Adate = a.data.update > a.data.date ? a.data.update : a.data.date;
      const Bdate = b.data.update > b.data.date ? b.data.update : b.data.date;

      return Adate < Bdate ? 1 : -1;
    });
}
