---
title: Authentication token management
date: 2021-11-17T00:00:00.000Z
description: >-
  Complex client-side applications require sophisticated solutions around authentication management and background refreshing.
---

In several large projects (React-based SPA applications) managing authentication tokens is a challenge. These solutions implement an OAuth flow using access and refresh tokens. Many of these types of applications live in an enterprise or business setting. This means users are often logged in to the application a lot longer than the access token is valid. The access token needs to be refreshed in the background.

But that is not the only issue. Many pages need more than one `GET` request when it is loaded. This adds an extra dimension to the issue. A dashboard where each card requires different data is a good example. Many solutions cannot handle such a situation and result in many refresh attempts that happen at the same time.

## Proposed solution

Solving this issue in complex applications can be done in several ways. A brute-force way is to refresh the access token on each outgoing request, or page navigation. But this means that every user action requires at least one more network request. This would decrease the performance of the application, and thus the user experience.

A second solution would refresh when you hit a `401` HTTP error (unauthorized) from the server. This would create a hit on user experience only once within the expiration timeframe. But this hit can be significant. First, we have to do a request to the server. We get back a `401`. Now we have to refresh the tokens and execute the requests again. Three requests instead of one.

My proposed solution is to proactively refresh the token. We know when it expires. Before each request, we can check if the token is expired. When this happens, we can send refresh the token before we execute the original request. The user experience is less decreased compared to the previous solution.

![Refresh flow](/img/client-refresh.png)

But this solution still has an issue. It cannot handle many requests at the same time that need refreshing. By introducing a `queue` and an extra check, this can be solved. All requests that need to be sent out while the application is refreshing are put in the queue. Once refreshing is complete, the queue is emptied.

## The code

The core of this solution is replacing the standard fetch requests, with a `fetchOrRefresh` request. An example implementation can be seen in the code block below.

```js
const _queue = queue();
const cache = { refreshing: false, expiresOn: '2021-11-01T00:00:00.000Z' };

export default async function fetchOrRefresh(...args) {
	// token is expired, queue request
	if (new Date() > new Date(cache.expiresOn)) {
		_queue.push(async () => await fetchOrRefresh(...args));
		// If refreshing is not start, refresh
		if (!cache.refreshing) {
			cache.refreshing = true;
			await refresh();
			cache.refreshing = false;
			_queue.start();
		}
		return;
	}
	return await fetch(...args);
}
```

There are some blanks in this code example that need to be filled in. It relies on a queue that you can programmatically empty. The example also uses a simple object to store information, but a central application state that can be used is a better solution. Lastly, the refresh function itself is not filled in.

When filling in these blanks for your project, you have a simple solution that can handle refreshing of tokens in a stable way. It can be as middleware for libraries as `axis` and `redux` with minor adjustments.

## Wrapping up

Large applications used in a business setting often see long user sessions. This requires us to ensure authentication tokens are refreshed in the background. But, complex applications havmanyle requests happening at the same time. Many solutions cannot handle this and result in many refresh attempts. The flow and code example introduced in this post can help you overcome these issues without impacting the user experience.
