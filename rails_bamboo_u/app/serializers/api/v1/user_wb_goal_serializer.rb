class Api::V1::UserWbGoalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :user_id, :wb_goal_id, :complete
end
