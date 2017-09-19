# The shopping list helps users keep track of things to be purchased.

class Item

  def initialize
    @name = name
  end

end

class ShoppingList

  def initialize(name)
    @name = name
    get_input
    # @list = list
  end

  def get_input
    puts "To add a shopping list, type 'add'. To view your list, type 'view'. To exit the program, type 'quit'."
    user_input = gets.chomp
    if user_input == "add"
      p "add"
    elsif user_input == "view"
      p "view"
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
  # def view
  #   puts @list + ": "
  #   @list.each do |list|
  #     puts (@list.index.to_i + 1) + ". " + @item
  #   end
  #   puts "Anything else?"
  #   if gets.chomp == "no"
  #     return @menu
  #     @list.add_to
  #   end
  # end
end

ShoppingList.new("grocery")
