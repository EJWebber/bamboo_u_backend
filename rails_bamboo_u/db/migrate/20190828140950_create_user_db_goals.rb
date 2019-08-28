class CreateUserDbGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :user_db_goals do |t|
      t.references :user_wb_goal, foreign_key: true
      t.integer :time
      t.boolean :complete

      t.timestamps
    end
  end
end
