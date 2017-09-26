# Write a method of any name that generates a random hex code every time it's called.

def hex_number()

  hex_system = ["0", "1", "2", "3", "4", "5", "6", "7",
                "8", "9", "A", "B", "C", "D", "E", "F"]

  hex_string = ""
  until hex_string.length == 6
    hex_string += hex_system.fetch(rand(15))
  end
  puts hex_string
end

hex_number()
