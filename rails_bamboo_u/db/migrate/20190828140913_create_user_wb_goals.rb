class CreateUserWbGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :user_wb_goals do |t|
      t.references :user, foreign_key: true
      t.references :wb_goal, foreign_key: true
      t.boolean :complete

      t.timestamps
    end
  end
end
