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
const graphs = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: [],
  e: ["f"],
  f: [],
};
depthFirstLoop(graphs, "a");
