const assert = require('assert')
const hourglassSum = require('../hourglass-sum')

const arrayOne = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

const arrayTwo = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
]

const arrayThree = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

describe('Hourglass Sum', function() {
  describe('Testing for input array one', function() {
    it('should return 19', function() {
      actual = hourglassSum(arrayOne)
      expected = 19
      assert.equal(actual, expected)
    })
  })

  describe('Testing for input array two', function () {
    it('should return 13', function () {
      actual = hourglassSum(arrayTwo)
      expected = 13
      assert.equal(actual, expected)
    })
  })

  describe('Testing for input array three', function () {
    it('should return 28', function () {
      actual = hourglassSum(arrayThree)
      expected = 28
      assert.equal(actual, expected)
    })
  })
})