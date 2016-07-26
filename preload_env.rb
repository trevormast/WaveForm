require './lib/app_env'
require 'slim'
if AppEnv.development?
  require 'dotenv'
  Dotenv.load
end
