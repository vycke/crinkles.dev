export function formatReadingTime(words, wpm = 200) {
  const min = Math.ceil(words / wpm);
  let cups = Math.ceil(min / 3.5);
  if (cups > 6) cups = 6;
  return `${new Array(cups || 1).fill('☕️').join('')} ${min} min read`;
}
