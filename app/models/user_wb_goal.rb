class UserWbGoal < ApplicationRecord
  belongs_to :user
  belongs_to :wb_goal
  has_many :user_db_goals
end
