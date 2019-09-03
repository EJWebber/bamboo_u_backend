class User < ApplicationRecord
    has_many :user_wb_goals
    has_many :user_wm_goals
    has_many :wb_goals, through: :user_wb_goals
    has_many :wm_goals, through: :user_wm_goals
    has_many :user_db_goals, through: :user_wb_goals
    has_many :user_dm_goals, through: :user_wm_goals

    validates :name, uniqueness: { case_sensitive: true }
end
