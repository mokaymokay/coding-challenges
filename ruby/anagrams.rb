# Write a function that will find all the anagrams of a word from a list. Given
# a word and an array of words, you should return an array of all the anagrams
# or an empty array if there are none.
# e.g.:
# anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
# anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
# anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

def anagrams(word, words)
  p words.select {|x| x.chars.sort == word.chars.sort }
end

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
anagrams('laser', ['lazing', 'lazy',  'lacer'])
