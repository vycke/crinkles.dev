---
templateKey: blog-post
title: An agile design and develop process
pinned: true
date: 2019-11-01T00:00:00.000Z
featuredImage: agile-design-develop-process.png
description: >-
  Something something
tags:
  - process
  - design
  - develop
  - agile
---

Introduction to previous post, which was really missing some stuff. Make it clear that this is the internal process for a team. For instance, review is an internal review, not a review by stakeholders. This makes it transparant where a team has its strengths and weaknesses.

![The agile design and develop process](/img/agile-design-develop-process.png 'The agile design and develop process')

## The process

### Research - ...

Input - goal - output

- Input is a request for a new feature, or a report of a bug in an existing feature;
- Goal is to get out all functional requirements for the report/request, based in the input and existing models/designs/features;
- Output is a set of design tasks to be picked up by the team;

Additional notes:

- Research can also be conducted on existing features and designs. For instance, going back a previous models (e.g. information architecture) can be of great value in the next design phase, as they shape functional requirements;
- Stakeholder (e.g. users) involvement is important here, as their input shape the functional requirements;
- UX (the research part) is very important here;
- A POC can be part of gathering more information & feedback;

### Design - ,,,

Input - goal - output - feedback

- Input is a set of design tasks shaped by the functional requirements from the research phase;
- Goal is to convert all information into various models, used to guide the creation of implementation tasks;
- Output are implementation tasks;
- Feedback are requests for more information to create all correct models;

Additional notes:

- Not only UI designs, data models, sequence diagrams, architecture diagram additions, user-flows, etc. are all part of the design process;
- This is a team exercise, otherwise you will get back feedback from the development phase;
- In this phase you ask for approval on the designs, not directly feedback on missing stuff. If more feedback from stakeholders is required, it is actually a research question (this shows the tightly coupling between research and design from one angle);
- It can be that implementation tasks are broken down into different user stories that can be picked up in different sprints;

### Develop - ...

Input - goal - output - feedback

- Input are implementation tasks and models showing the entire system & UI design;
- Goal is to implement the request/report according to the requirements;
- Output is a shippable feature/fix;
- Feedback are questions about the implementation, or issues around how feasible the intended implementation is (e.g. a system design change is requested);

### Review - ...

Input - goal - output - feedback

- Input is an implented feature/fix;
- Goal is to review with the team if the implementation really is according to the functional requirements and nothing is missing (i.e. internal testing);
- Output is the actual feature/fix with communication towards stakeholders;
- Feedback can be inconsistencies or missing implementation;

## Relation to agile

- A phase does not have to be completely finished before you start start with the next phase, you can start with created tasks already;
- Use a moving window for development phases, to ensure the team can work on two 'feature-phases';
- We can properly monitor and measure transitions in this model, like a state diagram;
- You can measure which feedback cycle is used the most, this is input for team improvement in specific phases;
- Makes it possible to measure import of specific phases on original estimates;
- You can visualise easily on a higher level the status of features, getting a better grip of what the focus is;
- Tasks within a feature can also be visualised in its status;
- Reports are always feedback for existing features, so you can measure how many times the actual output of what you ship was not correct, creating a full measurement circle;
- Good way to map dependencies within a team and external dependencies;
- One feature can be multiple user stories;
- Cannot be put in one sprint;
- It is agile because moving tasks ahead and starting with them before the previous phase is completely finished ensures (internal) feedback is received earlier;
- Develop & Review should be in one sprint (for a user story, not the entire feature), but research & design should be done in sprint(s) preceeding the implementation sprint(s);
- Time is required in a sprint to do this (not only by a UX designer), so 2 weeks sprints are not ideal, at least 3 weeks sprints;

## Examples
