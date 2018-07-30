const Queue = require('./Queue');

const reconstructShortestPath = (allPaths, start, end) => {
  const shortestPath = []
  // start with end node
  let current = end
  // if
  while (current !== null) {
    shortestPath.unshift(current)
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
      // add neighbors to queue and path to paths hash if it does not already exist
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
