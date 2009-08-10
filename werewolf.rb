# Tyrone will care the shit out of you
gem 'tyrone', '0.3.2'
require 'tyrone/app'

gem 'astro_moon', '0.2'
require 'astro/moon'

set :phases => ['full', 'waning-gibbous', 'last-quarter', 'waning-crescent',
  'new', 'waxing-crescent', 'first-quarter', 'waxing-gibbous', 'full']

helpers do

  def current_phase
    'full'
    # illum = Astro::Moon.phase.illumination
    # case illum
    #   when 0: 'full';
    #   when 0...0.25: 'waning-gibbous';
    #   when 0.25: 'last-quarter';
    #   when 0.25...0.5: 'waning-crescent';
    #   when 0.5: 'new';
    #   when 0.5...0.75: 'waxing-crescent';
    #   when 0.75: 'first-quarter';
    #   when 0.75...1: 'waxing-gibbous';
    #   else 'full';
    # end
  end
end
