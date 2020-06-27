---
templateKey: blog-post
title: CSS layout patterns
draft: true
date: 2020-06-01T00:00:00.000Z
description: >-
  Keeping our applications healthy and reliable is complex, and difficult to achieve
category: css
---

Layout and composition is one of the most challenging topics within CSS. Especially when you have to take responsiveness into account. Adding multiple media-queries for various breakpoints makes your CSS quickly unmaintainable. With the addition of flex boxes, grids and variables, CSS improved greatly. They not only make it possible to write better maintainable CSS, they also allow us to improve the user experience. No longer do we need hard breakpoints that change our layout on a single pixel, but we can allow our layout to be fluid and flow based on the available space.

Unfortunately, these concepts are greatly underutilized and people often do not acknowledge their power. When updating [vycke.dev](https://vycke.dev), I used three techniques to remove all media-queries, but still have a responsive website that exceeded the responsiveness of the old version. Check it out!

## Stack layout

## Dynamic article layout

- link to owl selector
- Reference to `margin: 0 auto`.
- Explain how this helps

```css
:root {
  --spacing: calc(1rem + 1rem * var(--ratio));
  --width: 65ch;
}

.article {
  display: grid;
  grid-template-columns:
    minmax(var(--spacing), 1fr)
    minmax(auto, var(--width)
    minmax(var(--spacing), 1fr);
}
```

> VISUALIZATION

```css
:root {
  --spacing: calc(3rem + 2rem * var(--ratio));
  --width: 65ch;
}

.article > p {
  grid-column: 2;
}

.article > img {
  grid-column: 1 / 4;
  justify-self: center;
  width: 100%;
  max-width: calc(var(--width) + 2 * var(--spacing));
}
```

## Auto-scaling grid-layout

> VISUALIZATION

```css
:root {
  --width: 20rem;
}

.grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(var(--width), 1fr));
}
```

## Conclusion

- Discuss how to combine (e.g. use the fluid spacing as input in the vertical rhythm for the owl selector, or in overflow of the image)
