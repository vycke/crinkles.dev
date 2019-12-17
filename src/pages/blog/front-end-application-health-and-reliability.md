---
templateKey: blog-post
title: Front-end application health and reliability
pinned: true
date: 2019-12-10T00:00:00.000Z
featuredImage: request-times.png
description: >-
  Modern front-end applications are becoming bug and have the responsibility to perform a lot of logic for our users. Keeping our applications healthy and reliable is complex, and difficult to achieve.
tags:
  - frontend
  - health
  - monitoring
---

Our smartphones and computers are become powerful every year. We see the increase in power back on the web. Our front-end applications are becoming bigger and more complex. Previously, I have written about a [scalable architecture](/blog/scalable-front-end-architecture/) for front-end applications. A scalable architecture is a good first step towards healthy, reliable and maintainable applications. But we, as engineers, are responsible to maintain a single code-base that runs many different environments. How can we know what is actually going on inside our applications when others are using it? As all our applications are used by people, they are only as reliable as our users perceive them to be.

## Front-end versus back-end

Countless times I have had bugs from users that could not be reproduced. It was always a struggle to get a clear picture of what actually happened when the user encountered the bug. A lot of errors are captured and logged in our back-end systems. Big dashboards make it possible for administrators to find root causes of these errors. Most of the times. Sometimes errors or issues (e.g. lagging of requests) only occur in the front-end. They never hit our system, and therefore our logs. Why is that?

![Client-side versus server-side](/img/client-vs-server.png 'Client-side versus server-side')

When a user navigates towards our application, a request is made towards the server for a specific page. The server sends back the requested page. This is done by sending over `HTML`, `CSS` and `JavaScript` files. Together they show the application and handle all interactions. That is right, the front-end application is not running on the server. All its code is send over to the user's machine, and is running on that machine. This means that all errors and issues found in the front-end are on the wrong side of the network.

A few years ago, this would be a fine situation. Most of the logic was running on the server anyways. However, with the rise of the modern front-end frameworks this changed. Now we are creating big single-page applications running a lot of our logic on a server less architecture. And the worse part of it? These applications are running on countless different environments. If we want to keep our front-end applications healthy and reliable, we have to become more mature. We have to start monitoring our front-end as well. In the end, it's all about the users' perception.

## Quality assurance by tracking front-end errors

The easiest example in complex front-end applications is around fetching data. Although these are not always front-end only errors, they are crucial for our users. It might be that we are fetching data from sources of which we have no control (e.g. external APIs). So let's look at a fetch example.

```js
try {
  const response = await fetch(...);
} catch (e) {
  console.log(e); // returns the Error object
}
```

In this example, we print the error when it is thrown by the. `fetch` function. You would expect this to happen in various cases, such as a `400` response status (i.e. bad request). However, the `fetch` function does not throw an error. Even though our call went wrong, the result is still put in the `response`, as can be found in its [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). At first glance, this looks nice, as we don't have to worry about error handling. However, this would also happen when our server is down. How can we provide our user with the correct message here? How can we measure how often this is happening?

We need to throw the error ourselves. We can do this by looking at the `response.status`. Whenever it is not equal to `200`, we know something went wrong and we can throw an `Error`. A default JavaScript error is very limited in information though. Would it not be nice to know what status and message was returned? We can solve this by creating our own custom errors. Below you see an example of a custom error that enables you to store the status code.

```js
// A custom error class which allows us to store the status code
// and a type of the error
export class HttpError extends Error {
  // You have to extend Error, set the __proto__ to Error, and use
  // Object.setPrototypeOf in order to have a proper custom error type in JS.
  // Because JS/TS are dumb sometimes, and all three are needed to make this
  // work in all browsers.
  __proto__ = Error;
  public status;

  constructor(message, status) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
```

Applying this custom error in our example would look something like the snippet below.

```js
try {
  const response = await fetch(...);
  if (response.status !== 200)
    throw new HttpError(response.statusText, response.status);
} catch (e) {
	console.log(e.status); // returns response.status
}
```

With custom errors we create more context of what actually went wrong. Now we are enabled to react to the errors that occur in your application. We can provide good experience around our errors. We can enable them to take actions (e.g. redirect to a different page) or let them know that it was us, not them.

