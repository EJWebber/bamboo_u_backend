class Api::V1::OldUserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name
  has_many :user_wb_goals
  has_many :user_db_goals, through: :user_wb_goals
  has_many :user_wm_goals
  has_many :user_dm_goals, through: :user_wm_goals
end
