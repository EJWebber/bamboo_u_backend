class CreateUserWmGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :user_wm_goals do |t|
      t.references :user, foreign_key: true
      t.references :wm_goal, foreign_key: true
      t.boolean :complete
      t.integer :number

      t.timestamps
    end
  end
end
