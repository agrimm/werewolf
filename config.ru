require 'sinatra'

__DIR__ = File.dirname(__FILE__)

set :run => false,
    :environment => :development,
    :root => __DIR__,
    :views => File.join(__DIR__, 'views'),
    :public => File.join(__DIR__, 'public'),
    :app_file => 'werewolf.rb'

require 'werewolf'

run Sinatra::Application
