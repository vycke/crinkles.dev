---
title: Logic-based styling of user interfaces with CSS
date: 2021-04-20T00:00:00.000Z
description: >-
  testing...
---

> General introduction


Link to exceptions in CUBE CSS, but why it is part of 'blocks' in my opinion.

## Introduction to the HTML `data-` attribute

- Link to CUBE CSS and exceptions
- Why are they useful (compared to managing CSS classes through JS)
- Easy example: buttons

## Complex styling using the `data-` attribute

- Complex example: first row/column with different operators
- Short introduction about state machines in UIs
- Easy styling: adding a `data-state` attribute and use that for styling
- Complex: use multiple `data-` attributes to style the state of the UI (edges in calendar

```css
.myClass[data-state~='test'] {
}
```

## Conditional logic

- https://quantityqueries.com/
- Toast messages implementation example

## wrapping up

- Thats not all, also algorithms (owl selector link)