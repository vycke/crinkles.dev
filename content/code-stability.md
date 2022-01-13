---
title: Interdependencies and code stability
date: 2021-09-14T00:00:00.000Z
description: >-
  As engineers, we have the tendency to over-engineer our solutions, make our code as reusable as possible. We make our code DRY. But in this quest, we often create unstable code.
---

As engineers, we have the tendency to over-engineer our solutions, make our code as reusable as possible. We make our code DRY (don't repeat yourself). Although these are good rules to go by in most cases, they can also lead to problematic maintenance issues. In our DRY-quest, we can create unstable, yet reusable code that is used in more than one place. Sometimes it is ok to write our code WET (write everything twice). Why? Because it creates more stable code around interdependencies.

## The stability rule

The stability rule is very simple. In this rule, stability means the _likeliness the code will change_. Every function, module, or UI component we write, is as stable as the lowest stability of its dependencies. Think about it. If a dependency changes, our code has to (potentially) change as well.

> Every function, module, or UI component we write, is as stable as the lowest stability of its dependencies

But how do you determine the stability of dependencies? This is, unfortunately, no exact science. It depends heavily on the type of dependency as well. We can set third-party packages to fixed version numbers, making them very stable. We can assume browsers API will, [most likely](https://www.techradar.com/news/google-reverses-embarrassing-website-breaking-chrome-update), not change. But the code we write ourselves can change. You can measure how many times a function/module changes, or you can make a guess how likely it will change. In both cases, you can give a function or module a _score_ of its stability. With this score, you can create a _dependency graph_ of your codebase, like the one below.

![Dependency graph](/img/dependency-graph.png)

In the above graph, we see that 'Function B' is dependent on 'Function A' and 'Package A'. Function B uses Function A and Package A. All elements also got a score attached. The higher the score, the more stable the element. The ones with a keen eye will see the above dependency graph is actually wrong. It does not comply with the stability rule. The score of 'Component A' cannot be 7, as they depend on a function with lower stability. We have either have to update the graph or change our code.

## Splitting code

Based on mismatching stability scores, we can find possible improvements. It allows us to reorder code to improve its stability. But, it also allows for conscious decisions to not change anything at all. In our example, it is highly likely that 'Function B' is only unstable because it has some code only used for 'Component B'. At this point we have three options:

- Split 'Function B' into two functions. One function contains stable code used by both components. Another function contains code used by 'Component B'.
- Migrate the unstable part of 'Function B' to 'Component B'. This makes 'Function B' smaller, but more stable.
- Don't change anything.

We find ourselves with these examples more often than we would like to admit. How many times have you thought: "if I add this option to the function, I can use it here as well". This is the moment where we need to look at the dependencies and their stabilities. Only then will we achieve stable code.

## Systems, architecture, and patterns

Most of our time spent during development is around unstable code. We focus on implementing UI and features that are each unique and add a different value to a user or business. This makes the code by default less reusable. But, these features are built upon systems, architectural decisions, and patterns. These dependencies allow us to stabilize a certain core of the application. Some examples:

- A design system or UI library provides stable low-level UI components that can be used in many different UI components. Think of input fields, buttons, tables, or even cards.
- In React you can create generic hooks abstracting low-level logic (e.g. fetching data, including loading state).
- Standardized object validation logic through libraries as [Yup](https://github.com/jquense/yup) or [schematiq](https://github.com/kevtiq/schematiq#object-validation).
- Standardize fetch requests and state management around basic CRUD operations.
- Adopt an architecture or design patterns (e.g. [client-side reference architecture](https://github.com/kevtiq/reference-architecture)) that help you determine which parts should be stable. Patterns and consistent architecture help to create imaginary boundaries between functions and modules as well.

And many more ways can be found to stabilize parts of your codebase. Everybody following a recent tutorial knows packages like `lodash`. These packages or ideas, regardless if you build them yourself, or download them, help you create maintainable code.

## Wrapping up

Determining the correct interdependencies on code stability is no exact science. You can measure how often code changes. But, when determining interdependencies, you have to look into the future. You have to determine how _likely_ code is to change in the future. This is not something you do every day. You are not going to create a dependency graph for each change. But having a sense of stability on various levels helps a lot. You will see the _quality_ of your code increase and become more _maintainable_.
