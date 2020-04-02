---
templateKey: blog-post
title: Resilient front-end applications
pinned: true
draft: true
date: 2020-03-01T00:00:00.000Z
featuredImage: request-times.png
description: >-
  Keeping our applications healthy and reliable is complex, and difficult to achieve
tags:
  - resilience
  - reliability
  - logging
---

Our smartphones and computers are become powerful every year. We see the increase in power back on the web. Our front-end applications are becoming bigger and more complex. Previously, I have written about a [scalable architecture](/blog/scalable-front-end-architecture/) for front-end applications. A scalable architecture is a good first step towards a reliable and resilient applications. But we, as engineers, are responsible to maintain a single code-base that runs many different environments. How can we know what is going on within our applications when others are using it? And if we don't know what is happening on the inside, how ca we determine what needs to be improved?

## Client(s) vs. server

Errors are the most common candidates for improvement. We have all had it, those error reports from users that were impossible to reproduce. Even worse, the logs on the server show nothing that went wrong. How is this possible? Welle, not all errors occur on the server. Our front-end applications are becoming more powerful, and therefore execute a lot more logic that before. But, the front-end code is executed not on the server, but in the browser of the user. This means that front-end errors occur locally, and not on the server. This makes it always a struggle to get a clear picture of what happened, as we don't have access to the browser of the user.

![Client-side versus server-side](/img/client-vs-server.png 'Client-side versus server-side')

A few years ago, this would be a fine situation. Most of the logic was running on the server anyways. However, we are creating big single-page applications running a lot of our logic and sometimes even exist in a [serverless](https://serverless.com/) setup. And the worse part of it? These applications are running on countless different environments. If we want to keep our front-end applications healthy and reliable, we have to become more mature. We have to start monitoring our front-end in a similar way as we do with our server. In the end, it's all about the users' perception.

## Capturing and handling (front-end) errors

Many different errors can happen in the front-end. Some are coming from our server (e.g. a 400 - Bad Request). In this case, the error is also logged on the server level. But what happens if we have a '_cannot read property of undefined_' `JavaScript` error? Or when we perform a faulty GraphQL error? These errors never reach the server, but greatly impact the experience of our users. Some of these errors might even be triggered by the environment of the user, such as a missing [polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) for Internet Explorer. Capturing errors in front-end development can be achieved in various ways:

- Use a `try - catch` block around dedicated features (e.g. AJAX requests);
- Use a high level wrapper around your application that gives you control on what is presented to the user (e.g. [React Error Boundaries](https://reactjs.org/docs/error-boundaries.html));
- Capture all errors on `window` level using the code-snippet displayed below (although this also captures errors from browser extensions).

```js
window.addEventListener('error', function(event) {});
window.addEventListener('unhandledrejection', function(event) {});
```

But why should you capture and handle errors in the first place? The biggest reason is your user. You enable yourself to maintain a good user experience, even in the event of an error. You can provide a proper message, show it visually on the screen, or ensure only a small part of your application is not working.

But handling errors does not solve our issue around issues that cannot be reproduced. We need to log the errors as well.

- We can see what errors occur and how often
- We can prioritize the most critical errors
- we can reduce the load on the server by mitigating errors

> Why log them and what should we log? Environment (what?? OS, browser, page) + 'crumbs'

## Logging and monitoring of user interaction

- Page changes;
- Start of a request to our own system or external services;
- Incoming responses;
- Start/finish of web and service workers.

- increase debug capability during development

> I found that a particular request was executed twice, of which one would always fail. The breadcrumbs provided the insights for this analysis.

- Show which pages are used the most;
- Peak moments based on page visits;
- Show which requests are performed the most;
- The average response time of requests;
- Peak moments based on response time.

![An overview of response times and the amount of requests](/img/request-times.png 'An overview of response times and the amount of requests')

## Introducing vitamins?

## Conclusion

...
