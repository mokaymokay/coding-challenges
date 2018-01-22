# Write a function that takes in a string of one or more words, and returns the
# same string, but with all five or more letter words reversed. Strings passed
# in will consist of only letters and spaces. Spaces will be included only when
# more than one word is present.
# spin_words("Hey fellow warriors") => "Hey wollef sroirraw"
# spin_words("This is a test") => "This is a test"
# spin_words("This is another test") => "This is rehtona test"

def spin_words(string)
  if string.include? " "
    string = string.split(" ")
    string.each do |word|
      word.reverse! if word.size >= 5
    end
    p string * " "
  else
    if string.size < 5
      p string
    else
      p string.reverse!
    end
  end
end

spin_words("Hey fellow warriors")
spin_words("This is a test")
spin_words("This is another test")
spin_words("Hey Jude")
spin_words("I love dragons")
