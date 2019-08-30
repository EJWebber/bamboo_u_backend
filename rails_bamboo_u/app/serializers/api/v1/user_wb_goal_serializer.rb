class Api::V1::UserWbGoalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :wb_goal_id, :complete
  has_many :user_db_goals
end
