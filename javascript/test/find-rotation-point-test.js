const assert = require('assert')
const findRotationPoint = require('../find-rotation-point')

const rotationAtMidpoint = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

const rotationBeforeMidpoint = [
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  'ptolemaic',
  'retrograde'
];

const rotationAfterMidpoint = [
  'engender',
  'karpatka',
  'othellolagkage',
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
];

describe('Find Rotation Point', function() {
  describe('Rotation point is at midpoint', function() {
    it('should return index of 5', function() {
      actual = findRotationPoint(rotationAtMidpoint)
      expected = 5
      assert.equal(actual, expected)
    })
  })

  describe('Rotation point is before midpoint', function () {
    it('should return index of 3', function () {
      actual = findRotationPoint(rotationBeforeMidpoint)
      expected = 3
      assert.equal(actual, expected)
    })
  })

  describe('Rotation point is before midpoint', function () {
    it('should return index of 8', function () {
      actual = findRotationPoint(rotationAfterMidpoint)
      expected = 8
      assert.equal(actual, expected)
    })
  })
})