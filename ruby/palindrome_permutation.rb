# This method checks whether any permutation of an input string is a palindrome,
# with input strings always contain only lowercase characters.

# Examples:
# palindrome_permutation("civic") => true
# palindrome_permutation("ivicc") => true
# palindrome_permutation("civil") => false
# palindrome_permutation("livci") => false


def palindrome_permutation(str)
  # use hash to store each character and number of occurence
  char_count = {}
  str.length.times do |c|
    char_count[str[c]] ? char_count[str[c]] += 1 : char_count[str[c]] = 1
  end
  # use arrays to hold odd and even values
  odd, even = [], []
  char_count.each_value do |v|
    v.even? ? even.push(v) : odd.push(v)
  end
  # true if only one value is odd and the rest are even; else false
  return odd.length == 1 ?  true : false
end

p palindrome_permutation("civic")
p palindrome_permutation("ivicc")
p palindrome_permutation("civil")
p palindrome_permutation("livci")
