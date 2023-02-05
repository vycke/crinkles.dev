function getTags(collections) {
  let tags = {};
  for (let item of collections) {
    (item.data.tags || []).forEach((tag) => {
      if (["writing", "all"].includes(tag)) return;
      if (tags[tag]) tags[tag]++;
      else tags[tag] = 1;
    });
  }
  return tags;
}

function getAllTagsWithCount(collections) {
  const tags = getTags(collections);
  return Object.entries(tags).sort((a, b) => (a[1] < b[1] ? 1 : -1));
}

function getAllTags(collections) {
  const tags = getTags(collections);
  return Object.entries(tags)
    .sort((a, b) => (a[1] < b[1] ? 1 : -1))
    .map((tag) => tag[0]);
}

function filterTags(tags) {
  return tags.filter((tag) => !["writing", "all"].includes(tag));
}

module.exports = { getAllTags, getAllTagsWithCount, filterTags };
