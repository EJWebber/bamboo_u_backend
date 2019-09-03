class Api::V1::UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :user_wb_goals
  has_many :user_db_goals
  has_many :user_wm_goals
  has_many :user_dm_goals
end
