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

ActiveRecord::Schema.define(version: 2019_08_28_140950) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "user_db_goals", force: :cascade do |t|
    t.bigint "user_wb_goal_id"
    t.integer "time"
    t.boolean "complete"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_wb_goal_id"], name: "index_user_db_goals_on_user_wb_goal_id"
  end

  create_table "user_dm_goals", force: :cascade do |t|
    t.bigint "user_wm_goal_id"
    t.boolean "complete"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_wm_goal_id"], name: "index_user_dm_goals_on_user_wm_goal_id"
  end

  create_table "user_wb_goals", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "wb_goal_id"
    t.boolean "complete"
    t.integer "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_wb_goals_on_user_id"
    t.index ["wb_goal_id"], name: "index_user_wb_goals_on_wb_goal_id"
  end

  create_table "user_wm_goals", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "wm_goal_id"
    t.boolean "complete"
    t.integer "number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_wm_goals_on_user_id"
    t.index ["wm_goal_id"], name: "index_user_wm_goals_on_wm_goal_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wb_goals", force: :cascade do |t|
    t.string "activity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wm_goals", force: :cascade do |t|
    t.string "activity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "user_db_goals", "user_wb_goals"
  add_foreign_key "user_dm_goals", "user_wm_goals"
  add_foreign_key "user_wb_goals", "users"
  add_foreign_key "user_wb_goals", "wb_goals"
  add_foreign_key "user_wm_goals", "users"
  add_foreign_key "user_wm_goals", "wm_goals"
end
