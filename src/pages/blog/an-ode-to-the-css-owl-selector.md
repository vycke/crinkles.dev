---
templateKey: blog-post
title: An ode to the lobotomized CSS owl selector
date: 2019-07-26T00:00:00.000Z
description: >-
  ...
tags:
  - CSS
  - UI
---

http://www.heydonworks.com
https://twitter.com/heydonworks
Some introduction towards Heydon and the CSS dayas
Mention not going into debat if CSS is a programming language.

## The CSS selector

```css
* + * {
  margin-top: 1rem;
}
```

https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/

So far, we’ve not named a single element. We’ve simply written a rule. Now we can take advantage of the owl selector’s low specificity and start judiciously building in exceptions, taking advantage of the cascade rather than condemning it as other methods do.
https://css-tricks.com/specifics-on-css-specificity/

## Algoritmic UI

```js
function owl(list, cb) {
  for (i = 1; i < list.length; i++) {
    cb(list[i]);
  }
}
```

```js
function isArray(list) { ... }

function owl(list, cb) {
  for (i = 1; i < list.length; i++) {
    if (isArray(list[i])) {
      owl(list[i], cb);
    } else {
      cb(list[i]);
    }
  }
}
```

https://en.wikipedia.org/wiki/Recursion_(computer_science)

## CSS is a programming language

I Lied, still going in debat

http://www.heydonworks.com/article/the-flexbox-holy-albatross
https://twitter.com/laras126
