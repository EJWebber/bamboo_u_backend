class Api::V1::UserWmGoalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :wm_goal_id, :complete
  has_many :user_dm_goals
end
