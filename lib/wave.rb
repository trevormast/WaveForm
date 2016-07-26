class Wave
  include Math

  attr_reader :points
  def initialize(width, height, freq, freq2 = nil)
    @width= width
    @height = height
    @freq = freq
    @freq2 = freq2
    @line = Line.new(@width, @height).points

    points
  end

  def points
    array = []
    @line.each do |coords|
      array << wavify(coords)
    end
    array
  end

  def wavify(coords)
    return [coords[0], (40 * Math.sin(PI * coords[0] * freq_to_period(@freq)) + coords[1])] unless @freq2
    [coords[0], (40 * Math.sin(PI * coords[0] * freq_to_period(@freq)) + coords[1]) + (40 * Math.sin(PI * coords[0] * freq_to_period(@freq2)))]
  end

  def freq_to_period(freq)
    (freq * (1/30.0)) / 440.0
  end
end
