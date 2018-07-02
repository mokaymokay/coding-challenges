# This program reverses the digits of a 32-bit signed integer.

# Time complexity: O(n)
# Space complexity: O(1)

def reverse(x)
  # Convert to string, then array, then reverse
  reversed = x.to_s.split('').reverse
  # if negative, muiltiply by -1
  if reversed[-1] == "-"
    output = reversed.join('').to_i * -1
  else
    output = reversed.join('').to_i
  end
  # return output only if smaller than 32-bit, otherwise return 0
  return output.bit_length < 32 ? output : 0
end

p reverse(520)
p reverse(-123)
p reverse(-65090)
