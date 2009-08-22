File.file?(gems_file = "#{File.dirname(__FILE__)}/.gems") && File.read(gems_file).each do |gem_decl|
  gem_name, version = gem_decl[/^([^\s]+)/,1], gem_decl[/--version ([^\s]+)/,1]
  version ? gem(gem_name, version) : gem(gem_name)
end

require 'sinatra'
require 'haml'
require 'sass'
require 'activesupport' # TODO Don't require everything

helpers do

  def current_phase
    'full'
  end

  def full_moon?
    next_full_moon.today?
  end

  def next_full_moon
    Date.civil(2009,9,5)
  end

  def days_until_full_moon
    (next_full_moon - Date.today).to_i
  end

  def hidden
    {:style => 'display:none'}
  end

end

get '/' do
  haml :home
end

get /^\/css\/(.+)\.css$/ do |style_file|
  sass_file = File.join('public','css',"#{style_file}.sass")
  pass unless File.exist?(sass_file)
  content_type :css
  sass File.read(sass_file)
end
