const specialChars = [',', '.', ':', ';'];

export default function excerpt(str, maxLen = 250, separator = ' ') {
  if (str.length <= maxLen) return str;
  let result = str.substr(0, str.lastIndexOf(separator, maxLen));

  if (specialChars.includes(result.substr(-1))) result = result.slice(0, -1);
  return result + '...';
}
