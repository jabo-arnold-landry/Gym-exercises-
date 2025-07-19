//this file walks me through how graph algorithms works in combination with firtdepth and breadth first traversal algorithms works

function depthFirstLoop(graph, node) {
  let arr = [node];
  while (arr.length > 0) {
    let currentElement = arr.pop();
    console.log(currentElement);
    for (let neighbor of graph[currentElement]) {
      arr.push(neighbor);
    }
  }
}

function depthFirstRecursive(graph, node) {
  console.log(node);
  for (let neighbor of graph[node]) {
    depthFirstRecursive(graph, neighbor);
  }
}
function firstDepthRecursive(graph, node) {
  console.log(node);
  for (let key of graph[node]) {
    firstDepthRecursive(graph, key);
  }
}
const graphs = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: [],
  e: ["f"],
  f: [],
};

function firstDepth(graph, node) {
  const queue = [node];
  while (queue.length > 0) {
    const currElement = queue.shift();
    console.log(currElement);
    for (let neighbor of graph[currElement]) {
      queue.push(neighbor);
    }
  }
}
firstDepth(graphs, "a");

depthFirstRecursive(graphs, "a");
