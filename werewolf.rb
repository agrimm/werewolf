gem 'activesupport', '2.3.3'
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
    (next_full_moon - DateTime.now).to_i
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
