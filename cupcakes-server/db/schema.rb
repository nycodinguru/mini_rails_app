# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180309030339) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cupcakes", force: :cascade do |t|
    t.string "flavor"
    t.string "size"
    t.string "price"
    t.bigint "location_id"
    t.index ["location_id"], name: "index_cupcakes_on_location_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.string "street"
    t.string "city"
    t.string "state"
    t.integer "zipcode"
  end

end
