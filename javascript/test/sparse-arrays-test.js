const assert = require('assert')
const sparseArrays = require('../sparse-arrays')

describe('Sparse Arrays', function() {
  describe('Testing for inputs ["aba", "baba", "aba", "xzxb"] and ["aba", "xzxb", "ab"]', function() {
    it('should return [2,1,0]', function() {
      actual = sparseArrays(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
      expected = [2, 1, 0]
      assert.deepEqual(actual, expected)
    })
  })

  describe('Testing for inputs ["def", "fgh", "de"] and ["de", "lmn", "fgh"]', function () {
    it('should return [1,0,1]', function () {
      actual = sparseArrays(["def", "fgh", "de"], ["de", "lmn", "fgh"])
      expected = [1, 0, 1]
      assert.deepEqual(actual, expected)
    })
  })
  
  describe('Testing for inputs ["abcde", "sdaklfj", "asdjf", "na", "basdn", "sdaklfj", "asdjf", "na", "asdjf", "na", "basdn", "sdaklfj", "asdjf"] and ["abcde", "sdaklfj", "asdjf", "na", "basdn"]', function () {
    it('should return [1,3,4,3,2]', function () {
      actual = sparseArrays(["abcde", "sdaklfj", "asdjf", "na", "basdn", "sdaklfj", "asdjf", "na", "asdjf", "na", "basdn", "sdaklfj", "asdjf"], ["abcde", "sdaklfj", "asdjf", "na", "basdn"])
      expected = [1, 3, 4, 3, 2]
      assert.deepEqual(actual, expected)
    })
  })
})