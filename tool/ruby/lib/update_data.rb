require 'json'
require 'open-uri'

@root = File.expand_path(File.join(File.dirname(__FILE__), '..', '..', '..'))
@data_path = File.join(@root, 'data', 'data.json')

def arrange_data
  data = JSON.parse(File.read(@data_path))
  File.write @data_path, JSON.pretty_generate(data, indent: '    ')
end
