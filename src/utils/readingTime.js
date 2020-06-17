export function formatReadingTime(words, wpm = 200) {
  return `${Math.ceil(words / wpm)} min read`;
}
