class Api::V1::UserWbGoalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :wb_goal_id, :complete, :created_at, :updated_at
  has_many :user_db_goals
end
