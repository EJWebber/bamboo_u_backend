class Api::V1::UserDmGoalsController < ApplicationController

    def index
        render json: UserDmGoal.all, each_serializer: UserDmGoalSerializer
    end

end
