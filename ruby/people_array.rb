# Write a command line app that takes in a variable with arrays nested as values inside another array. Print out sentences for each of them.
# people = [["Jason", "Maria", "Justin"], ["Red", "Blue", "Green"], ["Limp Bizkit", "3 Doors Down", "Papa Roach"]]
# The sentence will look like "Jason's favorite color is Red, and he loves Limp Bizkit"

names, colors, bands = [], [], []

def get_three_inputs(array, info_type)
  puts "Enter three " + info_type
  3.times do
    input = gets.chomp
    array.push(input)
  end
end

get_three_inputs(names, "names")
get_three_inputs(colors, "colors")
get_three_inputs(bands, "bands")

people = []
people.push(names, colors, bands)


for i in 0..people.length - 1
  puts "#{people[0][i].capitalize}'s favorite color is #{people[1][i]}, and s/he loves #{people[2][i].capitalize}"
end
