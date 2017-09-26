# The method word_score determines a score for each input of English words,
# where a = 1, b = 2, ... z = 26.
# e.g. word_score("abc") => 6
# If a letter repeats consecutively, the score will be increased by the power of
# repetition, plus the base.
# e.g. word_score("bbb") => 2^3 + 2 => 10

require 'pry'

def word_score(word)

  score_table = {"a" => 1, "b" => 2, "c" => 3, "d" => 4, "e" => 5, "f" => 6,
               "g" => 7, "h" => 8, "i" => 9, "j" => 10, "k" => 11, "l" => 12,
               "m" => 13, "n" => 14, "o" => 15, "p" => 16, "q" => 17, "r" => 18,
               "s" => 19, "t" => 20, "u" => 21, "v" => 22, "w" => 23, "x" => 24,
               "y" => 25, "z" => 26}

  # check for duplicates
  if word.squeeze == word
    # split into individual strings
    individual = word.split("")
    score = 0
    individual.each do |character|
      score += score_table[character]
    end
    puts "Score of " + word + ": " + score.to_s
  else
    individual = word.split("")
    score = 0
    individual.each_with_index do |character, i|
      if i == individual.length - 1
        break
      end
      if individual[i] == individual[i + 1]

      else
        score += score_table[character]
      end
    end
    # iterate over each character
    # check if each character is equal to next character
    # if a == b, check next one until it's not equal
    #   then index of last repetition minus index of first repetition
    #   set it to power
    #   use repeated character as base and add to score
    # else, grab value from hash and add to score
  end
end

word_score("abba")
