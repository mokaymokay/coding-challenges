# The method word_score determines a score for each input of English words,
# where a = 1, b = 2, ... z = 26.
# e.g. word_score("abc") => 6
# If a letter repeats consecutively, the score will be increased by the power of
# repetition, plus the base.
# e.g. word_score("bbb") => 2^3 + 2 => 10

def word_score(word)
  score_table = { "a" => 1, "b" => 2, "c" => 3, "d" => 4, "e" => 5,
                  "f" => 6, "g" => 7, "h" => 8, "i" => 9, "j" => 10,
                  "k" => 11, "l" => 12, "m" => 13, "n" => 14, "o" => 15,
                  "p" => 16, "q" => 17, "r" => 18, "s" => 19, "t" => 20,
                  "u" => 21, "v" => 22, "w" => 23, "x" => 24, "y" => 25,
                  "z" => 26 }
  score = 0
  # turn word into array of characters and their count, consecutively
  dissected = word.split("").chunk{ |char| char }.map{ |char, count| [char, count.length.to_i] }
    dissected.each do |char, count|
      # if not repeated consecutively, add score directly from hash table
      if count == 1
        score += score_table[char]
      # if repeated consecutively, calculate score then add to score
      else
        score += score_table[char] ** count + score_table[char]
      end
    end
  puts "score of " + word + ": " + score.to_s
end

word_score("abba") # score of abba: 8
word_score("abc") # score of abc: 6
word_score("abbabba") # score of abbabba: 15
