class Api::V1::WbGoalSerializer < ActiveModel::Serializer
  attributes :id, :activity
  has_many :user_wb_goals
end
