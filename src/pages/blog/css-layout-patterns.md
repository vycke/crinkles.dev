---
templateKey: blog-post
title: Create a fluid interface with CSS
draft: true
date: 2020-06-01T00:00:00.000Z
description: >-
  Keeping our applications healthy and reliable is complex, and difficult to achieve
category: css
---

- Goal is to minimize the dependency on media-queries. Why? Because maintenance in larger CSS systems becomes harder (duplicate classes, especially with multiple breakpoints). And fluid interfaces are easer around the breakpoints and their behavior is default.

## Article layout

- link to owl selector
- Reference to `margin: 0 auto`.
- Explain how this helps

```css
.article {
  display: grid;
  grid-template-columns:
    minmax(2rem, 1fr)
    minmax(auto, 65ch)
    minmax(2rem, 1fr);
}
```

> VISUALIZATION

```css
.article > p {
  grid-column: 2;
}

.article > img {
  grid-column: 1 / 4;
  width: 100%;
  max-width: calc(65ch + 10rem);
  justify-self: center;
}
```

## Some fancy title for auto fitting cards

> VISUALIZATION

```css
.tiles {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}
```

## Scaling based on view-width

Intro in what to achieve and what to use it for

Discuss why screen (for when you have a max-width set on your site, and you don't want the fluid UI break it when exceeding this max-width).

```
screen = min(window, max-width)
```

Ratio is a value between 0 and 1 that can be used to linear scale values between a min and max, depending on where the actual screen-size is between the set min and max.

```
          screen - min-width
ratio = -----------------------
         max-width - min-width
```

Now we can scale values, like font-size between a min and max.

```
size = min-size + (max-size - min-size) × ratio
```

And this is how it looks in CSS, using CSS variables and `calc`.

- times expects one unitless value and one value with a unit
- divide expects the second value to be unitless
- When taking an upper limit for the screen size, you have to compare values with units
- min requires values with units or all unitless values
- `--size` is a value with a unit, that can be used for anything.
- Different variations for size (e.g. headers, default font-size, spacing) by adjusting the min- and max-values.

```css
:root {
  /* base values */
  --unit: 1px;
  --min-width: 320;
  --max-width: 1200;

  /* ratio calculation */
  --screen: calc(min(100vw, var(--max-width) * var(--unit));
  --area: calc(var(--screen) - var(--min-width) * var(--unit));
  --ratio: calc(var(--area) / var(--max-width) - var(--min-width));

  /* example on how to calculate a fluid font-size */
  --min-size: calc(18 * var(--unit));
  --scale: 4; /* scale between 18 and 22 */
  --size: calc(var(--min-size) + var(--scale) * var(--ratio));
}
```

## Conclusion

- Discuss how to combine (e.g. use the fluid spacing as input in the vertical rhythm for the owl selector, or in overflow of the image)
