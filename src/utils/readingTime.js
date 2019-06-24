export function formatReadingTime(words, wpm = 175) {
  const min = Math.ceil(words / wpm);
  let cups = Math.ceil(min / 4);
  if (cups > 6) cups = 6;
  return `${new Array(cups || 1).fill('☕️').join('')} ${min} min read`;
}
