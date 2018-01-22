# This method takes in an input string and a dictionary array and return the values
# that begin with that input string. If there are more than 5 matches, output will
# be limited to the first 5 results. It there are no matches, an empty array will
# be returned.
# i.e. autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']

def autocomplete(input, dictionary)
  output = Array.new
  dictionary.each do |word|
    output << word if word.downcase.start_with?(input.gsub(/[^a-zA-Z]/, ""))
    break if output.length == 5
  end
  p output
end

autocomplete('ai', ['airplane','airport','apple','ball'])
autocomplete('a', ["abnormal", "arm-wrestling", "absolute", "airplane", "airport", "amazing", "apple"])
