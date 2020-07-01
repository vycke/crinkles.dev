---
templateKey: blog-post
title: Responsive layout patterns using CSS grids
draft: false
date: 2020-06-29T00:00:00.000Z
description: >-
  Keeping our applications healthy and reliable is complex, and difficult to achieve
category: css
---

Layout and composition is one of the most challenging topics within CSS. Especially when you have to take responsiveness into account. We often fall back no media-queries. But adding multiple media-queries for various breakpoints can make your CSS quickly unmaintainable. But with the addition of grids we can over come media-query fatigue. Not only make they our CSS more maintainable, they improve the user experience as well. We can now let CSS handle the available space automatically. In this article I will describe three layout implementations that can improve your (personal) website.

## Dynamic centered layout

We all know `margin: 0 auto` to center a layout. Ideal for article pages, right? But what if you want elements like images exceed the maximum width of the article? We can achieve this by working with negative margins. But this only works on big screens. On small screens, negative margins can easily break your website. Especially when you apply smaller side padding on mobile compared to tablets. So, we have to add multiple media-queries to ensure this effect works as intended, on all screen sizes. But now we have our cool effect as visualized below.

![Visualisation of a dynamic centered layout](/img/css-grid-article.png)

What happens when you want to change these ultra-wide elements? You have to go over several media-queries to determine if your change is applied correctly on various screens. What if we could eliminate the media-queries, and still achieve this effect? Recently I came across [this post from Dave Geddes](https://mastery.games/post/article-grid-layout/). It shows us how we can achieve this effect using CSS Grids. You basically create a grid of three columns. The center column is the actual content area, while the two outer columns act as padding, but also create the effect of `margin: 0 auto`.

```css
article {
  display: grid;
  grid-template-columns:
    minmax(2rem, 1fr)
    minmax(auto, 65ch)
    minmax(2rem, 1fr);
}

/* sets all children in the middle of the screen */
article > * {
  grid-column: 2;
}

/* overrides the above for images to be wider, but centered */
article > img {
  grid-column: 1 / 4;
  justify-self: center;
  width: 100%;
  max-width: 100ch;
}
```

Personally I do think that the paddings on the side should differ on various screen sizes. On smaller screens you want to limit the wasted space, while on bigger screens more padding can improve the visual quality. But with the above solution we you still need media-queries to use different side padding. You could mitigate this by adding [fluidity](https://vycke.dev/blog/fluid-interfaces-using-css/) to your website. We can replace the `2rem` with something like `calc(1rem + 1 * var(--ratio))`. By doing so, the side padding changes automatically when the screen size changes, without media-queries. Now we really have a dynamic layout for our articles that is easy to use and maintainable.

## Auto-scaling grid-layout

![CSS Grid tiles visualization when resizing the screen](/img/css-grid-tiles.png)

```css
.grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}
```

::: aside info-box
The above class has another benefit. When there is, for example, room for three columns, but there are only two elements, the two elements will be stretched across the entire width. This is due to the `auto-fit` value in the `repeat` function.
:::

## Two-way card layouts

You often see big card layouts with an image and content next to each other, spanning a big horizontal space. Often they have a fixed ratio between them (e.g. 50%-50%). When reducing the screen size, you don't want these two next, but below each other. At this point, the ratio also changed to make better use of the available space. The height of the image is not 50% anymore. The wireframes below visualize this concept.
![CSS Grid for dynamic cards](/img/css-grid-card.png)

Does this not sound like a familiar problem? Well it is. It is almost the same as the _auto-scaling grid-layout_ I already described. There is just one small addition. We need to add `grid-template-rows: auto 1fr;` to the `grid` class example. The `auto` value accommodates for the vertical orientation with a changed ratio. This does assume that the images have a landscape orientation. As there are only two child elements (the image and the content) CSS grids handle the rest.

::: aside info-box
In CSS grids, row and column definitions are ignored when there are not enough elements. In the above example, when there are only enough elements to fill the first row, the `1fr` definition of the second row is ignored.
:::

## Conclusion

CSS grids enable you to solve responsive layout issues. Of course there are ways to achieve the above differently, also without using media-queries. But in most cases they require more additional CSS to work, making those solutions more difficult to maintain.Especially when combined with [fluidity](https://vycke.dev/blog/fluid-interfaces-using-css/) CSS grids (and flex boxes) enable you to create websites that naturally flow with the screen size, and not worry about breakpoints. I mean, they are called *break*points for a reason, right?
