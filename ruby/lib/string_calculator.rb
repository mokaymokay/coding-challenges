class StringCalculator

  def self.add(input)
    if input.empty?
      0
    else
      nums = input.split(",").map { |num| num.to_i }
      nums = nums.reduce(:+)
    end
  end
end