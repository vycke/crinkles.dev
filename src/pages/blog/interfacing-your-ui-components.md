---
templateKey: blog-post
title: Interfacing your UI components
date: 2019-07-16T00:00:00.000Z
description: >-
  Interfacing on a UI component is a difficult concept. Interfaces do not only exist towards the users through the UI, but they also exist internally. Other engineers should be able to use our components within looking at the internals. To achieve this, you have to understand certain parts of the anatomy of a UI component.
tags:
  - UI
  - API
  - Interface
  - component
  - React
---

In recent years, front-end development became an important part of my life. But when I started years ago, I had no idea what an API was. I worked with them, but I never really cared what it exactly was, or what it requires to build one. I knew what the concept of interfaces in UI, but its relation with the I of API was lost to me. At a certain point, collaboration becomes more important. Your colleagues should be able to use and understand your work. This was the point for me that I started to see the connection between API and UI in frontend development.

## What is an interface

As a front-end engineer, you should always take the reusability of your work into account. On the other end, our work should also be usable and accessible to users. Both concepts come together with the modern way of working, where design systems are at the center of attention. As [Alla Kholmatova describes in her book](https://www.smashingmagazine.com/design-systems-book/) a design system consists of reusable patterns. But how do you make something reusable, especially when the content pattern itself is rather complex?

This is where the concept of interfaces come into play. The every so trustworthy [Wikipedia](<https://en.wikipedia.org/wiki/Interface_(computing)>) has the defines an interface as follows:

> An interface is a shared boundary across which two or more separate components of a computer system exchange information

When looking at this definition with my front-end goggles, I directly see the word _component_. Two or more separate UI components that work together is exactly how most design systems are implemented. In [React](https://reactjs.org/docs/components-and-props.html) for instance, you provide data from a parent component to a child component through the _props_ of the child component. So is this the spot in front-end development where we design and develop interfaces? Yes, yes it is.

As mentioned though, this is not the only place where interfaces play a role. When a user clicks on a button, or fills in a form and submits it, he or she is interacting with one (or more) of our components. The UI the user is interacting with is the shared boundary from the interface definition. The interactions of a user are a way of transferring information about his or her intentions towards our components.

## Component anatomy

So we are dealing with two types of interfaces when designing and developing components. By combining multiple of these components we can create a UI that the user can use that is connected to our system. Great! Are we done? Not completely. When we change something in one interface, it affects the other interface of the same component. To understand this better, we have to take a look at the component anatomy.

![The UI component anatomy](/img/ui-component-anatomy.png 'The UI component anatomy')

A UI component consists, as you can see, of several parts that interact with each other. When a user interacts with the UI, for instance by clicking a button, some logic is triggered inside the component. Depending on the type of logic, several things can happen within the component. The internal state of the component gets updated, we send a request to the backend, or we provide information back to the user. One important path inside the component is missing though. Through its API, it can provide information to other components. This only works when the other components have connected to your component, for instance by providing a callback function (e.g. an `onClick` function for a button component).

So your component can provide information to other components through its API, but this also works the other way around. Another component can provide information through the API to your component. This is the interface used by other engineers. So when another component connects with our components through the API, our component runs some logic internally. Depending on the logic, it either updates its internal state, provides information back, or update the UI based on the information.

In the last case, it is our component that describes in its API how it can connect with other components. It describes what type of information it can receive, but also when it can provide information back (through callback functions). We can often assume that other engineers are not aware of the internals of our UI components. So the interfaces become a way to describe how we want others to use and interact with our work. But how can we describe our interfaces to ensure others are aware of how they should interact with them?

> The interfaces become a way to describe how we want others to use and interact with our work

## Describing interfaces

This problem is partly already solved for your users with proper design. Providing good visual queues to the user so they know where and how they can interact with your component is a good first step. A second step resides within the implementation of the designs. Not every user interacts with a UI the way you envision. This can have various reasons, but a big one can be disabilities. When a user is partly blind, he or she might use a screen reader to interact with your component. The design of the UI does not have to change, but on an implementation level, you have to consider these use cases. This is what is called the field of [accessibility](https://www.smashingmagazine.com/category/accessibility/) (or `a11y`).

In the remainder of this post, however, I want to discuss the engineers' interface or the API. Describing how we want other engineers to interact with our UI component is not a trivial task. As an engineer, myself included, we often have the feeling that our work is self-explanatory. It is not. We have to describe at least some things to ensure engineers of different levels can use our work if we want to.

- What APIs of our UI component do they have access to;
- For each API, how they can use it and what its purpose is (e.g. describing how they can influence the styling of your UI component);
- Examples showing the actual outcome (UI) and the influence of different combinations of API inputs.

The above can be achieved in various ways. You can write extensive documentation in a markdown (`.md`) file (e.g. `README.md`). Building a documentation/playground website yourself where others (and you of course) can interact with your UI component is a fun option. If that requires a too big of an investment, using tools like [Gitbook](https://www.gitbook.com/) or [Storybook](https://storybook.js.org/) are good techniques for documenting UI components extensively, with a low investment.

## API guidelines for React

Up until now, it was a lot of text, too little examples (my bad, sorry). So let's discuss some pointers for describing your API using React. Hopefully, you will see that the examples can also be applied to other frameworks. In React, your APIs are the [_props_](https://reactjs.org/docs/components-and-props.html) you define. Let's look at a small button example with some properties.

```jsx
const Button = ({ onClick, variant, children, override, className, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${override.defaultClassName} ${className}`}
      data-variant={variant}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'stroke', 'flat']).isRequired,
  onClick: PropTypes.func.isRequired,
  override: PropTypes.object
};

Button.defaultProps = {
  variant: 'primary',
  className: '',
  override: {
    defaultClassName: 'btn'
  }
};
```

At the top, we see our actual component. In the `return` statement we see what UI is being generated, but we can also see how the _props_ are applied. More importantly, though, are the `Button.propTypes` and `Button.defaultProps` in this case. The former is a way in React to describe the types of values we expect of each of the _props_ and if they are required. For the `variant` _prop_ we also see that we restrict the values it can have.

With `defaultProps` we define some default values used by the component. Using default values is a good way to avoid unwanted side effects when someone uses our component. In the above component when `className` is not used, the CSS class `undefined` will be added, as the _prop_ is `undefined`. But because set a default value to an empty string, this empty string will be used instead of `undefined`. This avoids potential side-effects when someone creates a CSS class called undefined.

One of the _props_ that might seem weird is `override`. Let's say you use a default class name for your buttons called `.btn`. Although it is a sensible and good name, other developers working on different projects might use a different default class name. In the `override` _props_ you can to override some default internal variables typically used. Ideally, it is hardly used, but it can be easy to way to make your components just a bit more powerful for others to use. If another developer does not want to override `override.defaultClassName` every time, he or she can just create a new component that wraps our `Button` component. This avoids the need for the other developer to know the internal logic of our component.

```jsx
const PrimaryButton = (props) => (<Button
	variant="primary"
	override={{ defaultClassName='company-btn' }}
	{...props}
/>);
```

## Now what?

Interfacing for your components is hard. Other developers using your UI component might not be interested in the internals of it. Still, you have to ensure that it is clear to them how they can use and interact with it. In the end, they do influence the users' interface, the UI. Users also need to understand how they can interact with our components. When trying to achieve this, start small (e.g. naming convention of APIs). From there, you can expand and find better ways of interfacing than described in this post.
