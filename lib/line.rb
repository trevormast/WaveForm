class Line
  def initialize(width, height)
    @width = width
    @height = height
  end

  def points
    array = []
    @width.times do |x|
      array << [x, @height/2]
    end
    array
  end
end
