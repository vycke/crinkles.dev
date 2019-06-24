import parse from 'css/lib/parse';
import camelCase from './camelCase';

export function styleToObject(style, cb) {
  if (!style || typeof style !== 'string') return null;
  const output = {};
  const declarations = parse('p{' + style + '}').stylesheet.rules[0]
    .declarations;

  declarations.forEach(({ property, value }) => {
    if (cb) cb(property, value);
    else output[property] = value;
  });

  return output;
}

// Parse CSS to an JS object with camel-casing (required for JSX)
export function styleParser(style, type = 'react') {
  if (typeof style !== 'string') return;

  if (!type) return styleToObject(style);
  else if (type === 'react') {
    const result = {};
    styleToObject(style, (n, v) => {
      if (n && v) result[camelCase(n)] = v;
    });
    return result;
  }
}
