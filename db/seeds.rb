# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.create(name: "Ed", password: "password")

WmGoal.delete_all
WmGoal.create(activity: "Meditate")
WmGoal.create(activity: "Write a journal entry")
WmGoal.create(activity: "Meet up with friends")
WmGoal.create(activity: "Cook/bake something special")
WmGoal.create(activity: "Try a new activity")
WmGoal.create(activity: "Treat yourself to lunch")
WmGoal.create(activity: "Read a book")
WmGoal.create(activity: "Get an early night")
WmGoal.create(activity: "Go for a walk")
WmGoal.create(activity: "Disconnect from screens")
WmGoal.create(activity: "Listen to relaxing music")
WmGoal.create(activity: "Sit down with a cup of tea")
WmGoal.create(activity: "Help someone in need")
WmGoal.create(activity: "Play with your/friend's pet")
WmGoal.create(activity: "Reach out to family")
WmGoal.create(activity: "Give someone a hug")
WmGoal.create(activity: "Complete a puzzle/mind game")
# UserWbGoal.delete_all
WbGoal.delete_all
WbGoal.create(activity: "Run")
WbGoal.create(activity: "Swim")
WbGoal.create(activity: "Cycle")
WbGoal.create(activity: "Hike")
WbGoal.create(activity: "Spin class")
WbGoal.create(activity: "Yoga")
WbGoal.create(activity: "Lift weights")
WbGoal.create(activity: "HIIT")

# UserWmGoal.delete_all

puts("seeded")