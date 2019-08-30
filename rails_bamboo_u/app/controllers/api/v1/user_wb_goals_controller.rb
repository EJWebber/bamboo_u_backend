class Api::V1::UserWbGoalsController < ApplicationController

    def index
        render json: UserWbGoal.all, each_serializer: UserWbGoalSerializer
    end

end
