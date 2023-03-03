---
title: A different approach to fluid typography and layouts
date: 2023-03-07T00:00:00.000Z
draft: true
tags:
  - css
  - trick
layout: layouts/post.njk
description: >-
  …
---

With the support of the CSS `clamp()` function, a whole new range of fluid layout possibilities are available to us. Most notably is [Utopia.fyi](https://utopia.fyi). This is a tool that generates different fluid values for typography and sizing (e.g. padding) that we can assign to custom properties. It is a tremendous tool and way to make layouts fluidly scale with the available screen we have. Even this very website is built using fluid layout and typography principles. I do have a problem with it… They give me the feeling I am working for the tool, instead of the other way around.

## The problem with existing tools
Let’s look at how these tools and `clamp()` work. The result is hard to read and manage, as you can see in the generated code below. Each of these steps scales linearly between two values. For instance, `--step-0` scales between `1.13rem` and `1.25rem`. For this particular generated code snippet, the scaling happens between screen sizes of `320px` and `1240px`. But the generated code is not telling you this.

```css
:root {
  --step--2: clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem);
  --step--1: clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem);
  --step-0: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
  --step-1: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);
}
```

The screen sizes for scaling are managed in the second `clamp()` property. What you can see is that each step has its own setting to property scale between the values. For me, this is hard to read and maintain. I am just not able to see the relation of each of the different `calc()` towards the screen sizes, but also towards each other. If I want to make changes I have to use the tool again. I cannot change them myself. 

::: info
Note: Utopia produces comments showing all settings for the generated code that you can put into your own code. This makes it more maintainable. 
:::

## A different mathematical approach

```
         min(screen, max) - min
ratio = ------------------------
              max - min
```


```
size = min + (max - min) × ratio
```

If you want to scale everything the same, e.g. scale it maximum of 20%, you can do:

```
size = min + 1.2 × min × ratio
```

## The actual CSS implementation

Few points of attention about `calc()`:

- It requires the bottom half to be unit-less in a divide
- It requires one of the half of a multiply to be unit-less
- It returns in `px`. 

First define the parameters

```css
:root {
	/* 0.2rem = 3.2px if 1rem = 16px */
	--scale: 3.2; /* unitless */
	--min: 320; /* unitless */
	--max: 1240; /* unitless */
}
```

Calculate the ratio
```css
:root {
	--ratio: calc(
		var(--scale) *
		(min(100vw, var(--max) * 1px) - var(--min) * 1px) /
		(var(--max) - var(--min))
	);
}
```

With this, we can generate fluid typography and layout sizes.

```css
:root {
	--token-size-0: calc(1rem + 1 * var(--ratio));
  --token-size-1: calc(1.33rem + 1.33 * var(--ratio));
  --token-size-2: calc(1.78rem + 1.78 * var(--ratio));
}
```

## Downsides to this approach
- The scaling is in PX not in REM.

## Wrapping up
Both have up- and downsides. 