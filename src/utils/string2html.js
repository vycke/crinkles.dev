import domParser from 'html-dom-parser';
import React from 'react';
import { styleParser } from './styleParser';
import camelCase from './camelCase';

const tags = ['text', 'script', 'style', 'tag'];

function domToReact(nodes) {
  const result = [];

  nodes.forEach(({ type, data, attribs, name, children }, i) => {
    if (!tags.includes(type)) return;
    if (type === 'text') {
      result.push(data);
      return;
    }

    const props = {};
    props.key = i;
    let c = null;

    Object.entries(attribs).forEach(([key, value]) => {
      if (key === 'class') props.className = attribs[key];
      else if (key === 'srcset') props.srcSet = attribs[key];
      else if (key.slice(0, 4) === 'data' || key.slice(0, 4) === 'aria')
        props[key] = value;
      else if (key === 'style') props[key] = styleParser(attribs[key]);
      else props[camelCase(key)] = value;
    });

    if (children[0] && (type === 'script' || type === 'style'))
      props.dangerouslySetInnerHTML = {
        __html: children[0].data
      };

    if (type === 'tag' && children && children.length) c = domToReact(children);

    result.push(React.createElement(name, props, c));
  });

  return result.length === 1 ? result[0] : result;
}

export function string2html(html) {
  if (typeof html !== 'string') return;
  const nodes = domParser(html, {
    decodeEntities: true,
    lowerCaseAttributeNames: false
  });

  return domToReact(nodes);
}
