class Api::V1::UserDbGoalSerializer < ActiveModel::Serializer
  attributes :id, :user_wb_goals_id, :time, :complete
end
