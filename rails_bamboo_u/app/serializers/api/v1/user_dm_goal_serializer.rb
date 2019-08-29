class Api::V1::UserDmGoalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :user_wm_goal_id, :complete
end
