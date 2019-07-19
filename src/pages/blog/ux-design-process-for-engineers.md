---
templateKey: blog-post
title: The UX design process for engineers
date: 2019-07-05T00:00:00.000Z
description: >-
  As a software engineer, it sometimes can be difficult to understand what UX designing is and where it fits in the process. Especially the difference between UX and UI can be difficult to understand. Some recent insights provided valuable information to visualize and explain the concept of UX.
tags:
  - UX
  - design
  - process
---

As a software engineer, it sometimes can be difficult to understand what UX designing is. Is it the same as UI design? What is the direct value for my product/project I am working on? And so on. Some of these questions are not only asked by engineers but can also be asked by stakeholders or management. Especially when it is absent in your current situation, it can become difficult to sell the value of UX design to others. You will have a better understanding of the UX design process and its relation to software engineering after reading this blog post. Also, I'll give you some information on how to check the 'UX maturity' in your project, team or organization.

## The UX design process

While visiting the [CSS Day](https://cssday.nl/2019) conference in Amsterdam this year, I got inspired by one part in the talk of [Steph Troeth](https://twitter.com/sniffles) (you can watch her talk [here](https://www.youtube.com/watch?v=bpVBwmW4dWk)). She had a spot on explanation and visualization about UX design. From an engineering point of view, I was missing a step though. So I took the liberty to adjust/expand her visualization. This was particularly helpful when I hosted a UX workshop (together with a designer) for a group of engineers.

The process starts with research, of which user input is very important. This user input can be quantitative (e.g. analytics-based) or qualitative (e.g. user interviews). In this phase, the designer is looking at the problem and the cause of the problem. A good example is examining the path a user takes before he or she makes a faulty decision.

![The UX design and engineering process](/img/design-process.png 'The UX design and engineering process')

After gathering enough quantitative and qualitative data, a UX designer starts modeling. He or she starts designing a solution for the found problem. The goal of this phase is to find a solution for the problem (e.g. ensure better decision-making by the user). I can imagine the first thing that will cross your mind is creating a UI design. But, many types of models exist that a UX designer can create to get more information out of users.

- UI designs / design system;
- Information architecture / functional map /screen flows;
- Context mapping;
- Customer journey map;

The outcome of the above modeling techniques is often verified with users and stakeholders by the designers. If the designed solution is verified, it can be handed over to an engineering team. At this point, the designers have converted a user problem into an engineering problem! It is up to the engineers to find a solution and for an implementation problem.

> Design solutions are engineering problems

An engineering team does not have to start after the solution of a UX designer is verified. Often it is even better if engineers are involved earlier in the process of the UX designer. They can provide valuable input in the technical feasibility of the designed solution. If something is more difficult to implement, a different solution for a problem can be found. The designer can verify a solution taking the technical limitations into account.

On the other hand, the engineering team can help to prototype a solution. Designers often use tools like digital and paper prototypes to gather feedback from users. Working proofs-of-concept, demos or prototypes might provide new insights coming from users when they are using it. A testing period with analytics build in might quantify certain assumptions made by the designs and/or engineers. It might be the case that a paper prototype was well-received, but the actual product hardly used. This feedback can be used to research the original problem again.

## Actually...

Yes, you are correct! This looks like a process that is used in engineering. Although you might not be aware of it, the cycle of 'research-design-develop' is often used. When faced with a complex engineering problem, you start gathering input and research the problem. When a UX design solution for a problem is found, an engineering problem is created and the engineering process kicks off.

After gathering enough initial information, you start the modeling process. It is a common picture for us all. Drawing a UML class diagram or an entity diagram that represents our envisioned data structure. This often becomes a group exercise amongst engineers at a whiteboard. This exercise is not different from modeling user input using one of the many other tools used by a UX designer.

As engineers, we can gather feedback on the design step from our colleague engineers. This feedback provides input for more research. After we implemented our solution, we can ask our UX designers but also our users to provide feedback if we actually solved the original problem.

## Incorporating UX in your project, team or company

At the same conference, this year, [CSS Day](https://cssday.nl/2019), [Jared Spool](https://twitter.com/jmspool) had a very strong remark about design with a team. Like with almost every aspect of team-work, you are as weak as your weakest link. However, when it comes to design, it goes beyond your own team. Everybody that can influence the design decisions is a link in the process.

> You are as weak as your weakest design influencer
> <cite>[Jared Spool](https://twitter.com/jmspool)</cite>

This sounds familiar to everybody. However, if you think about it, we underestimate it very often. Have you ever seen a design implementation of a stereotype back-end engineer or DevOps engineer? When you have front-end engineers in your team you would hardly ever let others implement a design of course. But this does not mean they cannot influence it. If you look back at the process, the engineering team can influence the designs by providing insights into technical feasibility, but also in the research phase. The engineering feedback should be given as a team, not by sole developers. So your backend and DevOps engineers become design influencers.

Jared Spool explained the position of UX design within a team or organization during his talk this year (you can watch it [here](https://www.youtube.com/watch?v=I0MC5Aa_mG4)). In his talk, he explains five different maturity levels of UX design within an organization. Also, he also describes what needs to happen to transition from one level to another. Let's take a closer look at the five levels.

![The UX design maturity levels in an organization](/img/design-maturity.png 'The UX design maturity levels in an organization')

1. **Dark ages**: there are no resources available for design;
2. **Spot UX design**: occasional UX design projects happen, either by freelancers or engineers within the organization;
3. **As a service**: dedicated UX design resources are hired and form a single team. They work on an 'as needed' basis for other project teams;
4. **Embedded**: one or more UX designers become dedicated members of a project team;
5. **Infused**: the non-designers in the team can make sound design decisions on their own, as they have fluent design skills of themselves.

An important milestone in this maturity model is getting to stage three, 'UX design as a service'. To get to this stage, executive management has to decide to start investing in UX design resources, for the first time. From a business perspective, getting to this strategic decision is a big step. It is important, however, to keep in mind that a team or organization is not on a fixed spot in the maturity model. Each design influencer and each team occupies its own place in the model. In the end, you are as weak as your weakest design influencer.

> Each design influencer and team occupies its own place in the maturity model
> <cite>[Jared Spool](https://twitter.com/jmspool)</cite>

## Honeywell vs. Nest

I am not going to explain all the steps and transitions in this model, You should watch the talk of Jared Spool instead. But Jared uses a striking example of what the competitive edge of having a high level of UX design maturity in your team or organization. Honeywell was your go-to supplier for thermostats, but they were not able to offer a real experience. They thought, after offering a model with many features, that thermostats could not be innovated anymore. But this was a business and engineering decision. How could Nest beat Honeywell? The Nest-team was at the last stage of the maturity model. They started with an experienced team that all had fluent design skills. This resulted in building a company that was sold within a few years for over three billion dollars.

## Conclusion

As a software engineer you have to wonder yourself, do you want to be on the Nest or Honeywell side of the coin? If you want to be the next Nest, do not underestimate the value of UX design. Find out where your team stands on the maturity scale, and see what you can do to let your team take the next step!
