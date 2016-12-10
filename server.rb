# A "Proxy API" for accessing DarkSky

require "sinatra"
require "net/http"

DARK_SKY_API_KEY = "53d8a69c11d26e75f8c20b909821eb91"

get "/api/v1/forecast/:latitude,:longitude" do |latitude, longitude|
  uri = URI("https://api.darksky.net/forecast/#{DARK_SKY_API_KEY}/#{latitude},#{longitude}")
  return Net::HTTP.get(uri)
end
