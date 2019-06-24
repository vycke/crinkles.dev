function uniq(array) {
  if (!Array.isArray(array)) return;
  return Array.from(new Set(array));
}

export default uniq;
