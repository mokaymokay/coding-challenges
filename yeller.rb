# This method takes in an array of characters and returns a string with an
# ALLCAPS version of the input.

def yeller(array)
  puts array.map { |char| char.upcase }.join
end

yeller(['o', 'l', 'd'])
