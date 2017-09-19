# The shopping list helps users keep track of things to be purchased.
# When the user types "add", the program prompts the user for a list item.
# When the user enters a list item, the list item gets added to the shopping list.
# When the user types "view", the program displays a numbered list.

class Item

  def initialize
    @name = name
  end

end

class ShoppingList
  attr_accessor :list
  def initialize(name)
    @name = name
    @list = ["apple", "orange", "banana"]
    get_input()
  end

  def get_input
    puts "To add to a shopping list, type 'add'. To view your list, type 'view'. To exit the program, type 'quit'."
    user_input = gets.chomp
    if user_input == "add"
      p "add"
    elsif user_input == "view"
      p "view"
      view()
    elsif user_input == "quit"
      p "bye"
      return
    end
  end

  # def add
  #   puts "What is the name of the list?"
  #   @name = gets.chomp
  #   @list = Array.new @name
  # end
  #
  # def add_to_list
  #   puts "What would you like to add?"
  #   @item = gets.chomp.to_s
  #     while @item != "quit" || @item != "view"
  #       @list.push(@item)
  #     end
  # end
  #
  def view
    puts @name + ": "
    @list.each_with_index do |item, index|
      puts (index.to_i + 1).to_s + ". " + item
    end
    puts "Anything else?"
    # If user inputs no, then show instructions again. If users adds item, then add to list.
    if gets.chomp == "no"
      get_input()
    end
  end
end

ShoppingList.new("grocery")
