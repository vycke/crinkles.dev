---
templateKey: blog-post
title: Welcome to kevtiq.co
date: 2019-06-24T00:00:00.000Z
description: >-
  A welcome post from Kevin Pennekamp, to his personal blog: kevtiq.co. This post tells you what kind of posts you can expect on this website.
tags:
  - banter
---

For years I have had the ambition to start my blog. Blogs are a great way to share knowledge with others. These can be facts, opinions, guidelines or lessons learns through failure and success. Although the ambition was there, I never really pulled through and finished a working blog website that I was actively using.

You might be thinking, why not use an existing platform like [Medium](https://medium.com) or [The Practical Dev](https://dev.to)? While I will be sharing the articles on platforms like these, there is one big reason for not making either my main platform. I love tinkering around on a website too much. What better place to apply newly learned patterns in `CSS`, `HTML`, and `JavaScript`?

Therefore I decided to design, develop, redesign, start over and finally finish (kind of...) my own personal blog website called **kevtiq.co**. And now it is here!

![An image welcoming all the readers](/img/welcome-hello.png 'An image welcoming all the readers')

## What can you expect

I hear you thinking, what in the World would Kevin be writing about? Well, as you might be guessing a little bit from this blog post, I have a small passion for web development and web design. So in the coming months, you will be finding posts about:

- Basic concepts in front-end development that are not a must, but nice-to-haves;
- The awesomeness of CSS (yes I really like CSS);
- How to setup a scalable front-end architecture (e.g. with React), including your CSS;
- How to solve specific problems in a frontend World;
- How I would create certain UI elements.

In the future, this list will definitely expand, as it already did in the last week. But it is definitely a good starting point for now. The order of topics and posts will be random, but I will ensure articles are updated with links to newer articles if necessary. As I like code examples and pretty visuals, expect enough of those too!

```jsx
Code examples incoming...
```

## How it is build

Years I have spend hours designing and developing various iterations of my brand and website. The brand itself had more iterations than the website itself, but finally, I settled for the identity below (at least for now).

![The color palette of Kevtiq.co](/img/color-palette.png 'The color palette of Kevtiq.co')

I have tried solutions like WordPress, Drupal and even tried creating my own CMS system hooked up to a SQL database. But in the end, all of these solutions took too much effort to finish for a small personal side project. So I lost interest. But like many other front-end engineers, I discovered static site generators.

A static site generator does exactly what the name suggests. It generates webpages based on templates and content files (like `.md` files). In general, static site generators make it very easy to push a new static website fairly quickly. My current job requires me to do a lot of React. As I continuously learn new things, I wanted my website allowing me to play around with React. With this in mind, I stumbled upon the static site generator, [Gatsby](https://gatsbyjs.org).

Although creating a website with Gatsby or any other static site generator is daily easy, it was still missing a CMS. Luckily, there are several 'headless' CMS options available. These solutions make content from a repository available via a RESTful API for display on any device. My choice fell on [Netlify CMS](https://www.netlifycms.org/), which is easy to use for blog posts, static pages and media, such as images.
This was an easy choice, as choose [Netlify](https://www.netlify.com/) for the site hosting ([Github Pages](https://pages.github.com/) is a good alternative).

If you are interested, you can find the source-code of this website on [Github](https://github.com/kevtiq/kevtiq.co).
