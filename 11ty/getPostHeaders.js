function strip(text, start, end) {
  return text.split(start)[1].split(end)[0].trim();
}

module.exports = (str) => {
  const headers = [];
  (str.match(new RegExp("<h2(.*?)</h2>", "g")) || []).forEach((e) => {
    const id = strip(e, 'id="', '"');
    const title = strip(e, ">", "<a")
      .replace("<code>", "")
      .replace("</code>", "");

    headers.push({ id, title });
  });
  return headers;
};
