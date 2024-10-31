function depthFirstSearch(graph, startVertex) {
  const visited = {};
  const result = [];

  (function dfs(vertex) {
    if (!vertex || visited[vertex]) return;
    visited[vertex] = true;
    result.push(vertex);

    graph.adjacencyList[vertex].forEach((neighbor) => dfs(neighbor));
  })(startVertex);

  return result;
}

// Exemplo de uso:
const graphDFS = new Graph();
graphDFS.addVertex("A");
graphDFS.addVertex("B");
graphDFS.addVertex("C");
graphDFS.addEdge("A", "B");
graphDFS.addEdge("A", "C");
console.log(depthFirstSearch(graphDFS, "A")); // ["A", "B", "C"]
