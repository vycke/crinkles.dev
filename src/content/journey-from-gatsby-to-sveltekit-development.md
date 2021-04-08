---
title: Journey from Gatsby to SvelteKit - development
date: 2021-04-08T00:00:00.000Z
description: >-
  Testing...
---

For the last few weeks or months, I was getting restless about everything: my work, my website, the environment, the World. I had to find something to change my focus to, restore my energy. Around a week or two ago, I found the news of [SvelteKit going into public beta](https://svelte.dev/blog/sveltekit-beta). This sparked excitement in myself I had not felt in a long time. So during Easter weekend, while in a Corona lockdown, I started with a new journey. An exciting journey. I was going to learn a new framework and rebuild this website! Or at least, try.

## Introducing Svelte and SvelteKit

The previous version of my website was build using [Gatsby](https://www.gatsbyjs.com). Gatsby is the "fasted frontend for the modern web" using [React](https://reactjs.org).

> **Client-side rendering (CSR)**: also known as single-page applications (SPA). One HTML file loads all CSS and JavaScript to a browser on the initial render. The JavaScript is used to manipulate what is rendered on the screen, even when the URL is changed.

> **Static site generation (SSG)**: with SSG your website gets generated (HTML, CSS, and JavaScript) when building your website. The static files get hosted and retrieved when a browser requests them.

...

> **Server-side rendering (SSR)**: with SSR, a browser sends a request for a website based on the visited URL. A server generates the static files (HTML, CSS, and JavaScript) and sends these to the browser. Ruby-on-Rails and PHP (e.g. WordPress) are great examples of SSR.

## Creating and styling the UI

ROUTES & TEMPLATES

I am a big fan of CSS, and have a strong opinion on how it should be applied in websites/projects. My own [CSS framework](https://github.com/kevtiq/css-framework) follows the ideas of [CUBE CSS](https://cube.fyi). It allows me extract general layout patterns and combine it with general utility-first CSS. Most styling can be solved this way. But this means that the CSS lives on a global level. When I read about the 'scoped' styles of Svelte I got a bit anxious. Would the deviation be to big?

But quickly it hit me. The combination could work perfectly. It could allow me to create global `layout` and `utility` CSS, and use the 'scoped' CSS of Svelte to add styles specific to components or pages. The styles defined in the Svelte component could basically replace the entire `block` directory of my framework. This means that components would look something like shown below. On the `div` instead the `header` tag, you see various utility classes applied, but also the defined `.inner` class.

```svelte
<header>
	<div class="inner flex-row items-center justify-between mb-0">
		<Logo />
	</div>
</header>

<style lang="scss">
  header {
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    backdrop-filter: blur(20px);

    .inner {
      width: 100%;
      max-width: 75rem
      margin: 0 auto;
    }
  }
</style>
```

This worked beautifully, for the most part. The compiler of Svelte is smart enough to identify unused local styles, and not bundle them. However, in SvelteKit you can render an HTML string using the `@html` flag. The compiler cannot link the two and will flag local styles as unused. To solve this issue, the `:global()` helper has to be used. But except for that, even my opinionated way-of-working just works.

```svelte
<style>
	:global(.post h2) {
		...;
	}
</style>
```

I think I am good at CSS, but bad at animations. I know my way around CSS transitions, but that is as far as I go. Luckily Svelte got a lot of sweet stuff built in. The `svelte/transition`, `svelte/animate`, `svelte/easing` (and potentially more) packages really make your life easier. They enabled me to implement page transitions (with the code below), or logo hover animation with ease. These little touches credit the name of my website, Crinkle.

```svelte
<script>
  import { fly } from 'svelte/transition';
<script>

<main in:fly={{ y: 50, duration: 250 }} />
```

## Setting up the markdown file handling

...

## Conclusion

...
