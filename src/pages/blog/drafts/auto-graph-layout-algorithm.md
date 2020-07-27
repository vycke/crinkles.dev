---
templateKey: blog-post
title: Creating an auto-layout algorithm for graphs
date: 2020-07-17T00:00:00.000Z
draft: true
description: >-
  Something something
category: engineering
---

In the past year, the most exciting problem I had to solve was creating a workflow editor. There are many interesting user interactions and existing solutions. Great UI libraries exist that can get you a long way. There is one problem: the auto layout formatting, if existing did not play nice with the back-end. All UI libraries require layout coordinates to be stored, which was not possible. What we need it an algorithm that converts nodes and edges, into a layout mapping.

::: aside info-box
A graph is a set of nodes that are connected by edges. In a directed graph, the edges have a direction associated to them.
:::

## Finding a solution

We need an algorithm than determines the layout of a graph. For the user, you want a readable graph. This means that the number of edges crossing each other, is reduced. Just look at the small example below. With complex graphs, this becomes a challenge. Our solution needs to be able to create a layout from scratch, but also rearrange an existing layout.

![On the left a graph with crossing edges, while on the right the same graph without crossing edges](/img/graph-example-1.png)

After some research I stumbled on a heuristic from [GraphViz](https://www.graphviz.org/Documentation/TSE93.pdf) that is used in many different software products. In the end, I choose for a trimmed version to reduce its complexity and required computational power. The heuristic follows five steps.

1. Rank all nodes of the graph.
2. Determine the initial order of the nodes in each rank
3. Determine the initial layout score for the graph based on the ordered ranks
4. Optimization heuristic
5. Position each node inside the UI library

::: aside info-box
A heuristic is a practical problem solving approach that is not guaranteed to be optimal, perfect or rational. It is sufficient to a (intermediate) goal.
:::

## Ranking all nodes

The first step is to rank all nodes in the graphs. The rank of a node is equal to its quickest occurrence in the graph. The root node (or nodes) get _rank 0_. All nodes you can access from the root node get _rank 1_ etc. This means that nodes that could be _rank 1 or 2_, are always placed in _rank 1_. You can see this for the _nodes 2 and 3_ in the example below.

![Visualization how ranking is working](/img/graph-example-2.png)

To achieve this ranking, you need a [breadth-first search algorithm](https://en.wikipedia.org/wiki/Breadth-first_search). This algorithm slices the directed graph based on the distance of a node from the root. Exactly what we need. An example implementation is displayed below.

::: aside info-box
A recursive function is a function that calls itself during execution. This makes it ideal if you don't know how many times the function is required. A stop condition is crucial for its execution.
:::

```js
function rank(nodes, edges, ranking = [], visited = {}) {
  if (nodes.length === 0) return ranking;

  ranking[ranking.length] = nodes;
  nodes.forEach((node) => (visited[node] = true));

  // get the adjacent nodes that are not yet visited
  const children = edges
    .filter((e) => nodes.includes(e.source) && visited[e.target])
    .map((e) => e.target);

  rank([...new Set(children)], edges, ranking, visited);
}
```

## Initial node order

With all ranks known, we can determine the initial order in each of the ranks. Nodes from the longest paths in the graph are placed at the top of the rank. This does require that we need to know all possible paths in the graph. This is where we need a [depth-first search algorithm](https://en.wikipedia.org/wiki/Depth-first_search). With all the paths known, we can create the correct initial order of each rank. We iterate over all paths and rank iteration, and create a new and ordered rank.

```js
function getPaths(root, edges, current = [], paths = []) {
  if (!root) current.push(root);
  const children = edges.filter((e) => e.source === root);
  // only complete paths are pushed into the array
  if (children.length === 0) paths.push(current);
  children.map((c) => getPaths(c.target, edges, [...current], paths));
  return paths.sort();
}
```

```js
function orderedRank(edges, paths, ranking) {
  const visited = {};
  const initial = [];

  paths.forEach((path) => {
    ranking.forEach((rank, index) => {
      const nodes = path.filter((n) => rank.includes(n) && !visited[n]);
      nodes.forEach((n) => (visited[n] = true));
      initial[index] = [...(initial[index] || []), ...nodes];
    });
  });

  return initial;
}
```

The previous graph example already shows a graph with the correct initial order. But, below you see _node 4 and 5_ highlighted. Both are in the same rank. _Node 4_ is placed at the top, because it is part of the longest path, while _node 5_ is not.

![Highlight of an issue based on the initial order](/img/graph-example-3.png)

## Scoring the graph

After determining the starting point, we need to know the potential optimization we can achieve in the layout. A graph is readable at the moment there are no crossing edges. So the score of the graph is the amount of crossing edges it has. There are two types of crossing edges: crossing between two ranks, and crossing within a rank (also known as self-crossing). Lets add an edge between _node 2_ and a new _node 9_ within rank two. Now the below graph highlights the two different types of crossing edges.

![Highlight crossings and self crossings](/img/graph-example-4.png)

Determining the self-crossing score is the easiest. Within each rank you determine if there are any edges that have a distance of two or more.

```js
function selfCross(rank, rankEdges) {
  return rankEdges
    .map((e) => rank.indexOf(e.source) - rank.indexOf(e.target))
    .filter((e) => Math.abs(e) > 1).length;
}
```

Next to self-crossings, you need to determine the amount of crossing edges between two ranks. For each edge, we only require the index in the rank of the source and target. Every time we find a combination of edges that have crossing indices, we know they are crossing.

```js
function cross(rank, prevRank, crossRankEdges) {
  let num = 0;
  const _edges = crossRankEdges.map((e) => ({
    s: prevRank.indexOf(e.source) || rank.indexOf(e.source),
    t: rank.indexOf(e.target) || prevRank.indexOf(e.target),
  }));

  // Determine the number of cross edges between the ranks
  _edges.forEach((i) => {
    _edges.forEach((j) => {
      if (i.s > j.s && i.t < j.t) num += 1;
    });
  });

  return num;
}
```

The last step is combining this for the entire graph, and determine the layout score. First we need to add the amount of self-crossings of all the ranks. In addition, we need to evaluate all the rank combinations for the amount of crossings. You could only evaluate two consecutive ranks, but edges can exist across multiple levels of ranks.

```js
function score(ranking, edges) {
  let num = 0;
  for (let i = 0; i < ranking.length; i++) {
    num += selfCross(ranking[i], edges);
    for (let j = i + 1; j < ranking.length; j++)
      if (j > i) num += cross(ranking[j], ranking[i], edges);
  }

  return num;
}
```

Now we have the layout score of the graph. As it counts the amount of crossings, a lower score is a better score. When we have a score of `0`, the layout is optimal.

## Optimizing the result

But, in most cases the initial graph does not have layout score of `0`, but a higher score. The layout can be optimized. Note: the lower the score, t

1. Determine graph score
2. Determine the rank score (`oldScore`) for the first rank
3. Swap two successive nodes in a rank, and determine a new rank score (`newScore`)
4. If `newScore > oldScore` and there are nodes left in the rank, swap the nodes back and go back to Step 3. Else, leave the nodes swapped.
5. If there are ranks left, go back to Step 2 for the next rank.
6. Determine the new graph score. If the new score is better, go back to Step 1.

![Highlight of the swaps in the heuristic](/img/graph-example-5.png)

My implementation checks for each rank the number of crossing with the previous ranks. Why? In the displayed example, if you would look backwards and forwards, or at the total graph, it would not become better after the first switch, while in reality, it becomes better by 2 switches.

## positioning

- This is where the power is coming from in adjustability
- Nodes are ranked nearest to the root as possible.
- Grid layout
- You could improve for instance by allowing nodes to be placed in different ranks (e.g. nearest to end, or average rank on all paths).

> create a grid example on where to you could position the nodes

## Result & conclusion

- Only works with acyclic graphs (meaning no loops allowed)
- Optimization possible (e.g. limit amount of step 3)
- Tweak in result (e.g. change weight of crossings vs self-crossings)
- Its not perfect, its a heuristic
- positioning nodes into different rank to position them better
-
