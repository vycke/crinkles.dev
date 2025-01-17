// transforms a data string to a human readable format
export function readableDate(date) {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// head of the list
export function head(list, n) {
  return list.slice(0, n);
}

export function index(list, n = 1) {
  return list[n];
}

// Get all tags, optionally with counts
export function getAllTags(collection, count = false) {
  let tags = {};
  for (let item of collection) {
    (item.data.tags || []).forEach((tag) => {
      if (tag === "all") return;
      if (tags[tag]) tags[tag]++;
      else tags[tag] = 1;
    });
  }

  return Object.entries(tags)
    .sort((a, b) => (a[1] < b[1] ? 1 : -1))
    .map((tag) => (count ? tag : tag[0]));
}

export function objectify(str, key) {
  if (!str) return null;
  return { [key]: str };
}
