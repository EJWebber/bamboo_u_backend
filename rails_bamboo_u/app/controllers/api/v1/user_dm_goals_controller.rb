class Api::V1::UserDmGoalsController < ApplicationController

    def index
        render json: UserDmGoal.all, each_serializer: Api::V1::UserDmGoalSerializer
    end

end
