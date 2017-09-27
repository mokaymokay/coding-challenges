# Write a method to find out which one of the given numbers differs from the
# others based on its evenness. Make sure the format is similiar to that of an
# IQ test, in which the first number is referred to as "1" and not "0".
# i.e. iq_test("2 4 7 8 10") => 3
# The third number is different.
# i.e. iq_test("1 2 1 1") => 2
# The second number is different.

def iq_test(numbers)
  arr = numbers.split " "
  if arr[0].to_i.even? && arr[1].to_i.odd?
    puts "1"
  elsif arr[0].to_i.even?
    arr.each do |number|
      puts (arr.rindex(number) + 1).to_s if number.to_i.odd?
    end
  elsif arr[0].to_i.odd? && arr[1].to_i.even?
    puts "1"
  else
    arr.each do |number|
      puts (arr.rindex(number) + 1) if number.to_i.even?
    end
  end
end

iq_test("2 4 7 8 10")
iq_test("1 2 1 1")
iq_test("23 21 31 45 62 65")
iq_test("1321 123 523512321 253242 3421")
iq_test("2 1 1")
