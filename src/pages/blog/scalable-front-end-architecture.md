---
templateKey: blog-post
title: How to create a scalable and maintainable front-end architecture
pinned: true
date: 2019-08-26T00:00:00.000Z
featuredImage: detailed-architecture.png
description: >-
  Modern front-end frameworks and libraries make it easy to create reusable UI components. But, in many projects over the years I have found that making reusable components is often not enough. We need a scalable front-end architecture.
tags:
  - Architecture
  - API
  - UI
---

Modern front-end frameworks and libraries make it easy to create [reusable UI components](/blog/interfacing-your-ui-components/). This is a step in a good direction to create maintainable front-end applications. Yet, in many projects over the years I have found that making reusable components is often not enough. My projects became unmaintainable, as requirements changed or new requirements came up. It took longer and longer to find the correct file or debug something across many files.

Change needed to happen. I can improve my search skills, or be more proficient in using Visual Studio Code. But, I often not the only one working on the front-end. So, we need to the setup of our front-end projects. We need to make them maintainable and scalable. This means that we can apply changes in the current features, but also add new features quicker.

## High-level architecture

In back-end development, we have many [architectural patterns](https://en.wikipedia.org/wiki/Software_design_pattern) we can follow. Two concepts currently used are [domain-driven development (DDD)](https://martinfowler.com/bliki/BoundedContext.html) and [separation of concerns (SoC)](https://en.wikipedia.org/wiki/Separation_of_concerns). These two concepts add great value to front-end development. In DDD you try to groups of similar features and decouple them as much as possible from other groups (e.g. modules). While with SoC we, for instance, separate logic, views, and data-models (e.g. using the MVC or MVVM design pattern).

We expect modern front-end applications to do more and more of the heavy lifting. With this added complexity, bugs are becoming more frequent. Because users interact with the front-end, we need a reliable architecture, that is both maintainable and scalable. My preferred architecture at this is modular and domain-driven. Note that my vision might change, but this is my preferred approach at this moment.

![High-level scalable front-end architecture](/img/high-level-architecture.png 'High-level scalable front-end architecture')

When a user interacts with our application, he or she is directed to the correct module by the app routing. Every module is completely contained. But, as a user expect to use one application, not a few small ones, some coupling will exist. This coupling exists on specific features or business logic. We can share several features between modules. You can put this logic into the application layer. This means that each module has the option to interact with the application layer. A good example is a setup requiring to connect to our back-end, or API gateway, through the client-side API.

When looking at a project structure, we can follow something like shown below. All code for the application layer is in the `app` directory. While all modules have a directory in the `modules` directory. Reusable UI components (e.g. tables) that do not rely on business logic are in the `components` directory.

```
app/
assets/
components/
lib/
modules/
styles/
```

The remaining directories hold our static `assets` (e.g. images) or helper functions in `lib`. Helpers functions can be very simple. They can convert something to a certain format, or help to work with objects. But more complex code can be present in the `lib` directory. Working with schemas or graphs (e.g. algorithms to check for loops in directed graphs) are no exception.

Many use something like `CSS-in-JS` or [styled-components](https://www.styled-components.com/), but I prefer plain-old (S)CSS. Why? We can solve many UI problems using CSS and HTML and no JavaScript. For me, this becomes easier to do when we apply the concept of SoC. Also, maintaining CSS in one place makes it more maintainable, as you duplicate less. This requires a solid CSS architecture. Although I will discuss this in a different blog post, my CSS architecture is based on [Harry Roberts' ITCSS](https://csswizardry.com/2018/11/itcss-and-skillshare/).

## Filling in the application details

With the high-level and project structure, we have made a good start. But, we need more details on various aspects to implement this front-end architecture. First, let's look at a more detailed architectural diagram, as shown below. In this diagram, I have zoomed in on the application layer but also zoomed in on a module. The application layer is the core of our front-end application, so let's discuss this first.

![Detailed architecture of a module](/img/detailed-architecture.png 'Detailed architecture of a module')

The application layer comprises two parts: a store and a client-side API. The store is our global application state. This state holds data accessible by different modules at the same time. Even when the data is not needed on the screen, it will persist in the store. As you can see, every update request that goes towards the store can go through a chain of logic. This is what we call middleware. This is a pattern used in for instance [Redux](https://redux.js.org/advanced/middleware). An easy example of middleware is the logging of incoming requests of the store.

Sometimes, the incoming request for the store needs to be enhanced with data from an external service. With Redux, we use a `Promise` to handle this call. This can be our back-end service, but it can also be a public third-party API. Something it suffices to only use the browsers `fetch` API for a single purpose REST-calls. When you want to use the same API for various calls, it might be a good idea to create an API client definition.

A basic API client handles external requests, responses, and errors. You can even make it such that it can provide you information about the request state (e.g. loading). More complex API clients handle a lot more though. Some APIs connect through a web-socket or even connect to a GraphQL API. In such a case, you have a lot more configuration options, as illustrated below.

![Anatomy of an API client](/img/api-client.png 'Anatomy of an API client')

In more complex API clients we get the possibility to alter all outgoing requests through middleware (e.g. add authentication headers). The response can be altered using afterware (e.g. changing the data-structure). After altering the response, we store it in the client's cache, which is like our application store. The difference? The cache only handles incoming API data, while we can put any data in your application store.

Many front-end applications will have a dedicated back-end service to talk to. Be it an API gateway on top of a [Kubernetes](https://kubernetes.io/) cluster with many micro-services, or a single monolith back-end. But sometimes we need to connect to different external services. With this architecture, we can create many API clients. Each of the API clients can have a cache, middleware, and afterware. Different parts of our application should be able to interact with each of these API clients.

A corresponding project structure for the `app` directory can be something like:

```
app/
  api/
config/
  store/
pubsub/
  schemas/
  index.js
```

Two of the directories inside `app` should sound familiar by now: `api` and `store`. These hold all the related to the use-cases described already. The `config` holds static definitions and configurations (e.g. constants) used throughout the entire application. A `schema` describes a specific data structure for JavaScript objects. This can be used both when using TypeScript or JavaScript. All generic schemas for the application are stored within the `schemas` directory.

The `pubsub` is a great example of a feature that can expand the basic architecture of our front-end. We can use the `pubsub` for module communication or for managing scheduled jobs. As it can be critical for the core of the application, it lives within the `app` directory. Last, we have the `index.js` file. Within this file, we can add all functions and constants from within the `app` directory. This means that the functions of this file as our entry-point towards the application logic.

## Architecture of a module

With our application layer described, we only have the modules left. The detailed architecture diagram already shows the internals of a module. When the application routing points towards a specific module, the module determines how the routing should continue. The module routing determines which page should be shown. A page comprises a lot of UI components, which is what the user will get to see on the screen.

A page in this context does not differ from a UI component. It is a big UI component. But, other modules can interact with components (and actions), but not with pages. The only way how pages from different modules can interact with each other is with nested routing. This means you put the module routing inside a page from a different module.

Components interact with the application layer through actions. These actions can come in different formats. They can be plain JavaScript functions, Redux related functions or React Hooks. Sometimes you have small utility functions specific for a module. In that case, you can put them in the `actions` directory, or you create a dedicated `utils` directory for a module. The module structure for a project is shown below.

```
users/
  actions/
  components/
config/
    constants.js
    routes.js
    tables.js
    forms.js
  pages/
gql/
  schemas/
  index.js
```

Like the application layer, we can have static code (e.g. constants or schema definitions) that is only relevant for our module. In that case, we put that code in the `config` or `schema` directories. When working with GraphQL, we can have query and mutation definitions. These should be in the `gql` directory (or a directory with a similar purpose). While working with an application store for this module, add an `interfaces.js` file. This file describes how to access data in the store.

The `index.js` acts as the `index.js` of the `app` directory. Here we describe all the components, actions and constants accessible for others.

## Module communication

Not every module needs to have all the directories and files as described. Some modules, for instance, do not need pages, as they only comprise components and actions. A great example is a 'files' module. This module can combine components and actions for viewing and uploading files. An example is a drag-and-drop area for files that uploads the result to a blob storage. This could be a reusable component. Yet, the actual uploading of files depends on the service we can use for it. By combining the UI component and the actual action to upload a file, we create a small contained module. The moment we combine components with business logic, we convert them into modules.

But how can other modules use the components or actions from the files module? The `index.js` file of a module describes which components, actions, and constants are accessible for other components. So we could use the file drop-zone or the upload action from the files module. But, sometimes we have to choose what we are exposing to other modules. Will it be an action, or are we combine the action into a component?

Let's look at the example of a user drop-down. We can create an action that provides us all the users we can select from different modules. But, we now need to create a specific drop-down in all other modules. This might not need much effort to have a generic drop-down component. But this component might not work in a form. It might be worth the investment to create one `UserDropdown` component that we can use. When something changes around users, we now change only one component. So sometimes we need to choose what to expose: actions or components.

![Using a PubSub](/img/pubsub.png 'Using a PubSub')

One advanced pattern that we can use between components is the use of the `pubsub`. With this pattern, it is not possible to share components, but we can share data. The diagram above shows how it works. Again, this is an advanced pattern and only use it if you want to go a micro front-end route, or when you need it.

## UI component anatomy

One last detail level is missing still, and that is the architecture of a UI component. In a [previous](/blog/interfacing-your-ui-components/) blog post I described this already. When you look at this anatomy, you will see some concepts back that we apply on a bigger scale.

![The UI component anatomy](/img/ui-component-anatomy.png 'The UI component anatomy')

The front-end is the first point of entry for our users. With our front-end projects growing in features, we will also introduce more bugs. But our users expect no bugs, and new features fast. This is impossible. Yet, by using a good architecture we can only try to achieve this as much as possible.