But what if there is a pattern in errors seen by our users? Their perception around the reliability of our entire system changes. We have to find common patterns that impact the experience of our users, and solve them. Not only is this important for applications running in productions, but also during the initial development. Especially in the latter, errors often occurs. This is only possible if we start logging our errors in to a common directory (e.g. a log server).

```js
try {
  const response = await fetch(...);
  if (response.status !== 200)
    throw new HttpError(response.statusText, response.status);
} catch (e) {
	// We now send a custom error with additional information to
	// a tracker that logs all errors
	tracker.send(e);
}
```

With common sense we can capture errors in critical places. With custom errors, we can provide additional context of what type of error the user experienced. But it is almost impossible to capture all errors. Or is it? As our code is running in the browser of the client, we can use the APIs of the browser. The `window` object allows us to add listeners to particular events. Including errors and unhandled `Promise` rejections. This allows us to capture any error happening in our front-end applications. A great example are `TypeErrors`. Do use it with a bit of caution though. Errors thrown from outside your application are also caught (e.g. errors from browser extensions).

```js
window.addEventListener('error', function(event) {});
window.addEventListener('unhandledrejection', function(event) {});
```

## Going 'Hansel and Gretel'-style

Catching errors is the first step into increasing the health and reliability of your front-end applications. But we still miss a crucial part. Context. As a front-end developer we want to know what a user did before the error is thrown. At least I want to know that. Context is crucial to fully understand what happened in the system. On which page did the error happen? Which page did the user visit right before the error? Many different types of 'breadcrumbs' in the system can help us understand what is happening:

- Page changes;
- Start of a request to our own system or external services;
- Incoming responses;
- Start/finish of web and service workers.

When maintaining a list of breadcrumbs we create the possibility to provide context when we catch errors. We can simply add the latests breadcrumbs to our error. This allows us to see the last actions done by the user and the system. This enables us to do a good analysis of what actually went wrong in our front-end. In one project, I found that a particular request was executed twice, of which one would always fail. The user would not see it, but it did impact the performance slightly. The breadcrumbs provided the insights for this analysis.

> I found that a particular request was executed twice, of which one would always fail. The breadcrumbs provided the insights for this analysis.

## Health and reliability in front-end

When leaving breadcrumbs in your application, it provides so much more than context to errors. In enables you to analyze critical parts in your application. This can be done for a single users, but also for all users aggregated. The correct breadcrumbs can provide so much:

- Show which pages are used the most;
- Peak moments based on page visits;
- Show which requests are performed the most;
- The average response time of requests;
- Peak moments based on response time.

And many more examples are there. Especially the latter two can provide good insights into how users perceive your application. Measuring storing this type of information would look something like the snippet below.

```js
const start = performance.now();
tracker.crumb('request', { name: 'request name' });
const response = await fetch(...);
tracker.crumb('response', {
  name: 'request name',
  time: performance.now() - start
});
```

In this example we create two breadcrumbs, one for the start of the request and one for the response. Why both you might wonder? Because when an error is caught, it might be interesting to see the different events of incoming and outgoing information. By attaching the request name and the response time using `performance.now()` you gain a lot of information. In the graph below, you can look at the number of outgoing requests with a small time period (blue), and compare it the the average response time (green).

![An overview of response times and the amount of requests](/img/request-times.png 'An overview of response times and the amount of requests')

By combining different types of breadcrumbs, you can get a clear picture of how your application is used. Look for patterns over time or look at totals (e.g. top 5 pages). You should even look at averages, like the top 5 requests with the longest average response time. This gives you insights in how to improve your application. It becomes more healthy and reliable for your users.

## Introducing: vitamins

- Blunt self commercial

[Vitamins dashboard](https://kevtiq-vitamins.netlify.com/)

## Conclusion

We have to start looking at front-end applications in a more mature way. They are doing more and more for our users. In the end, it is inevitable to have errors in your application. But, we can track them and improve the experience of the user greatly. By also investigating how the application is used, we can pinpoint where we need to improve it. We do this for our users, so we should look at performance, reliability and health from their perspective as well.
