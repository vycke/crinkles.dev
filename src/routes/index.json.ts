import articles from './writing/_articles';

export function get() {
  return {
    body: articles.slice(0, 5)
  };
}