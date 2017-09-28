# Given two arrays a and b write a function comp(a, b) that checks whether the
# two arrays have the "same" elements, with the same multiplicities. "Same"
# means, here, that the elements in b are the elements in a squared, regardless
# of the order.
# e.g. a = [121, 144, 19, 161, 19, 144, 19, 11]
# b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
# a or b might be nil or null or None. If a or b are nil (or null or None),
# the problem doesn't make sense so return false.
# a or b might be []. If a or b are empty the result is evident by itself.

def comp(array1, array2)
  if array1 == nil || array2 == nil
    false
  elsif array1.empty? || array2.empty?
    true
  else
    array1.collect { |number| number ** 2}.sort == array2.sort ? true : false
  end
end

comp([1, 2, 3], nil)
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])
