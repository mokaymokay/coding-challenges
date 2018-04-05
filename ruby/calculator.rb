def add(a, b)
  return a + b
end

def subtract(a, b)
  return a - b
end

def multiply(a, b)
  return a * b
end

def divide(a, b)
  return b == 0 ? 0 : a.to_f / b
end

puts "what operation do you want to perform? (add / subtract / multiply / divide)"
operation = gets.downcase.chomp.to_sym
puts "enter first number"
num_1 = gets.chomp.to_i
puts "enter second number"
num_2 = gets.chomp.to_i
answer = send(operation, num_1, num_2)
puts "answer: #{answer}"
