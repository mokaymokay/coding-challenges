# This module calculates the amount of key presses required for a phrase on a
# phone with a 3x4 numeric keypad using multi-tap (pressing a button repeatedly
# to cycle through possible values), i.e. "E" can be typed by pressing 3 twice.
# presses("WHERE DO U WANT 2 MEET L8R") => 47

def presses(phrase)

  keys = ["1", " 0", "ABC2", "DEF3", "GHI4", "JKL5", "MNO6", "PQRS7", "TUV8", "WXYZ9"]

  counter = phrase.upcase.split("").map do |char|
    keys.find { |key| key.include?(char) }.index(char) + 1
  end
  p counter.reduce(:+)
end

presses("LOL")
presses("HOW R U")
presses("WHERE DO U WANT 2 MEET L8R")
