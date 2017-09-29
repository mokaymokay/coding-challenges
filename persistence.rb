# Write a function, persistence, that takes in a positive parameter num and
# returns its multiplicative persistence, which is the number of times you must
# multiply the digits in num until you reach a single digit.
# e.g. persistence(39) => 3 ; because 3*9=27, 2*7=14, 1*4=4 and 4 has only one digit
# e.g. persistence(999) => 4 ; because 9*9*9=729, 7*2*9=126, 1*2*6=12, 1*2=2
# e.g. persistence(4) => 0 ; because 4 is already a one-digit number

def persistence(n)
  count = 0
  until n.to_s.size == 1
    n = n.to_s.split("").map(&:to_i).inject(:*)
    count += 1
  end
  p count
end

persistence(39)
persistence(999)
persistence(4)
