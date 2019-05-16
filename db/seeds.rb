# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.delete_all
# 37.786337, -122.443078
Bench.create!(description: "Some random place", lng:37.786337 , lat:-122.443078)
# 37.785879, -122.446458
Bench.create!(description: "Fire Station", lng:37.785879 , lat:-122.446458)
# 37.783370, -122.447723
Bench.create!(description: "Trader Joe", lng:37.783370 , lat:-122.447723)
