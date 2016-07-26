require 'sinatra'
require './lib/wave.rb'
require './lib/line.rb'
require 'json'


module WaveForm
  class App < Sinatra::Base
    get '/' do
      slim :index, layout: :default
    end

    get '/create.json' do

      @resultant = Wave.new(wave_params[:width],
                            wave_params[:height],
                            wave_params[:freq1],
                            wave_params[:freq2])
      @freq1 = Wave.new(wave_params[:width],
                        wave_params[:height],
                        wave_params[:freq1])

      @freq2 = Wave.new(wave_params[:width],
                        wave_params[:height],
                        wave_params[:freq2])

      content_type :json
      { resultant: @resultant.points,
        freq1: @freq1.points,
        freq2: @freq2.points }.to_json
    end

    def wave_params
      safe_params = {}
      safe_params[:width] = params["width"].to_i
      safe_params[:height] = params["height"].to_i
      safe_params[:freq1] = params["freq1"].to_i
      safe_params[:freq2] = params["freq2"].to_i
      safe_params
    end
  end
end
