---
title: The importance of shipping source code as a library maintainer
date: 2024-07-17
tags:
  - engineering
  - meta
layout: post
description: >-
  When library maintainers ship there source code can help application builders in debugging critical and weird issues.
---

A week or two ago a colleague of mine hit a weird issue that showed me the importance of shipping source code as a library maintainer. This idea already came to light around a year ago when Svelte(Kit) [ditched TypeScript](https://devclass.com/2023/05/11/typescript-is-not-worth-it-for-developing-libraries-says-svelte-author-as-team-switches-to-javascript-and-jsdoc/ ). In general, most applications will have a build step, so why should libraries also have one? And Rich Harris was right.

## So what happened?
In a large(-ish) mono-repository two out of four front-end applications were migrated from NextJS to plain React (for reasons). Everything went well after the first application was migrated. But things went weird after the second one was migrated. In the local dev-build all things were good. But after a production build, a third application broke! Note, that the output broke, not the build step itself. 

My first hunch, like with anybody else, is that something was changed in the shared code. It is a mono-repository, so there is shared code. Well, the assumption that there is shared code was correct. But nothing was changed here. Not a single line of code.

The next suspect would be changes in the dependencies, either in the application’s own `package.json` or somewhere in the shared code. Some small changes were made, but only to the linter setup. Nothing that could impact the build output. 

We were about to hit a dead-end...

## Digging deeper
Luckily my colleague turned on the source maps on the production build output. Now we can see what file + line throwing the errors. The error pointed towards a file responsible for the single-page application navigation. Specifically, it was pointing towards a `useLocation` from the `react-router` library. But nothing had changed in that file, or the application, so why would it break there? 

So we picked the next file in the error stack-trace. This time it was pointing to the source code of `react-router`. In particular, it was pointing toward the code below. In particular, the error message “*useLocation() may be used only in the context of a \<Router> component.*”. But nothing changed to the code, so again the question was raised: why did it break now?

```js
// TODO: This error is probably because they somehow 
// have 2 versions of the router loaded. We can help 
// them understand how to avoid that.
function useLocation() {
	!useInRouterContext() ? 
		process.env.NODE_ENV !== "production" ?
	    UNSAFE_invariant(false, "useLocation() may be used only in the context of a <Router> component.") : 
	      UNSAFE_invariant(false) : 
	      void 0;
  return React.useContext(LocationContext).location;
}
```

## What was the actual issue? 

Then we noticed the comment above this function: “*This error is probably because they somehow have 2 versions of the router loaded*”. So we went looking for the version numbers of `react-router`. We noticed 3 out of 4 applications used version number `6.22.0`. But the last application uses `^6.23.1`. This was one of the applications migrated from NextJS to React, after which our application broke. The application that broke uses `6.22.0` in its dependencies. 

Looking back at the source file from `react-router` in the stack trace, we noticed that this was the cause of the issue. At the top of the file, it reads `React-Router 6.24.0` in the comments. So for some reason, an application with a fixed dependency on version `6.22.0` was imported from a `6.24.0` version.

Our mono-repository setup messed this up. In a production build it groups all the `node_modules` of all packages/applications in the repository.  This resulted in two versions of `react-router` being present there, and shipped in the shared dependencies for all applications. 

## Wrapping up
The fix was quick, ensuring all applications use the same version of `react-router`. But thank God for the maintainers of `react-router` to ship it with comments, even the version number at the top. 