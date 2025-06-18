---
title: "Self-modifying variables: the inherit() workaround"
date: 2024-05-08
tags:
  - css
layout: external
link: https://kizu.dev/self-modifying-variables/
alt: The to original article on kizu.dev
description: >-
  How style queries can be used to calculate the depth of CSS elements, once released to the public
---

In a [previous article](/writing/using-recursive-css-to-change-styles-based-on-depth) I wrote about a method to get a `--depth` value based on alternating classes. But [Roman Komarov](https://front-end.social/@kizu) found a better method to achieve a similar effect. I'll give a small spoiler about the method, but for the full break-down, you have to read the article.

```css
* {
  @container not style(--is-alternate: ) {
    --is-alternate: ;
  }
  @container style(--is-alternate: ) {
    --is-alternate: initial;
  }
}
```

One caveat, it requires style queries to be support by your browser. We are not there yet, but it will come in the future.
