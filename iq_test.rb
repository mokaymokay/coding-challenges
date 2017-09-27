# Write a method to find out which one of the given numbers differs from the
# others based on its evenness. Make sure the format is similiar to that of an
# IQ test, in which the first number is referred to as "1" and not "0".
# i.e. iq_test("2 4 7 8 10") => 3
# The third number is different.
# i.e. iq_test("1 2 1 1") => 2
# The second number is different.

def iq_test(numbers)
  arr = numbers.split.map(&:to_i).map(&:even?)
  if arr.count(true) > 1 # if there's more than one even number
    p arr.index(false) + 1
  else
    p arr.index(true) + 1
  end
end

iq_test("2 4 7 8 10")
iq_test("1 2 1 1")
iq_test("23 21 31 45 62 65")
iq_test("1321 123 523512321 253242 3421")
iq_test("2 1 1")
