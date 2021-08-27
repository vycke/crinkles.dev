---
title: Demystifying state management
date: 2021-08-25T00:00:00.000Z
description: >-
  State management is one of the most complicated, and opinionated topics in modern and JavaScript-focused front-end development. Let's make it easier.
---

State management is one of the most complicated, and opinionated topics in modern and JavaScript-focused front-end development. But at its core, it is not that complicated. We just make it complicated. In this article I will try to demystify state and state management for you, and challenge your mental models around them. 

## What are state and state management?
Is state some weird data storage? Is it the data from a database? No. State is nothing more than a JavaScript value that lives within in scope. It can be a boolean, a string, but is in most cases a (complex) object. But it remains a value. In most cases, it is even an object living on the same level as the `window` object. It has become a global value in the JavaScript environment, the browser window. From our code (e.g. UI components), we can use this value to determine what to show or what interactions to allow. In complex applications there are a few different types of state we can have. But remember, they are nothing more than values.  

- **Local**: state that is used by a single UI component.
- **Shared**: state that is used by many UI components. It is often managed in a parent or wrapper component.
- **Global**: a special kind of _shared_ state, as it lives on the highest level, accessible to all UI components (or even helper functions).
- **Meta**: also known as 'state about state'. It tells you something about
- **Route**: state stored in the current URL of the application (e.g. object IDs or pagination information).
- **Remote**: a copy of the data coming from a server. The responses of fetch requests are stored as 1-on-1 copies in this state. It should not deviate from the server (except when applying [optimistic UI](https://www.smashingmagazine.com/2016/11/true-lies-of-optimistic-user-interfaces/)).

So what about state management? For many, state management feels like a black box. What is happening within Redux? Why does it feel so complicated. I look at it this way: state management is nothing more than patterns we use to make using and changing state, manageable. It is not black box magic, it is just patterns. Why not group all the mutations you can make on your state in one place? And how about giving these mutations simple, but understandable names? In complex applications, adopting these types of patterns makes our code more maintainable. Or so they say (it is true though). In the sections below, we go deeper into different kind of state management patterns. 

## Event-driven pattern

The best-known pattern is the flux pattern. It gained popularity with the 'Redux' package. It is a great example of an event-driven pattern. Let's take a closer look at its flow. The user, via the view, dispatches an action, via an action creator. It might seem daunting or overly complex. But it is nothing more as I said before. It is a way to group all possible state mutations together, and allow us to use simple 'actions' with memorable names from our UI components.  

![Flux pattern](/img/flux-pattern.png)

Such a pattern allows us to keep the code in our UI components small and clean. When hitting an issue where our state takes the wrong shape, we know where to look. That is why it is called state management. 

A core concept that came with this pattern are *reducers*. Reducers are these big complex switch statements that hold all our state mutation logic. They can really feel like a black box sometimes. But don't get fooled. The concept is really simple. When removing the complexity of the switch statement your are left with something like the snippet below. A reducer is a simple function that gets a state and returns a state. Nothing more, nothing less. It uses additional input to mutate the state in between, or don't do anything at all.   

```js
function reducer(state, { action, payload }) {
  ...
  return newState;
}
```

Redux relies heavily on reducers. When setting things up, you add all your reducers to your Redux store. Redux really takes event-driven from server-side patterns at heart. All reducers are allowed to act upon the dispatched actions. However, I cannot say I have seen this happen in production(-like) environment. 

Event-driven state management is related to [state machines](https://statecharts.dev/). State machines allow us to clearly define the shape of the state, and when which mutation is allowed. Below is an example of a state machine for an animated toast message. This toast message should disappear after X seconds. The [Redux style guide](https://redux.js.org/style-guide/style-guide#treat-reducers-as-state-machines) shows you how to model reducers into state machines. If this feels complicated, you can get a long way by adding if-statements in your switch statements. "You can do action X if we are in state Y".

![State machine example](/img/state-machine.png)

## Atomic pattern
Many state management libraries force you to create one big state that lives on the highest level of the application. This came in a time where we put our 'remote' state in this store. But solutions like [React Query](https://react-query.tanstack.com/), [SWR](https://swr.vercel.app/) and [Apollo Client](https://www.apollographql.com/docs/react/) handle this for us now. Less and less data needs to get managed on a global level. The need to inject your store setup in your highest-level component wrapper also became redundant.  

With an atomic pattern, we have many different global states of single values. Its approach really embraces the nature of JavaScript and the idea that state are just values. Each atom is a single value. In most cases, atoms also live on the global level in the JavaScript environment. However, you don't have to define all atoms in one place. If you modularize your application, you can have the code of different atoms live in different modules. You group atoms closely to where you use them. You [colocate](https://kentcdodds.com/blog/colocation) them. 

This gives the pattern a _decoupled_ nature. You don't have to configure all atoms in a generic store. Also, they do not have to be directly injected into your UI component wrapper. Most frameworks allow you (e.g. via hooks) to interact with atoms in components directly. Lastly, atoms can be combined (in most implementations). This means you can use atoms in other atoms. When an underlying atom changes, the parent atom changes as well. You don't have to worry about re-render or listening, it is all managed for you.

It does have some downsides. When the number of atoms grows, managing them can become a hassle. You have to name them all, and you have to be aware that they exist. Also, managing a complex structure of dependencies between atoms can become quite a task for developers.

## Reactivity and proxies

Many modern front-end frameworks are _reactive_. When a state changes, the framework knows that it should re-render. Or in other words, the state lets the framework knows it changed. This mental model is very like a _proxy_. A proxy is a wrapper object that is being called, instead of accessing the targeted object. This allows us to add custom behavior to various calls.

Proxies are ideal to create reactive and robust state management. The basic power lays in the fact that we can add listeners to state changes. Besides, the values of a proxy can directly be changed. You do not have to invoke the change via a function. If you want to create a more complex proxy, you could implement validators that validate changes before applying a state change. You could even add several layers of 'middleware' before each state change. You can go nuts.

```js
const store = proxy(() => ({ count: 0 }));
const listener = (c) => console.log('Count updated:', c);
store.on('count', listener);
store.count++;
// Count updated: 1
```

The code snippet above shows an example proxy. As you can see, we add a `listener` function for when the value of `count` changes. Now when we change the value of `count`, the `listener` function is triggered. Do note that this particular implementation is not _immutable_. You can change the value . Many people prefer to have an immutable state, as it is less prone to development errors.

## Wrapping up

Now you should have a better understanding of some fundamentals of state management. Knowing the different types of state and how to manage state is the start. With proper state management, you can get a long way in complex web applications. But it is the start. There are many (more) ways to manage data that are important in client-side applications. When you master state, go dive into persistent storage or caching.

:::
The `proxy` function from the [Pubbel](https://github.com/crinklesio/pubbel#proxy-store) package is a flexible example of a proxy-based state management technique. It can be made immutable by choice, you can create (single-level) atoms, or you can converting it to be event-driven.
:::
