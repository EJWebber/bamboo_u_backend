class Api::V1::UserWmGoalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :wm_goal_id, :complete, :created_at, :updated_at
  has_many :user_dm_goals
end
