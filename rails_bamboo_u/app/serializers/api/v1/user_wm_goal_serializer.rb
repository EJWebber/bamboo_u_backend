class Api::V1::UserWmGoalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :user_id, :wm_goal_id, :complete
end
