// Given a network of senders and receivers in an adjacency list, find the shortest
// path from one node to another.

// Strategy: Do BFS of network starting from sender, use results to recreate shortest path.

// Time complexity: O(n + m), n = number of nodes, m = number of neighbors
// Space complexity: O(n)

const Queue = require('./Queue');

const reconstructShortestPath = (allPaths, start, end) => {
  const shortestPath = []
  // start with end node
  let current = end
  // create path
  while (current !== null) {
    // add current node to path in reverse order
    shortestPath.unshift(current)
    // set new current to receiver of one-to-one path in object
    current = allPaths[current]
  }
  return shortestPath
}

module.exports = {
  meshMessageBFS: function(graph, start, end) {
    if (!graph.hasOwnProperty(start)) {
      throw new Error('Start node not in graph!');
    }
    if (!graph.hasOwnProperty(end)) {
      throw new Error('End node not in graph!');
    }
    const nodesToVisit = new Queue()
    nodesToVisit.enqueue(start)
    // keep track of how we reach each node
    const allPaths = {}
    // initiate so that we have the condition to end loop in reconstructShortestPath
    allPaths[start] = null
    while (nodesToVisit.size() > 0) {
      let current = nodesToVisit.dequeue()
      if (current === end) {
        return reconstructShortestPath(allPaths, start, end)
      }
      // add neighbors to queue and path to paths object if it does not already exist
      graph[current].map((neighbor) => {
        if (!allPaths.hasOwnProperty(neighbor)) {
          nodesToVisit.enqueue(neighbor)
          allPaths[neighbor] = current
        }
      })
    }
    return null
  }
}
