const assert = require('assert')
const isVaildWalk = require('../ten-min-walk')

describe('Ten Minute Walk', function() {
  describe('Route one', function() {
    it('should return true', function() {
      actual = isVaildWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
      assert.equal(actual, true)
    })
  })

  describe('Route two', function () {
    it('should return false', function () {
      actual = isVaildWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
      assert.equal(actual, false)
    })
  })

  describe('Route three', function () {
    it('should return false', function () {
      actual = isVaildWalk(['w'])
      assert.equal(actual, false)
    })
  })

  describe('Route four', function () {
    it('should return false', function () {
      actual = isVaildWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
      assert.equal(actual, false)
    })
  })
})