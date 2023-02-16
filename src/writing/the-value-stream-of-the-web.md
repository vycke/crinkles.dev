---
title: The value stream of the web
date: 2023-02-14T00:00:00.000Z
tags:
  - workflow
layout: layouts/post.njk
description: >-
  ...
---

It has always been a pleasure for many of us to complain about frameworks, tooling fatigue, over-engineering and whatsoever. The biggest argument is always that these choices focus on the developer and often disregard the user. While I agree with this sentiment *most of the times*, I feel we forget something when voicing it. We forget to look at why and when technology decisions are made. In addition, we do not teach about the impact of our decisions. Not only on our users, but on ourselves in the longrun. 

## What is the value stream
One concept that is often overlooked is the *value stream*. It dictates a set of high-level actions required to deliver value to our users. It is a simple concept that provides insights into decision making and the impact of these decisions. The high-level web value stream is shown below. 

![The web development value stream](/img/value-stream.png)

1. **Concept**: the formalization of an idea or business objective combined, incl. the value we want to deliver.
2. **Design**: converting a work item into an implementable design accepted by developers.
3. **Develop**: the implementation step of the static designs into an interactive result.
4. **Test**: validation and verification through automated tests, user acceptance test, etc.
5. **Deploy & operate**: build, deploy and operate the system to ensure it keeps delivering value.

The value stream lives on macro and micro level. Entire systems or even the smallest feature or change follow the same steps to deliver value.  The idea is that you *optimize* your work for the next action or step. With users at the end. Reverse engineer this and you optimize your result for the users. 

## Value is economics
I believe people make technology or framework decisions based on personal preference. We choose that what we like and what makes us feel productive. What allows us to deliver features *fast*. This is a clear ‘project-like’ mindset. We optimize for the initial implementation cost. This fits projects perfectly. In all cases we are constrained to budget and timelines. 

> The value stream optimizes for value over time

But, the value stream of users optimizes for value over time. It looks beyond just the features that we deliver. It looks at the running costs, maintenance costs, availability for our users, speed, etc. These are two different equations. Both need to be balanced. 

By fixing our technology decision, we impact all steps in the value chain. A modern JavaScript framework requires a compiler, bundler, CSS compiler, linters, postCSS, etc. We need this in both local development, but also in our build pipelines. A lot of setup and configurations, just to get a project started and deployed. While a simple HTML file is accessible straight away. 

## When and how to make technology decisions
The technology decision should be made as part of the *design* step, near the end. Enough short-term and long-term constraints are known at this stage. Examples are deployment limitations (e.g. self-hosted), metrics important to users (e.g. time-to-interactivity), or limitations in skills of the developers. But also budget constraints. Because a suboptimal application is better than no application at all. 

![The web development value stream with highlight of the design step](/img/value-stream-part-2.png)

Before you start saying “but we do not always know what your users want”. It is part of the concept step to (partly) figure it out. In addition, not everybody is part of a startup and know fully well what users want. 

## How decisions impact value over time
One recent example crosses my mind. Out of nowhere a the build pipeline of a big project broke. After looking at the logs I saw the SASS compiler broke. This did make sense. The SASS code was not touched in weeks, and several builds happened in between. Locally the build was running fine. 

So what was the issue? One of the peer dependencies of my build setup had a minor update. The build pipeline uses the newest version of that dependency. Locally I was using the version installed in my `node_modules`. After cleaning my `node_modules` and `package-lock.json` file, I hit the same issues locally. 

Issue found, but no solution. As the issue is in the production build, a solution needs to found, otherwise new value cannot be delivered. The tool we use has a slow cycle time. It could be months before it fixes this issue with the peer dependencies (disclaimer: now, after 9 months it is not updated properly). 

In the end I could mitigate the issues in two steps. After searching for a long time, I found a temporary solution in my compile configurations. This was temporary, as it was bound to break again. A permanent fix is required. The only option is to replace the compile step all together with other dependencies. A dreadful exercise, with big impact across the value stream. Our automated tests cannot help us verify, as they do not use the same build tool. Everything in the application had to be tested manually. Dreadful. 

::: info
If you wonder what the relation of this example is to the value stream, that is easy. The above example happens more than we would like on long running projects. The decisions of the tools and dependencies have real implications our ability to deliver value.
:::

## Wrapping up
