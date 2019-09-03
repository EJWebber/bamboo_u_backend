class CreateUserDmGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :user_dm_goals do |t|
      t.references :user_wm_goal, foreign_key: true
      t.boolean :complete

      t.timestamps
    end
  end
end
