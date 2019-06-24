var hyphenRe = /-([a-z])/g;
var camelRe = /^--[a-zA-Z0-9-]+$|^[^-]+$/;

function camelCase(string) {
  if (typeof string !== 'string') return;
  if (camelRe.test(string)) return string.toLowerCase();
  return string.toLowerCase().replace(hyphenRe, (_, c) => c.toUpperCase());
}

export default camelCase;
