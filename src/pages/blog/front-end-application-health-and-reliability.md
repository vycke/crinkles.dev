---
templateKey: blog-post
title: Front-end application health and reliability
pinned: true
date: 2019-12-10T00:00:00.000Z
featuredImage: health-header.png
description: >-
  Modern front-end frameworks and libraries make it easy to create reusable UI components. But, in many projects over the years I have found that making reusable components is often not enough. We need a scalable front-end architecture.
tags:
  - frontend
  - health
  - monitoring
---

Some big introduction about the topic, with a primary focus on:

- Description on mature architecture with a link to the previous article;
- How error tracking in a front-end applications helps in quality control, because errors will always be there due to complex environments in frontend (operating systems, browsers, versions);
- How many times did we not hear, "it is not working, or it is a bug", but we cannot reproduce because we dont know what the user did;
- Front-end is user related, so the health and reliability of your application is heavily linked to what the user also perceives;

## Quality assurance by tracking errors

- Capturing programming errors, even on window level
- Throwing correct errors and custom errors at correct places that can be logged, to ensure proper monitoring
- Link to aggregating from different users to analyse common errors that can be resolved
- Link to creating context through breadcrumbs that can be added to errors
- Errors that occur, are also linked to different environments, browsers, etc. By capturing them all, you can improve the quality by focusing more on those errors that matter and really impact different users.
- Reducing errors can reduce pressure on the backend (less API calls) and clean their logs by having less faulty logs, which is good for microservice

## Going 'Hansel and Gretel'-style

- Why breadcrumbs
- base types of breadcrumbs (requests, responses, navigations, pubsub optionally)
- show image of initial dashboard to show navigations and requests

## Health and reliability in front-end

- Also link with bigger backend systems
- User perception
- Quality assurance of the FE by removing for instance double requests due to rerenders
- Health is impacted by those parts that are used a lot and not performing as they should be

## Vitamins package and dashboard

- Blunt self commercial

## Conclusion

something something something, more something.
