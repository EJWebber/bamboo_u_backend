class Api::V1::UserDbGoalsController < ApplicationController
   
    def index
        render json: UserDbGoal.all, each_serializer: UserDbGoalSerializer
    end

end
