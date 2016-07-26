$stdout.sync = true

ENV['RACK_ENV'] ||= 'development'
require 'rubygems'
require 'bundler/setup'
require './preload_env'
require './app'

run WaveForm::App
