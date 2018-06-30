# This method checks if two strings of lowercase letters are equal after swapping
# two letters in one of them. Note: both strings are between 0 - 20000 letters.

# Examples:
# buddy_strings("ab", "ba") => true
# buddy_strings("ab", "ab") => false
# buddy_strings("aa", "aa") => true
# buddy_strings("aaaaaaabc", "aaaaaaacb") => true
# buddy_strings("", "aa") => false
# buddy_strings("abab", "abab") => true
# buddy_strings("acccccb", "bccccca") => true

# Time complexity: O(n), where n = length of a and b
# Space complexity: O(1)

def buddy_strings(a, b)
  a_len = a.length
  b_len = b.length
  # return false if lengths differ
  return false if a_len != b_len
  # return true if strings are equal and has repeated letters
  if a == b
    a_len.times do |i|
      return a.count(a[i]) > 1
    end
  else
    # initiate variables to compare substrings
    a_substr = ""
    b_substr = ""
    a_len.times do |i|
      # when letters in same position differ, add to substring a in reverse and substring b normally
      if a[i] != b[i]
        a_substr.prepend(a[i])
        b_substr += b[i]
      end
      # return substring comparison if their lengths get to 2
      return a_substr == b_substr if a_substr.length == 2
    end
  end
  # return false by default (i.e. if strings are empty)
  return false
end

p buddy_strings("ab", "ba")
p buddy_strings("ab", "ab")
p buddy_strings("aa", "aa")
p buddy_strings("aaaaaaabc", "aaaaaaacb")
p buddy_strings("", "aa")
p buddy_strings("abab", "abab")
p buddy_strings("acccccb", "bccccca")
