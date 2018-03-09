# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


  # Location.create!([{name: "Bertha's Cupcakes Boston", street: "123 Apple St", city: "Boston", state: "MA", zipcode: 02110 }, {name: "Bertha's Cupcakes MSP", street: "47 Main St", city: "Minneapolis", state: "MN", zipcode: 55402 }, {name: "Bertha's Cupcakes San Francisco", street: "551 Stockton St", city: "San Francisco", state: "CA", zipcode: 94108 }])

  location1 = Location.create(name: "Bertha's Cupcakes Boston", street: "123 Apple St", city: "Boston", state: "MA", zipcode: 02110 )
  location2 = Location.create(name: "Bertha's Cupcakes MSP", street: "47 Main St", city: "Minneapolis", state: "MN", zipcode: 55402 )
  location3 = Location.create(name: "Bertha's Cupcakes San Francisco", street: "551 Stockton St", city: "San Francisco", state: "CA", zipcode: 94108 )


  Cupcake.create!(flavor: "chocolate", size: "medium", price: "$3.50", location: location3)
  Cupcake.create!(flavor: "vanilla", size: "medium", price: "$3.50", location: location1) 
  Cupcake.create!(flavor: "strawberry", size: "small", price: "$2.00", location: location1)
  Cupcake.create!(flavor: "lemon", size: "medium", price: "$3.50", location: location2)

  