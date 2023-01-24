---
title: State machines and state management
date: 2021-12-08T00:00:00.000Z
tags:
  - state-management
  - state-machines
layout: layouts/post.njk
description: >-
  State management is one of the most complicated, and opinionated topics in modern and JavaScript-focused front-end development. Let's make it easier.
---

State management is one of the most complicated, and opinionated topics in modern and JavaScript-focused front-end development. But at its core, it is not that complicated. We just make it complicated. In this article I will try to demystify state and state management for you, and challenge your mental models around them.

## What is state?

Is state some weird data storage? Is it the data from a database? No. State is nothing more than a JavaScript value that lives within in scope. It can be a boolean, a string, but is in most cases a (complex) object. But it remains a value. In most cases, it is even an object living on the same level as the `window` object. It has become a global value in the JavaScript environment, the browser window. From our code (e.g. UI components), we can use this value to determine what to show or what interactions to allow. In complex applications there are a few different types of state we can have. But remember, they are nothing more than values.

- **UI**: state that is used by a single, or a set of UI components. It is used to control what we can see, how we interact (e.g. input fields) on a detail level. UI state can exist on a global level as well (e.g. dark-mode).
- **Remote**: state from the server that is cached on the client for quick and easy access for all UI components. The remote state should not deviate from the server, except when applying [optimistic UI](https://www.smashingmagazine.com/2016/11/true-lies-of-optimistic-user-interfaces/).
- **URL**: information stored in the URL, like object IDs or filter information, that can be used to determine what to render, or what information to retrieve from the cache/server on (initial) rendering of the page.
- **Meta**: also known as 'state about state'. A common example is a loading state around fetch requests.

::: dyk
Different types of state require different solutions. There is no single state management solution that works best for all. [Redux](https://redux.js.org/) was popular once the golden state management library. However, [SWR](https://swr.vercel.app/) and [React-Query](https://react-query.tanstack.com/) took its place for remote state as per writing of this article.  
:::

## State management

So what about state management? For many, state management feels like a black box. What is happening within Redux? Why does it feel so complicated. I look at it this way: state management is nothing more than patterns we use to make using and changing state, manageable. It is not black box magic, it is just patterns. Why not group all the mutations you can make on your state in one place? And how about giving these mutations simple, but understandable names? In complex applications, adopting these types of patterns makes our code more maintainable. Or so they say (it is true though).

There are several patterns you can follow in state management. These patterns are not mutually exclusive, and many libraries combine two or more patterns. Below are three patterns you follow when managing state.

### Flux pattern

One of the 'best-known' patterns is the flux pattern. Most might not know it directly, but do know [Redux](https://redux.js.org/). It is a great example on how to separate code into a pattern, as visualized below. It might seem daunting or overly complex. But it is nothing more as I said before: break up your code in a pattern. It is a way to group all possible state mutations together, and have clean and small 'actions' accessible for our UI components.

![Flux pattern](/img/flux-pattern.png)

A pattern like this allows us to keep the code in our UI components small and clean. When hitting an issue where our state takes the wrong shape, we know where to look. In most cases, this pattern is applied on a global level. All state you want to manage lives in exactly one place. Not only in the code itself, but also when the application is running. That is why it is called state management.

### Atomic pattern

Many state management libraries force you to create one big state that lives on the highest level of the application. But when choosing different solution for different types of state, this is not always the way to go. By using a library to manage _remote state_, less state needs to be managed on a global level. The need to inject your store setup in your highest-level component wrapper also became redundant.

With an atomic pattern, we have many different global (or local) states of single values. Its approach really embraces the nature of JavaScript and the idea that state are just values. This makes it possible to define state where you need it. You [colocate](https://kentcdodds.com/blog/colocation) with the UI components (e.g. into modules). This gives the pattern a _decoupled_ nature. You don't have to configure all atoms in a generic store.

### Proxy pattern

Many modern front-end frameworks are _reactive_. When a state changes, the framework knows that it should re-render. Or in other words, the state lets the framework knows it changed. This mental model is very like a _proxy_. A proxy is a wrapper object that is being called, instead of accessing the targeted object. This allows us to add custom behavior to various calls.

Proxies are ideal to create reactive and robust state management. The basic power lays in the fact that we can add listeners to state changes. Besides, the values of a proxy can directly be changed. You do not have to invoke the change via a function. If you want to create a more complex proxy, you could implement validators that validate changes before applying a state change. You could even add several layers of 'middleware' before each state change. You can go nuts.

```js
const store = proxy(() => ({ count: 0 }));
const listener = (c) => console.log("Count updated:", c);
store.subscribe("count", listener);
store.count++;
// Count updated: 1
```

The code snippet above shows an example proxy. As you can see, we add a `listener` function for when the value of `count` changes. Now when we change the value of `count`, the `listener` function is triggered. Do note that this particular implementation is not _immutable_. You can change the value directly. Many people prefer to have an immutable state, as it is less prone to development errors.

::: dyk
The `proxy` function from the [Pubble](https://github.com/kevtiq/pubble) package is a flexible example of a proxy-based state management technique. It can be made immutable by choice, you can create (single-level) atoms, or you can converting it to be event-driven.
:::

## State machines

[State machines](https://statecharts.dev/) are ways to model state in a certain shape. It is an old computer science technique that recently got popular in front-end land. The easiest to understand state machines is by an example. State machines allow to describe possible behavior. In the below example it is not possible to go from 'pending' to 'processed'. By restricting behavior, we can reduce the amount of bugs and unwanted side effects users will encounter.

![State machine example 1](/img/state-machine-1.png)

The above example shows in what kind of state a single object can be. But state machines can be applied in a broader sense. Remember that in JavaScript most things are just objects or can be modelled as objects. Even our data fetching and caching can be modelled as a state machine. Let's simplify remote state combined with state machines.

As said, cache is nothing more as a global JavaScript object. Each `GET` request has a URL associated. This URL can be used as the key in our cache. Each key in the cache has a state machine is associated.

```js
const cache = {};
cache['/users'] = machine('init', config);

console.log(cache['/users'].state
// 'pending'
console.log(cache['/users'].context
// { data: null, errors: null, valid: false }
```

![State machine example 2](/img/state-machine-2.png)

When we follow the visualized state machine, we can restrict the behavior in our cache and even include invalidation. While fetching, we are in the `pending` state. Depending on the outcome, we move in the `success` or `error` state. Associated with the outcome, the internal values of the state machines, often called context, is updated accordingly. When we change values the UI (and cache) without committing them to the server, we can invalidate data. The `valid` flag in the context becomes false. This allows us to decide an important decision. Do we need to refresh the data, or can we used the cached version.

In a similar way, many other important interactions can be modelled in a state machine. Think of forms (e.g. touched state) or the visibility of modals. You might think that booleans would suffice in many cases. But when you have to use multiple booleans to determine the correct state, a state machine is more efficient and less error prone.

::: dyk
[XState](https://xstate.js.org/) is a popular state machine library that you can use in various frameworks. Is it too big and complex for you, try my [cogwheel](https://github.com/kevtiq/cogwheel) package.
:::

## Wrapping up

Now you should have a better understanding of some fundamentals of state management. Knowing the different types of state and how to manage state is the start. With proper state management, you can get a long way in complex web applications. But it is the start. There are many (more) ways to manage data that are important in client-side applications. When you master state, go dive into persistent storage or caching.
