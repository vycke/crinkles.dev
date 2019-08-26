---
templateKey: blog-post
title: How to create a scalable and maintainable front-end architecture
date: 2019-08-30T00:00:00.000Z
featuredImage: owl-selector.png
description: >-
  Modern front-end frameworks and libraries make it easy to create reusable UI components. However, in many projects over the years I have found that making reusable components is often not enough. A scalable front-end architecture is required.
tags:
  - Architecture
  - API
  - UI
  - CSS
---

Modern front-end frameworks and libraries make it easy to create [reusable UI components](/blog/interfacing-your-ui-components/). This is a step in a good direct to create maintainable front-end applications. However, in many projects over the years I have found that making reusable components is often not enough. My projects quickly became unmaintainable, as requirements changed or new requirements came up. It took longer and longer to find the correct file or debug something across multiple files.

Change needed to happen. I can, of course, improve my project-searching skills, or be more proficient in using Visual Studio Code. However, I often not the only one working on the front-end. Therefore the setup of our front-end projects need to change and become more scalable and maintainable. This means that we can more easily apply changes in the current features, but also add new features quickly.

## High-level architecture

In traditional application and back-end development we have many different [architectural patterns](https://en.wikipedia.org/wiki/Software_design_pattern) we can follow. Two concepts that are currently used are [domain-driven development (DDD)](https://martinfowler.com/bliki/BoundedContext.html) and [separation of concerns (SoC)](https://en.wikipedia.org/wiki/Separation_of_concerns). These two concepts add great value to front-end development. In DDD you try to groups of similar features, and decouple them as much as possible from other groups (e.g. modules). While with SoC we for instance separate logic, views and data-models (e.g. using the MVC or MVVM design pattern).

We expect modern front-end applications to do more and more of the heavy lifting. With this added complexity, bugs are becoming more frequent. Because users directly interact with the front-end, a reliable architecture, that is both maintainable and scalable is required. My preferred architecture at this moment follows a modular approach according DDD, as illustrated below. Note that my vision is subjected to change, but currently this is my preferred approach.

![High-level scalable front-end architecture](/img/high-level-architecture.png 'High-level scalable front-end architecture')

When a user interacts with our application, he or she is redirected to the correct module by the generic app routing. Ideally, every module is completely contained. However, as a user expect to use one application, not multiple small ones, some coupling will exists. This coupling does not only exists on specific features or business logic. Several features will be shared between the modules. This logic, is combined into the application layer. This means that each module has the option to interact with the application layer. A great example the setup required to connect with our back-end, or API gateway, through the client-side API.

When looking at a project structure, we can following something like shown below. All code for the application layer is stored in the `app` directory, while all modules have a directory the, you guessed it, the `modules` directory. Generic UI components (e.g. tables, forms, date-pickers, etc.) that do not rely on business logic are stored in the `components` directory.

```
app/
assets/
components/
lib/
modules/
styles/
```

The remaining directories hold our static `assets` (e.g. images) or JavaScript helper functions in `lib`. Helpers functions can be very simple. It can be as easy to convert something to certain format within a `string`, or helpers to work with JavaScript objects. But some more complex code can be present in the `lib` directory. Working with schemas or graphs (e.g. algorithms to check for loops in directed graphs) are no exception.

Many use something like `CSS-in-JS` or [styled-components](https://www.styled-components.com/), but I prefer plain-old (S)CSS. Why? Because CSS is equally important for a front-end in my view. It therefore requires its own scalable and maintainable architecture, which is put into the `styles` directory. In addition, it fits the idea of 'separation of concerns' that drives this architecture a lot better. Although I will discuss my CSS setup in a future blogpost, it is driven by [Harry Roberts' ITCSS](https://csswizardry.com/2018/11/itcss-and-skillshare/).

## Filling in the application details

With the high-level and project structure we have made a good start. But, we need more details on various aspects to fully be able to implement this front-end architecture. First, let's take a look at a more detailed architectural diagram, as shown below. In this diagram I have zoomed in on the application layer, but also on a single module. The application layer is the core of our front-end application, so let's discuss this first.

![Detailed architecture of a module](/img/detailed-architecture.png 'Detailed architecture of a module')

The application layer mainly consists of two parts: a store and a client-side API. The store is our global application state. This state holds data that can be used by different modules at the same time. Even when the data is not needed on the screen, it will persist in the store. As you can see, every update request that goes towards the store can go through a chain of logic. This is what we call middleware. This is a pattern heavily used in for instance [Redux](https://redux.js.org/advanced/middleware). An easy example of a middleware is logging of incoming requests of the store.

In some cases, the incoming request for the store needs to be enhanced with data from an external service. In case of Redux, a `Promise` that handles this call is used, in combination with for instance [Redux Thunk](https://github.com/reduxjs/redux-thunk). This can be our own back-end service, but it can also be a public third-party API. Something it suffices to only use the browsers `fetch` API for a single purpose REST-calls. But when you want to use the same API-endpoint for various calls, it might be a good idea to create an API client definition.

A basic API client handles external requests, responses and errors. You can even make it such that it can provide you information about the request state (e.g. loading). More complex API clients handle a lot more though. Some APIs connect through a web-socket or even connect to a GraphQL API. In such a case, you have a lot more configuration options, as illustrated below.

![Anatomy of an API client](/img/api-client.png 'Anatomy of an API client')

In more complex API clients we get the possibility to alter all outgoing requests through middleware (e.g. add authentication headers). The response can be altered using afterware (e.g. changing the data-structure). After altering the response, it is stored in the cache of the client, which is similar to our application store. The difference? The cache only handles data coming in through our client-side API, while our we can put any data in your application store.

Many front-end applications will have a dedicated back-end service to talk to. Be it an API gateway on top of a [Kubernetes](https://kubernetes.io/) cluster with many micro-services, or a single monolith back-end. But sometimes we need to connect to multiple external services, with different types of APIs. With this architecture we have the ability to create multiple API clients. Each of these API client can have its own cache, middleware and afterware. Our application store and the actions in the modules should be able to interact with each of these API clients.

A corresponding project structure for the `app` directory can be something like shown below.

```
app/
  api/
  config/
  store/
  pubsub/
  schemas/
  index.js
```

Two of the directories inside `app` should sound familiar by now: `api` and `store`. These hold all the related to the use-cases described already. The `config` directly holds static definities and configurations (e.g. constants) used throughout the entire application. A `schema` describes a specific data structure for JavaScript objects. This can be used both when using TypeScript or JavaScript. All generic or application critical schemas for the application are stored within the `schemas` directory.

The `pubsub` example is a great example of a feature that can expand the basic architecture of our front-end. The `pubsub` can be used for communication between modules, or for managing scheduled jobs. As it can be critical for the core of the application, it resides within the `app` directory. Lastly we have the `index.js` file. Within this file we can aggregate all functions and constants from within the `app` directory. This means that this files functions as our entry-point towards the application logic.

## Architecture of a module

With our application layer described, we only have the modules left. The detailed architecture diagram already shows the internals of a module. When the application routing points towards a specific module, the module determines how the routing should continue. In other words, the module routing determines which page should be shown. A page consists of a lot of UI components, which is what the user will get to see on the screen.

A page in this context does not differ technically from a UI component. It is just a big UI component. However, other modules can interact with components (and actions), but not with pages. The only way how pages from different modules can interact with each other, is with nested routing. This means that you put the module routing inside a page from a different module as a whole.

Components interact with the application layer through actions. These actions can come in different formats. They can be plain JavaScript functions, Redux related functions or React Hooks. Sometimes you have small utility functions specific for a module. In that case you can put them in the `actions` directory, or you create a dedicated `utils` directory for a module. The module structure for a project is shown below.

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

Similar to the application layer we can have static code (e.g. constants or schema definitions) that is only relevant on for out module. In that case, we put that code in the `config` or `schema` directories. When working with GraphQL, we can have query and mutation definitions. These should be stored in the `gql` directory (or a directory with a similar purpose). In case of working with an application store, you might want to add an `interfaces.js` file, which describes how to access data in the store.

The `index.js` functions similar to the `index.js` of the `app` directory. In this file we describe all the components, actions and constants that other modules or the application layer can use.

## Communication between modules

Not every module needs to have all the directories and files as described. Some modules for instance do not need pages, as they only consists of components and actions. A great example is a 'files' module. This module can for instance combine components for viewing and uploading files, for instance a drag-and-drop area for files. This could be a generic component. However, the actual uploading of files is dependent on the service we can use for it. By combining the UI component and the actual action to upload a file, we create a small contained module. So the moment generic components need to get infused with business logic, we can convert them into modules.

But how can other modules use the components or actions from the files module? In general the `index.js` file of a module describes which components, actions and constants are accessible for other components. So we could just use the file drop-zone or the upload action directly from the files module. However, sometimes we have to choose what we are exposing to other modules. Will it be an action, or are we combine the action into a component?

Let's look at the example of a user dropdown. We can choose to create an action to provides us all the users we can select from to different modules. However, we now need to create a specific dropdown in all other modules. This might not require much effort as we might have a generic dropdown component. But this component might not be suited to use in a form. It might be worth the investment to create one `UserDropdown` component that can be used in all use-cases. When something changes around users, we now only have to make changes within one component, instead of several. So sometimes we need to choose what to expose: actions or components.

![Using a PubSub](/img/pubsub.png 'Using a PubSub')

One advanced pattern that we can use between components is the use of the `pubsub`. With this pattern we are moving more towards micro front-ends, while being one front-end. With this pattern it is not possible to share components but it is possible to share results of actions between components. How it works is illustrated above. Again, this is an advanced pattern and should only be used if you want to go a micro front-end route, or when it is really required.

## UI component anatomy

One last detail level is missing still, and that is the architecture of a UI component. I've written about this in a [previous](/blog/interfacing-your-ui-components/) blog post. When you look at this anatomy, you will see some concepts back that are applied on a bigger scale.

![The UI component anatomy](/img/ui-component-anatomy.png 'The UI component anatomy')

In the end front-end is the first point of entry for our users.
With our front-end projects growing in features, we will also introduce more bugs. But our users expects no bugs, and new features to be added quickly. This is impossible. However, by using a good architecture we can only try to achieve this as much as possible.
