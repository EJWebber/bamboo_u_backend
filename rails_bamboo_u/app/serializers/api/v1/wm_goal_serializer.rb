class Api::V1::WmGoalSerializer < ActiveModel::Serializer
  attributes :id, :activity
  has_many :user_wm_goals
end
