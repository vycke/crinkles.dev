import articles from './_articles';

export function get() {
  return {
    body: articles
  };
}