---
title: Combining :placeholder-shown and :has
date: 2023-08-19T00:00:00.000Z
tags:
  - css
  - trick
layout: layouts/post.njk
description: >-
  Yesterday my wife told me about this :placeholder-shown selector. I had visual question marks above my head because I never heard of it before. But it sparked curiosity about what it could give me. 
---

Yesterday my wife (also a front-end developer) came to ask for my help with something. She read something about a `:placeholder-shown` selector and was wondering if it could solve her problem. Upon receiving the question I (almost) had visual question marks floating above my head. I never heard of this selector before. Is it new? Is it even supported? What does it do? To my surprise, I found that the first browser released support in 2015 already. Because we can use it, I started wondering what I could do with it. 

## Material UI input fields
A lot of us are familiar with Material UI, the design language of Android apps. But, Google also uses it for its web apps. Years ago already, they had these fancy [input fields](https://m3.material.io/components/text-fields/overview). These were input fields without a visual label. But once you wanted to start typing, the placeholder moved from its position. It would become an actual label. 

![Example of how the material input fields look](/img/material-input-field.png)

The actual libraries that implement this type of input field use a lot of JavaScript to get it done. Just inspect a web app with it, and you see a lot of CSS classes added to the parent element once an element gets the focus. 

But I still like these types of interactions. So I was wondering if the `:placeholder-shown` could be a CSS-only solution for this. 

## A CSS-only approach, kinda
The `:placeholder-shown` does exactly what it suggests. When using it on `input:placeholder-shown`, you can apply CSS properties only when the placeholder is visible. When wrapped in `:not()` you get the opposite effect. You can apply properties when the placeholder is not visible. When the input field has a value. 

My first test to see if the described effect was possible to develop was really simple. I combined several selectors to see if I could make something appear on the screen. 

```css
/* does not work ... */
input:not(:placeholder-shown)::after {
	content: "hi!";
	display: block;
}
```

Unfortunately, this does not work. You see, `::before` and `::after` only work on containers, elements that can have child elements. `<input />` by definition cannot have a child element. So `::before` and `::after` cannot be applied to input (or similar) fields. So we have to wrap the field. That is not such a big deal. In many component-based architectures this already happens (e.g. adding a label or optional error message).

```html
<div class="parent">
	<label>Some input</label>
	<input placeholder="Some placeholder (required)" />
<div>
```

With this HTML structure we can use the new `:has` selector to get something shown up on the screen.

```css
.parent:has(input:not(:placeholder-shown))::after {
	content: "hi!";
	display: block;
}
```

That is one complex CSS selector, but it works! It says: *"If you have an input field where the placeholder is not visible, show 'hi!'"*. 

::: info
The `:has` selector is not yet turned on by default on Firefox as of the writing of this article. Chrome-based and Safari-based browsers have `:has` support since halfway through 2022. 
:::

We are almost there to create an effect like we said before. The Material UI example uses this type of visual interaction for the label. That would mean we need to use the `::before` instead of the `::after`. But from an accessibility point-of-view, it is better to have a separate label. So why not use it for something else? Many placeholders show examples or even input requirements (e.g. phone number format). Let's go with that! 

But how to get this information in the `::after`? Or more specifically, in the `content` property? There are two approaches possible here. 

1. You add an attribute to the parent that you can use with `attr()`.
2. You add another element that you can hide using `display: none`. This would mean `::after` is not needed at all!

Both are valid options, but we will look at option one here. We have to slightly adjust the HTML we had previously for this method to work. As we cannot target an attribute of a child element with `attr()`, we need to add some text to the parent via an attribute. In this case, we can make a slight deviation from the placeholder text.  

```html
<div class="parent" data-text="Format: +316 00 00 00 00">
	<label>Phone number</label>
	<input placeholder="Phone number (+316 00 00 00 00)" />
<div>
```

In the CSS we can now easily change our code on the `content` property, to get the desired result.  

```css
.parent:has(input:not(:placeholder-shown))::after {
	content: attr(data-text);
	display: block;
}
```

And voila! We now have an accessible input field with a proper label and placeholder. And once the placeholder is not visible anymore, we show additional formatting information below the input field.

## Wrapping up
You can see the live effect on [this codepen](https://codepen.io/kevtiq/pen/poqoOvE). Although not exactly the effect I wanted, I am happy with the result. It shows again the power of modern CSS and the new possibilities. Even though the implementation has a few small caveats, it is a clean solution, if you are looking for something in this direction. We now only have to wait for Firefox to support `:has`...