---
title: An ode to the CSS owl selector
date: 2022-03-05T00:00:00.000Z
description: >-
  One off the most beautiful CSS selectors is the Lobotomized Owl Selector of Heydon Pickering
---

![The owl selector](/img/owl-selector.png 'The owl selector')

:::
In the beginning of 2022 I've updated this article with the section 'Owls v.s. flex-boxes'.
:::

It is not a secret that I love CSS. A few years ago I fell in love with a very simple, but powerful CSS selector. Back then I was expanding my CSS to the next level. I knew about the specificity and the cascade. I had no issue using CSS from scratch or with a framework. But I came across [Heydon Pickering](https://twitter.com/heydonworks) and later his ['lobotomized owl selector'](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/). This selector blew my mind. At the [CSS Day](https://cssday.nl/2019), he even showed another beauty, called the ['flexbox holy Albatros'](http://www.heydonworks.com/article/the-flexbox-holy-albatross) (you can watch it [here](https://www.youtube.com/watch?v=RUyNJaoJH_k)). These types of solutions showed me that solving solutions in CSS can be easy or elegant. So, Heydon, this one is (partly) for you.


## The lobotomized owl selector

Heydon explains the selector better in his [article](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) than I can. But I will provide a quick summary. The selector is, as mentioned, very simple: `* + *`. The `*` is the universal selector in CSS, it applies to all elements in the DOM. The `+` is the real hero of this piece of CSS code. It has the beautiful name of ['adjacent sibling combinator'](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator). It applies the defined styles to the _second_ element if immediately follows the _first_ element. With our selector, it applies styles to all non-first elements on the same level in de DOM. Unless other rules have a higher [specificity](https://css-tricks.com/specifics-on-css-specificity/).

```css
* + * {
	...;
}
```

So why is this selector so powerful? I found the selector when searching for a spacing solution for a blogging website. I wanted to create enough space between paragraphs, but also to their parent element. Many solutions exist to solve this. You can give every element a `margin-bottom`. This has a side effect on the last element. To solve this, override the styles with the `:last-of-type` pseudo-selector. Another solution is to add both a `padding-top` and `padding-bottom` to each paragraph. This can create unwanted side-effects with paddings of the parent element. More in-depth description of this specific problem and solution can be found on [Every Layout](https://every-layout.dev/layouts/stack/), which is a brilliant website.

The `* + *` seems to be an elegant solution when using `margin-top`. The `margin-top` is only applied between the elements. But you can also have images using `img` or `svg` elements which have different spacing. Then try something like `p + p`. You can make this structure as specific as you want, ensuring a simple and elegant solution. But you know what makes it powerful? In this setup, it works on nested elements!

![The owl selector applied](/img/owl-layout.png 'The owl selector applied')

As you can see on the left, the `margin-top` rule applies to every element in the list. On the right, the second element gets not only the styling rule, but it also has two child elements. Of those child elements, the second one also gets the margin.

:::
These days most browsers also support logical operators, that are more considerate towards different users (e.g. left-to-right readers). Instead of using `margin-top`, you can use `margin-block-start` to be more inclusive. 
:::

## Algorithms in UI

How complex is it for the browser to transform my CSS commands into something shown on the screen? The owl selector is a wonderful example showing how complex parsing CSS selectors can be. It shows the real power of CSS. Why? Because it works nested. In any programming language, this can become complex fast. The nested nature of the selector can is comparable to [recursion](<https://en.wikipedia.org/wiki/Recursion_(computer_science)>). Before diving into the recursive solution, let's look at the pseudo-code for a flat list of elements.

```js
function owl(list, apply) {
	for (i = 1; i < list.length; i++) {
		apply(list[i]);
	}
}
```

Our function gets a list of elements and an `apply` function as input. As you can see, we start at `1`. Not because arrays start at 1 (they do not), but because our CSS selector skips the first element by default. The function works like `* + *` on a non-nested list. The callback `apply` is used to any element in the list. But what if we want to have something like `p + p` or even `img + p`? We have to add checks to ensure the adjacent elements follow the definition.

```js
function isFirst(item) { ... }
function isSecond(item) { ... }

function owl(list, apply) {
  for (i = 1; i < list.length; i++) {
    if (isFirst(list[i]) && isSecond(list[i - 1])) {
      apply(list[i]);
    }
  }
}
```

With the function, we can work with lists of varying types of elements and check if adjacent elements fit our criteria. We are only lacking the nesting capabilities of our CSS selector. We could check if our element has any children. If so, we call the `owl` function again. Yet, in HTML any element can have children. This means that even our elements complying with our adjacent rule can have children. So instead of calling the `owl` function if our element has children, we first have to call the `apply` function. So it can happen that for a single element, both `apply` and `owl` are called.

```js
function isFirst(item) { ... }
function isSecond(item) { ... }
function hasChildren(item) { ... }

function owl(list, apply) {
  for (i = 1; i < list.length; i++) {
    if (isFirst(list[i]) && isSecond(list[i - 1])) {
      apply(list[i]);
    }
    if (hasChildren(list[i])) {
      owl(list[i], apply);
    }
  }
}
```

You now know how to create something like our owl selector. It exists of a recursive function with some extra functions to check the conditions. The above pseudo-code can become more complex if our CSS becomes more complex. Try to combine it with different pseudo-selectors, or change its specificity. By doing so, you will see how powerful CSS has become.

## Owls v.s. flex-boxes

When you don't care for the recursive power of the owl selector, you might wonder: why not use flex-boxes with `flex-gap`. Like setting a `flex-gap` on the parent, the owl-selector sets the default gap between elements. The owl-selector makes things just a lot more adaptable. The owl-selector is used on this page to put a gap between elements of the article you are reading. But as you can see, the gap is not equal between all elements. Between a header and paragraph, there is a much smaller gap!

```css
.post h2 + p {
  margin-top: 0;
} 
```

By defining rules with a higher specificity compared to `* + *`, we can overwrite the default layout behavior we are seeing. The example above shows how the gap between a header and paragraph can be reduced. When trying to achieve the same effect with `flex-gap`, you have start working with (negative) margins on elements. You are now using two competing ways to determine relative positioning. This creates less stable code, more layout issues, and makes debugging layout issues a lot more difficult. 

## Wrapping up

Almost everybody can apply simple CSS rules or styling rules. Solving more complex (or even easy) problems requires more in-depth knowledge. Knowledge of computer science concepts becomes important, as they are the result of several complex CSS rules. A simple CSS selector can mean that you apply a recursive function. The mental model of the result remains the same. You are applying algorithms to create a UI. This is exactly the reason I love CSS. Something simple can become a powerful UI manipulation tool.