// //this file walks me through how graph algorithms works in combination with firtdepth and breadth first traversal algorithms works

// function depthFirstLoop(graph, node) {
//   let arr = [node];
//   while (arr.length > 0) {
//     let currentElement = arr.pop();
//     console.log(currentElement);
//     for (let neighbor of graph[currentElement]) {
//       arr.push(neighbor);
//     }
//   }
// }

// function depthFirstRecursive(graph, node) {
//   console.log(node);
//   for (let neighbor of graph[node]) {
//     depthFirstRecursive(graph, neighbor);
//   }
// }
// function firstDepthRecursive(graph, node) {
//   console.log(node);
//   for (let key of graph[node]) {
//     firstDepthRecursive(graph, key);
//   }
// }
const graphs = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// function firstDepth(graph, node) {
//   const queue = [node];
//   while (queue.length > 0) {
//     const currElement = queue.shift();
//     console.log(currElement);
//     for (let neighbor of graph[currElement]) {
//       queue.push(neighbor);
//     }
//   }
// }
// firstDepth(graphs, "a");

// depthFirstRecursive(graphs, "a");

function checkingPath(graph, src, dest) {
  const queue = [src];
  while (queue.length > 0) {
    const curr = queue.shift();
    for (let neighbor of graph[curr]) {
      if (neighbor === dest) return true;
      queue.push(neighbor);
    }
  }
  return false;
}
//console.log(checkingPath(graphs, "f", "k"));
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["n", "k"],
  ["k", "l"],
  ["o", "n"],
];

// undirected graph
const graph = helperfn(edges);
const undirectedGraph = (edges, nodeA, nodeB, visited) => {
  if (visited.has(nodeA)) return false;
  visited.add(nodeA);
  if (nodeA === nodeB) return true;
  for (let neighbor of edges[nodeA]) {
    if (undirectedGraph(edges, neighbor, nodeB, visited)) return true;
  }
  return false;
};
function helperfn(edges) {
  let graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

console.log(undirectedGraph(graph, "j", "i", new Set()));
