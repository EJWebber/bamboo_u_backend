class Api::V1::WbGoalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :activity
end
