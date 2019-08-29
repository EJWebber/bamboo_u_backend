class Api::V1::UserDbGoalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :user_wb_goals_id, :time, :complete
end
