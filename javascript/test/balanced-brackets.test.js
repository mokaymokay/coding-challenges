const assert = require('assert')
const balancedBrackets = require('../balanced-brackets')

describe('Balanced Brackets', function () {
  describe('Testing for input "{[()]}"', function () {
    it('should return "YES"', function () {
      actual = balancedBrackets('{[()]}')
      expected = 'YES'
      assert.equal(actual, expected)
    })
  })

  describe('Testing for input "{[(])}', function () {
    it('should return "NO"', function () {
      actual = balancedBrackets('{[(])}')
      expected = 'NO'
      assert.equal(actual, expected)
    })
  })

  describe('Testing for input "{{[[(())]]}}', function () {
    it('should return "YES"', function () {
      actual = balancedBrackets('{{[[(())]]}}')
      expected = 'YES'
      assert.equal(actual, expected)
    })
  })
})