# This method checks whether any permutation of an input string is a palindrome,
# with input strings always contain only lowercase characters.

# Examples:
# palindrome_permutation("civic") => true
# palindrome_permutation("ivicc") => true
# palindrome_permutation("civil") => false
# palindrome_permutation("livci") => false

# time complexity: O(n)
# space complexity: O(n)

require 'set'

def palindrome_permutation(str)
  # use set to keep track of lone characters
  lone_chars = Set.new()
  # add character to set if doesn't already exist, otherwise delete
  str.length.times do |c|
    lone_chars.include?(str[c]) ? lone_chars.delete(str[c]) : lone_chars.add(str[c])
  end
  # return true if set only contains one lone character
  return lone_chars.length <= 1
end

p palindrome_permutation("civic")
p palindrome_permutation("ivicc")
p palindrome_permutation("civil")
p palindrome_permutation("livci")
