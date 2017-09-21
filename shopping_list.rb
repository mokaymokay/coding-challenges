# The shopping list helps users keep track of things to be purchased.
# When the user types "add", the program prompts the user for a list item.
# When the user enters a list item, the list item gets added to the shopping list.
# The user can continue adding items until typing "quit". When the user types
#{ }"view", the program displays a numbered list, unless the list is empty.


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
    user_input = gets.chomp.to_s
    if user_input == "add"
      add()
    elsif user_input == "view"
      view()
    elsif user_input == "quit"
      return
    else
      get_input()
    end
  end

  def add
    puts "What would you like to add? Enter 'done' when you are finished."
    user_input = gets.chomp.to_s
    if user_input != "done"
      list.push(user_input)
      view()
    else
      get_input
      return
    end
  end

  def view
    puts @name + ": "
    @list.each_with_index do |item, index|
      puts (index.to_i + 1).to_s + ". " + item
    end
    puts "Anything else?"
    # If user inputs no, then show instructions again. If users adds item, then add to list.
    user_input = gets.chomp.to_s
    if user_input == "no"
      get_input
    elsif user_input == "quit"
      return
    elsif user_input == "done"
      view()
    else
      list.push(user_input)
      view()
    end
  end
end

ShoppingList.new("grocery")
