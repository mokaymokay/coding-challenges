# Write a function that, when given a list of characters as a comma separated
# string, returns a string containing all except the first and last characters,
# separated by spaces. If the input string is empty, or the removal of the first
# and last items would cause the string to be empty, return null value. Arrays
# are joined by adding a single space between each consecutive array element.

def array(string)
  return nil if string == "" || string.length == 1
  a = string.split(", ")
  return nil if a[2] == nil
  a.delete_at(0)
  a.pop
  p a * " "
end

array("")
array("1")
array("1, 3")
array("1, 2, 3")
array("1, 2, 3, 4")
