class UserWmGoal < ApplicationRecord
  belongs_to :user
  belongs_to :wm_goal
  has_many :user_dm_goals, :dependent => :destroy
end
