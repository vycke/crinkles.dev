function groupBy(transformer) {
  return function (arr) {
    const grouped = {};
    arr.forEach((a) => {
      const _key = transformer(a);
      if (grouped[_key]) grouped[_key].push(a);
      else grouped[_key] = [a];
    });

    return Object.entries(grouped);
  };
}

module.exports = groupBy;
