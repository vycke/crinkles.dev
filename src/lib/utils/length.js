export default function length(str, wpm = 200) {
	return `${Math.ceil(str.split(' ').length / wpm)} min read`;
}
