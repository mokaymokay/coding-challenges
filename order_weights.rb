# Write a method to order a list of club members' weights by the sum of its
# digits, i.e. 99 will have "weight" 18, 100 will have weight "1", so in the list,
# 100 comes before 99.
#
# "56 65 74 100 99 68 86 180 90" ordered by numbers weights
# becomes: "100 180 90 56 65 74 68 86 99".
#
# When two numbers have the same "weight", class them as if they were strings
# and not numbers: 100 is before 180 because its "weight" (1) is less than the
# one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it
# comes before as a string.
#
# All numbers in the list are positive numbers and the list can be empty.

def order_weights(string)
  string = string.split(" ")
  # go through each number to convert to integer and sum up digits
  weight = string.map do |number|
    number.split("").map { |x| x.to_i }.reduce(:+)
  end
  # combine two arrays (weight with its corresponding number in the format of
  # [weight, "string_number"]), sort by weight then string, create new array after
  # removing the first element, weight, from each set of data
  result = weight.zip(string).sort.each { |x| x.shift }
  result.flatten.join(" ")
end

order_weights("56 65 74 100 99 68 86 180 90")
order_weights("2000 10003 1234000 44444444 9999 11 11 22 123")
