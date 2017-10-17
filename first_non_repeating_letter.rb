# Write a function named first_non_repeating_letter that takes a string input,
# and returns the first character that is not repeated anywhere in the string.
# i.e. 'stress' => 't'
# As an added challenge, upper- and lowercase letters are considered the same
# character, but the function should return the correct case for the initial letter.
# i.e. 'sTreSS' => 'T'
# If a string contains all repeating characters, it should return the empty string ("").

def first_non_repeating_letter(string)
  string.split("").each {|char| return char if string.downcase.count(char.downcase)==1}
  return ""
end

first_non_repeating_letter("sTreSS")
first_non_repeating_letter("aabbdcc")
