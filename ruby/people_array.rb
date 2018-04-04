# Write a command line app that takes in a variable with arrays nested as values inside another array. Print out sentences for each of them.
# people = [["Jason", "Maria", "Justin"], ["Red", "Blue", "Green"], ["Limp Bizkit", "3 Doors Down", "Papa Roach"]]
# The sentence will look like "Jason's favorite color is Red, and he loves Limp Bizkit"

names = []
colors = []
bands = []

puts "Enter three names"

i = 0
while i < 3 do
  input = gets.chomp.capitalize
  names.push(input)
  i += 1
end

puts "Enter three colors"

i = 0
while i < 3 do
  input = gets.chomp
  colors.push(input)
  i += 1
end

puts "Enter three bands"

i = 0
while i < 3 do
  input = gets.chomp.capitalize
  bands.push(input)
  i += 1
end

people = []
people.push(names, colors, bands)

i = 0
while i < 3 do
  puts "#{names[i]}'s favorite color is #{colors[i]}, and s(he) loves #{bands[i]}"
  i += 1
end
