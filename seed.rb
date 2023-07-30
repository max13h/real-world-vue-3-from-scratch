require 'faker'
require 'json'

def set_hour
  hour = rand(0..23).to_s
  hour = "0#{hour}" if hour.length == 1
  minute = rand(0..59).to_s
  minute = "0#{minute}" if minute.length == 1
  return "#{hour}:#{minute}"
end

number_of_events = 30
random = []

while random.size < number_of_events
  num = rand(1000)
  random << num unless random.include?(num)
end

array = []
index = 0

number_of_events.times do
  full_hour = set_hour
  object = {
    id: random[index],
    title: Faker::Lorem.sentence(word_count: 3, random_words_to_add: 1),
    description: Faker::Lorem.sentence(word_count: 4, random_words_to_add: 2),
    location: Faker::Address.city,
    date: "#{Faker::Date.forward(days: 100)} #{full_hour}",
    organizer: Faker::Name.name
  }
  array << object
  index += 1
end

all_json = {
  "events": array
}
json_string = JSON.generate(all_json)

File.open('db.json', 'w') do |file|
  file.write(json_string)
end
