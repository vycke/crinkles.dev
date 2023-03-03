// transforms a data string to a human readable format
function readableDate(date) {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// head of the list
function head(list, n) {
  return list.slice(0, n);
}

// Regex like function to get all H2 headers in posts
function getPostHeaders(str) {
  const headers = [];

  function strip(text, start, end) {
    return text.split(start)[1].split(end)[0].trim();
  }

  (str.match(new RegExp("<h2(.*?)</h2>", "g")) || []).forEach((e) => {
    const id = strip(e, 'id="', '"');
    const title = strip(e, ">", "<a")
      .replace("<code>", "")
      .replace("</code>", "");

    headers.push({ id, title });
  });
  return headers;
}

// Get all tags, optionally with counts
function getAllTags(collection, count = false) {
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

// get the tags
function getTagIndex(collection, tag) {
  const tags = getAllTags(collection);
  return tags.indexOf(tag);
}

// Group by year as the njk groupby is insufficient
function groupByYear(collection) {
  const grouped = {};
  collection.forEach((item) => {
    const _key = item.data.date.getFullYear();
    if (grouped[_key]) grouped[_key].push(item);
    else grouped[_key] = [item];
  });

  return Object.entries(grouped);
}

module.exports = {
  readableDate,
  head,
  getPostHeaders,
  getAllTags,
  getTagIndex,
  groupByYear,
};
