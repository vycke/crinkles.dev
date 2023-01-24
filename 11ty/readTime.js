module.exports = (str) => {
  return `${Math.ceil(str.split(" ").length / 200)} min read`;
};
