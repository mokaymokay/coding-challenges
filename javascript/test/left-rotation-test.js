const assert = require('assert')
const leftRotation = require('../left-rotation')

describe('Left Rotation', function() {
  describe('Testing for input "5 4" and "1 2 3 4 5"', function() {
    it('should return "5 1 2 3 4"', function() {
      actual = leftRotation('5 4', '1 2 3 4 5')
      expected = '5 1 2 4 4'
      assert.equal(actual, expected)
    })
  })

  describe('Testing for input "7 3" and "5 2 0 1 3 1 4"', function () {
    it('should return "1 3 1 4 5 2 0"', function () {
      actual = leftRotation('7 3', '5 2 0 1 3 1 4')
      expected = '1 3 1 4 5 2 0'
      assert.equal(actual, expected)
    })
  })
})
