---
title: CSS methodology and architecture
date: 2021-04-14T00:00:00.000Z
description: >-
  In the last two years, I found that my CSS architecture was becoming too complex. But, utility-first frameworks were not doing it for me either. I needed a mix, I needed utility-enabled. Then came CUBE CSS and it all clicked.
---

For years I have used [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) as my goto CSS architecture for large projects. It helped me to keep my CSS maintainable with a small team. But in the last two years, I've found myself applying _utilities_ more, and writing CSS components/blocks less. More and more parts of ITCSS were left untouched and unused. My CSS architecture had become too complex for my daily use. And it was not just me. You see the movement in the community, but also within my own team.

I moved to a [utility-first](https://tailwindcss.com/) approach. 80% of my CSS code is utilities these days. But, my utilities go beyond the `bg-primary` classes. The remaining parts consist of CSS targeting layouts (e.g. grids) and blocks that could be solved with utilities (e.g. using operators like `+` or `~`). At this point, I came across the [CUBE CSS](https://cube.fyi/) of [Andy Bell](https://twitter.com/piccalilli_). It is the methodology describing how I was, and still am, implementing CSS. So as every self-respecting front-end developer with an online presence, I took it, changed it, created a framework, and wrote about it!

## From methodology to framework

CUBE CSS is a methodology with _simplicity_ at its core. It values CSS for what it is. The methodology works well with _custom properties_ to implement a [framework](https://github.com/crinklesio/feo-css). The combination creates a _flexible_, _scalable_ and _extensible_ CSS architecture. The custom properties act as [design tokens](https://css-tricks.com/what-are-design-tokens/) and can be used across all layers of the architecture. My framework consists of three layers.

- **Layout**: classes that look at the macro-level of an application, like the ones I described [here](/writing/css-layout-patterns). They provide flexible and responsive layout solutions that are common across an application. For inspiration on common layout patterns, check [every-layout.dev](https://every-layout.dev).
- **Utilities**: classes that do one job and do one job well. This is often a class that alters a single property. But utilities like the [`.click-area` class](https://github.com/crinklesio/feo-css/blob/main/src/utilities/_click-area.scss) cover more than a single property but still do only one thing.
- **Blocks**: correspond to UI components. That what cannot be solved with layout and/or utility classes alone can be solved in blocks. You can choose to cover all styles of a component in a block, or you can only put those styles not covered by other classes in a block.

:::
CUBE CSS does include a fourth layer, exceptions. Although I love the `data-`attributes on HTML tags, I see them as a part of the blocks.
:::

If you look closely at the code of [my framework (Feo)](https://github.com/crinklesio/feo-css), it has the architecture outlined below. As you can see, it only focuses on layout and utility classes. Blocks and exceptions are very project-specific, and often tied to UI components. Therefore they are left out of scope in this framework. However, there are many ways how you can add blocks in conjunction with this framework to a project. You can add a directory to the framework, but I would suggest _co-locate_ it near the corresponding UI components. You could do this via CSS modules, styled-components, scoped styles in Svelte, etc.

```
styles/
├── layout/        // classes for layout patterns
├── utilities/     // utility classes
├── _global.scss   // global styles targeting HTML tags
├── _reset.scss    // CSS reset
├── _tokens.scss   // design tokens
└── index.scss
```

Implementing and using this correctly requires some basic knowledge about specificity and the cascade. Many of the layout patterns will apply CSS properties with a higher specificity compared to utilities. In some cases, the specificity might be the same, but you should not override layout properties with utilities.

## detailed look at the framework

At its core is the `_token.scss` file. In this file, you define all your design tokens as SCSS variables. But why not define them as custom properties? As the framework is _extensible_, you should be able to define your own names for the variables, with your preferred names. Do you want to use `-xs` or `-4` as a name for spacing? This makes it impossible to correctly define all utility classes. But by using SCSS variables as the definitions, we can generate custom properties that can be used for all your additional (block) classes.

```scss
$colors: (
	'black': #000,
	'white': #fff
);

:root {
	@each $name, $color in $colors {
		--#{$name}: #{$color};
	}
}
```

With the design tokens, we can generate all utility classes. Instead of setting the value of all the utility classes, we refer to the corresponding custom property, as shown below. Assume you change the value of `--black` for a specific page to `#fff`. All utility classes (and blocks) that have a reference to the custom property `--black`, will now use the value `#fff` instead of `#000` on this specific page. This creates a consistent but flexible experience for both the user and developer. We let the cascade of CSS do its work for custom properties.

```scss
@each $name, $color in $colors {
	.bg-#{$name} {
		background-color: var(--#{$name});
	}
}
```

A similar approach is taken for the layout patterns. Many of the layout patterns still have properties that you want to adjust. Take the example below. This generates a [responsive overview of tiles](/writing/css-layout-patterns#responsive-multi-column-grid-system). But you want to be able to set the size of the gap. By generating utility classes we allow developers to set classes like `tiles tiles-g-xs` on elements. Similarly, other properties can be identified that can be replaced by additional layout utility classes (e.g. replacing the `20rem`). Although this flurries the lines between layout and utilities, this is okay. It aids towards the goal of covering 80% of the applied styles with this framework.

```scss
.tiles {
	--tiles-gap: var(--spacing-0);

	display: grid;
	grid-row-gap: var(--tiles-gap);
	grid-column-gap: var(--tiles-gap);
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	width: 100%;
}

// Generate classes to set the tile gap
@each $name, $space in $spacing {
	.tiles-g-#{$name} {
		--tiles-gap: var(--spacing-#{$name});
	}
}
```

## Wrapping up

The moment I read about CUBE CSS, I was a fan of the methodology. How could I not? It was basically describing how I felt about CSS and how I was using it. At the same time, I became a big fan of customer properties. So why not combine the two into a framework? Which is what I did. The current version of the framework is open on [GitHub](https://github.com/crinklesio/feo-css). It is small but used in several projects, including this website. It has several layout and utility classes build in. For now, I intend to continue to improve and enrich the framework when I can. Let me know in the [GitHub issues](https://github.com/crinklesio/feo-css/issues) what you think should be added!
