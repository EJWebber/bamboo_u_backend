class Api::V1::UserWbGoalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :wb_goal_id, :complete, :created_at, :updated_at, :time
  has_many :user_db_goals
end
