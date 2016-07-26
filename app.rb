require 'sinatra'
require './lib/wave.rb'
require './lib/line.rb'

module WaveForm
  class App < Sinatra::Base
    get '/' do
      slim :index, layout: :default
    end

    post '/create.json' do
      @wave = Wave.new(wave_params)

      content_type :json
      { points: @wave }
    end

    def wave_params
      safe_params = []
      safe_params[:width] = params["width"]
      safe_params[:height] = params["height"]
      safe_params[:freq1] = params["freq1"]
      safe_params[:freq2] = params["freq2"]
    end
  end
end
