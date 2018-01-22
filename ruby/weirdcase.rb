# Write a method weirdcase that accepts a string, and returns the same string
# with all even indexed characters in each word upper cased, and all odd indexed
# characters in each word lower cased. The indexing just explained is zero based,
# so the zero-ith index is even, therefore that character should be upper cased.
# The passed in string will only consist of alphabetical characters and spaces(' ').
# Spaces will only be present if there are multiple words. Words will be separated
# by a single space(' ').
# e.g. weirdcase("String") => "StRiNg"
# e.g. weirdcase("Weird string case") => "WeIrD StRiNg CaSe"

def weirdcase(string)
  string.split(" ").map do |word|
    word.split("").each_with_index.map do |char, i|
      i.even? ? char.upcase : char.downcase
    end.join("")
  end.join(" ")
end

weirdcase("String")
weirdcase("Weird string case")
weirdcase("Looks like you passed")
