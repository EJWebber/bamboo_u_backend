class Api::V1::UserDmGoalSerializer < ActiveModel::Serializer
  attributes :id, :user_wm_goal_id, :complete, :created_at, :updated_at
end
