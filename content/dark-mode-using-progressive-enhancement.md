---
title: Dark mode using progressive enhancement
date: 2022-07-30T00:00:00.000Z
description: >-
  …
---

Some time ago I came across a very [interesting question](https://twitter.com/sebastienlorber/status/1499768302788354053) on Twitter. Is it possible to implement dark mode with progressive enhancement, i.e. without JavaScript? The one asking the question suggested `:has`, but that selector is not very well supported yet. But in the replies I found an answer focused on existing browser APIs for HTML and CSS. I was dying to try out for myself, to see if we can make it work. 

:::
Progressive enhancement is a design philosophy that provides a baseline of essential content and functionality to as many users as possible, while delivering the best possible experience only to users can run all the required code. In practice this means relying as much as possible on HTML and CSS, and less on JavaScript.  
:::

## Initial implementation
The suggested implementation starts with a well positioned `<input />` element, as shown below. It is a simple (hidden) checkbox input field as the first element in the `<body>` of the HTML document.  

```html
<html>
	<body>
		<input id="theme-toggle" type="checkbox" hidden />
		...
	</body>
</html>
```

When the `<input />` element is the first child of the `<body>`, we are able to target all ‘general sibling’ elements, using the `~` selector. This selector allows us to target all elements that live on the same level as our `<input />` element, and set values on them. Below you can see this selector applied twice. First target our `<input />` as specific as possible. Next we set custom properties that cascade down for the two states of the input fields. Using the `:not(:checked)` allows us to target all siblings when the input field is *not* checked, while `:checked` does the opposite. This allows us to define variables for our basic themes.

```css
/* light theme */
input[type="checkbox"]#theme-toggle:not(:checked) ~ * {
  --background: var(--white);
  --foreground: var(--black);
}

/* dark theme */
input[type="checkbox"]#theme-toggle:checked ~ * {
  --background: var(--white);
  --foreground: var(--black);
}
```

With the basic implementation setup, we still need the ability to add user interaction. As we are looking at a progressive enhancement implementation, we try to avoid a JavaScript implementation. Luckily for us, HTML has all we need. Anywhere we in the HTML we can use a `<label />` element with the `for=“...”` attribute. Everything within the `<label />` element is now clickable and will switch the state of the `<input />` with the corresponding `#id`. This implementation is mostly used in forms to make, *drum rolls*, labels clickable. But, this works across the entire HTML document. 

```html
<label for="theme-toggle">...</label>
```

## Adding user preferences 
Above does to take user preferences into account 


We get four states:
- default broswer dar

- Media query


## Styling the `<label />`




## Main drawbacks 

- Non-persistent
- Breaks from root: implementation
- Overhead heavy
- cannot target body and html
- Addition complexity as label content changes based on user preferences, making persistent implementation more complex