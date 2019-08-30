class Api::V1::UserWmGoalsController < ApplicationController

    def index
        render json: UserWmGoal.all, each_serializer: UserWmGoalSerializer
    end

end
