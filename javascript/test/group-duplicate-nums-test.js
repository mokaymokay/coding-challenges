const assert = require('assert')
const duplicateNums = require('../group-duplicate-nums.js')
const groupDuplicateNums = duplicateNums.groupDuplicateNums

describe('Group duplicate numbers', function() {
  describe('Testing for input [3, 2, 6, 2, 1, 3]', function() {
    it('should return [[3, 3], [2, 2], [6], [1]]', function() {
      actual = groupDuplicateNums([3, 2, 6, 2, 1, 3])
      expected = [[3, 3], [2, 2], [6], [1]]
      assert.deepEqual(actual, expected)
    })
  })

  describe('Testing for input [3, 2, 6, 2]', function () {
    it('should return [[3], [2, 2], [6]]', function () {
      actual = groupDuplicateNums([3, 2, 6, 2])
      expected = [[3], [2, 2], [6]]
      assert.deepEqual(actual, expected)
    })
  })

  describe('Testing for empty array as input', function () {
    it('should return empty array as output', function () {
      actual = groupDuplicateNums([])
      expected = []
      assert.deepEqual(actual, expected)
    })
  })
})