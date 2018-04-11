# Reverse a string

def reverse(str)
  arr = []
  str.split("").each do |char|
    arr.unshift(char)
  end
  arr.join("")
end

reverse("hello")

# Check if integer is prime

def prime?(num)
  return true if num == 2
  if num <= 1 || num % 2 == 0
    return false
  end
  (3...num).each do |n|
    return false if num % n == 0
  end
  true
end

puts prime?(13)
puts prime?(3)
puts prime?(2)
puts prime?(24)

# Check if string is palindrome

def palindrome?(str)
  arr = []
  str.split("").each do |char|
    arr.unshift(char)
  end
  str == arr.join("")
end

palindrome?("madam")
palindrome?("prime")

# Check if any two numbers within a given array can be added to equal given number

def sum_of_two(array, sum)
  arr = array.combination(2).to_a
  arr.each do |a|
    return true if sum == a[0] + a[1]
  end
  false
end

sum_of_two([1,2,3,4,5], 9)

# Return largest possibly product of any three numbers in a given array

def prod_three(array)
  permutations = array.combination(3).to_a
  permutations.map! { |p| p.inject(:*) }
  max = permutations[0]
  permutations.each do |e|
    if e > max
      max = e
    end
  end
  max
end

prod_three([-10,-10,1,3,2])

# Counts from 1 to number recursively

def count_up(num, start = 1)
  return if num < start
  puts start
  return if start == num
  start += 1
  count_up(num, start)
end

count_up(-10, -20)

# Returns number in Fibbonacci sequence given a number that represents the position

def fib(num, arr=[1,1])
  return 1 if num <= 2
  return arr[-1] if num == arr.length
  new_elem = arr[-1] + arr[-2]
  arr.push(new_elem)
  fib(num, arr)
end

fib(12)

# Given an array of movie lengths and number of minutes, check if we can watch two movies within timeframe without repeating movies

def movie_calc(arr, num)
  new_arr = arr.combination(2).to_a
  new_arr.map!{ |sub_arr| sub_arr.inject(:+) }
  new_arr.include?(num)
end

movie_calc([20,40,60,100], 110)
