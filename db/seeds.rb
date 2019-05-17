# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.delete_all
# 37.786337, -122.443078
Bench.create!(description: "Some random place", lat:37.786337 , lng:-122.443078)
# 37.785879, -122.446458
Bench.create!(description: "Fire Station", lat:37.785879 , lng:-122.446458)
# 37.783370, -122.447723
Bench.create!(description: "Trader Joe", lat:37.783370 , lng:-122.447723)
# 37.623142, -122.383828
Bench.create!(description: "Airport", lat:37.623142 , lng:-122.383828)
