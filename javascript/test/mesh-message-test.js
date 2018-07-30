const assert = require('assert')
const meshMessage = require('../mesh-message.js')
const reconstructShortestPath = meshMessage.reconstructShortestPath
const meshMessageBFS = meshMessage.meshMessageBFS

const graph = {
  'a': ['b', 'c', 'd'],
  'b': ['a', 'd'],
  'c': ['a', 'e'],
  'd': ['a', 'b'],
  'e': ['c'],
  'f': ['g'],
  'g': ['f'],
}

describe('Mesh Message', function() {
  describe('Two-hop path', function() {
    it("should return ['a', 'c', 'e']", function() {
      actual = meshMessageBFS(graph, 'a', 'e')
      expected = ['a', 'c', 'e']
      assert.deepEqual(actual, expected)
    })
  })

  describe('One-hop path', function() {
    it("should return ['g', 'f']", function() {
      actual = meshMessageBFS(graph, 'g', 'f')
      expected = ['g', 'f']
      assert.deepEqual(actual, expected)
    })
  })

  describe('Zero-hop path', function() {
    it("should return ['d']", function() {
      actual = meshMessageBFS(graph, 'd', 'd')
      expected = ['d']
      assert.deepEqual(actual, expected)
    })
  })

  describe('No path', function() {
    it("should return null", function() {
      actual = meshMessageBFS(graph, 'a', 'f')
      expected = null
      assert.deepEqual(actual, expected)
    })
  })

  describe('Start node not present', function() {
    it("should return error", function() {
      assert.throws(() => meshMessageBFS(graph, 'k', 'a'), Error, 'Start node not in graph!')
    })
  })

  describe('End node not present', function() {
    it("should return error", function() {
      assert.throws(() => meshMessageBFS(graph, 'a', 'k'), Error, 'End node not in graph!')
    })
  })
})
