module.exports = (collection) => {
  let tags = {};

  for (let item of collection) {
    (item.data.tags || []).forEach((tag) => {
      if (tags[tag]) tags[tag]++;
      else tags[tag] = 1;
    });
  }

  return Object.entries(tags)
    .filter((tag) => !["writing", "all"].includes(tag[0]))
    .sort((a, b) => (a[1] < b[1] ? 1 : -1))
    .map((tag) => tag[0]);
};
