class CreateWbGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :wb_goals do |t|
      t.string :activity
    

      t.timestamps
    end
  end
end
