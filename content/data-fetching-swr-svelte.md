---
title: SWR-like data fetching in Svelte
date: 2021-12-10T00:00:00.000Z
description: >-
  I am a big fan of the [SWR](https://swr.vercel.app/) package of Vercel. Let's see how to implement something similar in Svelte.
---

I am a big fan of the [SWR](https://swr.vercel.app/) package of Vercel when working with React. It handles a lot of complex implementation around data fetching and caching, reducing the amount of [state management](/writing/state-management) that needs to happen. To my knowledge, Svelte does not have a similar library. But all the tools we need are available to us. So why not create something similar?

## Our first attempt

In essence, SWR uses a global constant to store the cache. Each URL used for data fetching is a key in this cache. Every time we load a new page, we first check the cache to see if the data already exists. And every time we fetch data, we update the values in the cache. Now let's replicate this idea in Svelte using the `writable` store.

```js
import { writable } from 'svelte/store';

const cache = {};

export function swr(url) {
	const store = writable({ data: null, errors: null });
	if (cache.url) store.set({ data: cache.url, errors: null });

	async function fetch() {
		try {
			const response = await fetch(url);
			const data = await response.json();
			cache.url = data;
			store.update((s) => ({ ...s, data, errors: null }));
		} catch (errors) {
			store.update((s) => ({ ...s, errors, data: null }));
		}
	}

	fetch();
	return store;
}
```

On loading the `swr` function we check if the URL already exists in the cache. If so, we have a different starting position. Through the internal `fetch` function we retrieve the data and update the cache and internal store. The data from the internal storage can be accessed by all UI components using the `swr` function. But, this implementation has some serious flaws.

- It is not possible to refetch data.
- It does not allow for programmatic (re-)fetching of data.
- You cannot mutate values in the cache.
- When used several times in the same render, many of the same requests are happening.

By enhancing the implementation with state machines, we can expand we can these flaws.

## State machine for data-fetching

![State machine example 3](/img/state-machine-3.png)

Let's start with a scaled-down state machine around data fetching. The most important thing about this machine is the distinction between the `pending`, `success`, and `error` states. Those states tell us something about where we are with data fetching. Most state machine libraries allow adding a _context_ to a machine. This allows us to store the response or errors of request in the machine and combine it with the state it is in. In the below example we assume that we can update the context on entry of a state, based on _actions_. The above state machine can be implemented using the below state machine configuration.

```js
// ACTIONS
const successEntry = (_s, ctx, data) => assign({ ...ctx, data, errors: null });
const errorEntry = (_s, ctx, errors) => assign({ ...ctx, errors, data: null });
const pendingEntry = (_s, ctx) => assign({ ...ctx, errors: null });

// CONFIG
export const config = {
	init: { STARTED: 'pending' },
	pending: { FINISHED: 'success', FAILED: 'error', _entry: [pendingEntry] },
	success: { STARTED: 'pending', _entry: [successEntry] },
	error: { STARTED: 'pending', _entry: [errorEntry] }
};
```

:::
I am using the [fsm](https://github.com/crinklesio/fsm) package definitions for the state machine. Similar configurations can be created for XState or other libraries.
:::

## Enhancing the global cache

Introducing a state machine is not enough to solve all the identified flaws. To solve the last flow, the state machines need to live in the global cache. The machines need to live on this level, to allow many data fetching attempts to synchronize. A default Svelte store allows us to subscribe to changes. But, we do not want to subscribe to the entire store. Only to the key corresponding to the URL.

So we need a more sophisticated solution (as far as I know Svelte stores...). We need a solution that allows us:

- Add many listeners to a key of the cache, that provides us with the new value on changes.
- Allow us to unsubscribe when the data-fetching is not needed anymore, to avoid memory leaks.

With a global cache that upholds these criteria, we can solve all problems.

:::
In the rest of the article, I am using the `proxy` of my [pubbel](https://github.com/crinklesio/pubbel) library.
:::

## Combining it together

To benefit the state machine, it is important to not store the data in the cache, but the complete state machine. This allows us to use the current state of the machine when starting up the enhanced `swr` function in a UI component.

```js
import { fsm } from '@crinkles/fsm';
import { proxy } from '@crinkles/pubbel';
import { writable } from 'svelte/store';
import { config, context } from './fetchMachineConfig';

const cache = proxy({});

export function swr(url) {
	if (!cache[url]) cache[url] = fsm('init', config, context);

	function update(machine) {
		const { errors, data } = machine.context;
		set({ state: machine.current, data, errors });
	}

	function subscription() {
		cache.on(url, update);
		update(cache[url]);
		return () => cache.off(url, update);
	}

	const { subscribe, set } = writable({}, subscription);

	async function refetch() { ... }
	refetch();
	return { subscribe, fetch };
}
```

By returning the `refetch` function, we programmatically refresh the data in cache by fetching it again. This `refetch` function is where most of the magic happens. Up until now, it is the configuration and setup of the cache and internal store. Below is the code of the `refetch` function.

```js
async function refetch() {
	const _machine = cache[url];

	try {
		const success = _machine.send('STARTED');
		if (!success) return;
		cache[url] = _machine;
		const response = await fetch(url);
		const data = await response.json();
		_machine.send('FINISHED', data);
	} catch (e) {
		_machine.send('FAILED', e);
	} finally {
		cache[url] = _machine;
	}
}
```

It looks very like the previous implementation, right? But now we have a few transitions in the state machine. When invoking a transition, we get back a boolean to see if the intended transition was a `success`. If it was not a success, we know the machine was not in the correct state, and we should not proceed. Between, we have to update the cache with the new state machine. Remember, when the cache updates, the internal store updates as well due to the `subscription` we have created.

## Adding mutations and invalidation

The implementation we got so far does not completely remove all the issues we found in the beginning. We are still not able to mutate data in the cache through manual action. So let's first look at the upgraded state machine.

![State machine example 2](/img/state-machine-2.png)

We now have an `invalid` state. When data in cache gets updated by a user action, it is not aligned with the server data anymore. It has become invalid. This does need adding a `mutate` function that brings us to this state (when possible). We can even resync our cache data with the server, to ensure we are not in the `invalid` state for too long.

```js
export function swr(url) {
	function mutate(key, value, sync = false) {
		const _machine = cache[url];
		const success = _machine.send('MODIFIED', { key, value });
		if (success) cache[url] = _machine;
		if (success && sync) refetch();
	}

	if (cache[url].current !== 'invalid') refetch();
	return { subscribe, refetch, mutate };
}
```

Another way to go to the `invalid` state is automatic. We can say, for instance, after 1 minute, that our cache entry is invalid. Based on the state of the machine, we can determine if we need to fetch data when loading the `swr` on a page at all.

## Wrapping up

With this implementation, we have a data fetching mechanism supported by state machines with all types of bells and whistles. We can see in what state the fetching is, we avoid many requests, and we can invalidate cache. It gives us the ability to have a uniform and mutate implementation across our Svelte apps.

:::
As far as I know, this implementation will not work in SvelteKit, as the `cache` will not be shared between pages.
:::
