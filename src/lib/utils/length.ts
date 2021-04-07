export default function length(str: string, wpm = 200): string {
  return `${Math.ceil(str.split(' ').length / wpm)} min read`;
}