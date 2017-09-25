# The method word_score determines a score for each input of English words,
# where a = 1, b = 2, ... z = 26.
# e.g. word_score("abc") => 6
# If a letter repeats consecutively, the score will be increased by the power of
# repetition, plus the base.
# e.g. word_score("bbb") => 2^3 + 2 => 10

def word_score(word)
  puts "Enter a word to be scored."

  score_table = {"a" => 1, "b" => 2, "c" => 3, "d" => 4, "e" => 5, "f" => 6,
               "g" => 7, "h" => 8, "i" => 9, "j" => 10, "k" => 11, "l" => 12,
               "m" => 13, "n" => 14, "o" => 15, "p" => 16, "q" => 17, "r" => 18,
               "s" => 19, "t" => 20, "u" => 21, "v" => 22, "w" => 23, "x" => 24,
               "y" => 25, "z" => 26}

  word = gets.chomp.to_s
  individual = word.split("")
  p individual[0..(individual.length)]
  new_array = score_table.fetch_values(individual[0], individual[1], individual[2])
  p new_array
  puts "Score of " + word + ": " + new_array.inject(0, :+).to_s
  # individual.each do |letter|
  #   puts score_table.fetch_values(individual)
  # end
  # individual.each { |letter| puts score_table.fetch_values(individual)}
end

word_score("")
