class Api::V1::WmGoalSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :activity, :number
end
