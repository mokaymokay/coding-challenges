# This function checks if two strings are one edit (or zero edits) away. The edit
# can either be: insert a character, remove a character, or replace a character.
# Examples:
# one_away("pale", "ale") => true
# one_away("pales", "pale") => true
# one_away("pale", "bale") => true
# one_away("pale", "bake") => false

# time complexity: O(n)
# space complexity: O(n)

def one_away(str_a, str_b)
  a_len = str_a.length
  b_len = str_b.length
  case a_len - b_len
  when 0
    diff = 0
    a_len.times do |i|
      # keep track of character differences
      diff += 1 if str_a[i] != str_b[i]
    end
    return diff <= 1 ? true : false
  when 1
    a_len.times do |i|
      if str_a[i] != str_b[i]
        # compare substrings
        return str_a[i+1..-1] == str_b[i..-1] ? true : false
      end
    end
  when -1
    b_len.times do |i|
      if str_b[i] != str_a[i]
        # compare substrings
        return str_b[i+1..-1] == str_a[i..-1] ? true : false
      end
    end
  else
    return false
  end
end

p one_away("pale", "ale")
p one_away("pales", "pale")
p one_away("pale", "bale")
p one_away("pale", "bake")
